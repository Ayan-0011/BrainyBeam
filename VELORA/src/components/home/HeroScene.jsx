import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * Simple glossy torus-knot sculpture.
 * - Plain three.js (no extra deps, no external HDR/model files)
 * - Slow auto-rotate + soft float, drag to rotate with inertia
 * - Pauses when off-screen, respects prefers-reduced-motion, cleans up on unmount
 */
export default function HeroScene({ color = '#ff6a1a' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Renderer (transparent so the card background shows through)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.touchAction = 'pan-y'; // vertical page scroll still works on mobile
    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.style.display = 'block';
    mount.appendChild(renderer.domElement);

    // Scene + soft studio lighting (generated in code, no files to load)
    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;

    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(3, 4, 5);
    scene.add(key);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    // The sculpture
    const geometry = new THREE.TorusKnotGeometry(1.1, 0.38, 256, 48, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({
      color,
      roughness: 0.28,
      metalness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
    });
    const mesh = new THREE.Mesh(geometry, material);
    const group = new THREE.Group();
    group.rotation.x = 0.25;
    group.add(mesh);
    scene.add(group);

    // Sizing
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    // Drag to rotate (with inertia)
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velY = 0;
    const baseSpeed = reduceMotion ? 0 : 0.004;

    const onDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      renderer.domElement.style.cursor = 'grabbing';
      renderer.domElement.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      velY = dx * 0.01;
      group.rotation.y += dx * 0.01;
      group.rotation.x = THREE.MathUtils.clamp(group.rotation.x + dy * 0.01, -0.9, 0.9);
    };
    const onUp = () => {
      dragging = false;
      renderer.domElement.style.cursor = 'grab';
    };
    const el = renderer.domElement;
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('pointerleave', onUp);

    // Only render while visible
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(mount);

    // Loop
    let raf;
    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();

      if (!dragging) {
        velY = THREE.MathUtils.lerp(velY, baseSpeed, 0.04);
        group.rotation.y += velY;
        group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, 0.25, 0.02);
      }
      if (!reduceMotion) mesh.position.y = Math.sin(t * 1.1) * 0.08;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      el.removeEventListener('pointerleave', onUp);
      geometry.dispose();
      material.dispose();
      envTexture.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (el.parentNode === mount) mount.removeChild(el);
    };
  }, [color]);

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />;
}