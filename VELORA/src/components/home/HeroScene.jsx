import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * VELORA hero sculpture (simple version)
 * One glossy orange ring, one pearl orb inside it, one thin charcoal ring.
 * Slow spin + float + soft pointer parallax. No drag, so mobile scroll never gets blocked.
 */

const COLORS = {
  orange: '#ff7417',
  pearl: '#f3ece0',
  charcoal: '#202124',
};

const hasWebGL = () => {
  if (typeof document === 'undefined') return true;
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
};

function makeShadowTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(32,33,36,0.5)');
  g.addColorStop(0.55, 'rgba(32,33,36,0.14)');
  g.addColorStop(1, 'rgba(32,33,36,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function Fallback() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center" aria-hidden="true">
      <div className="absolute w-[70%] aspect-square rounded-full bg-orange/15 blur-2xl" />
      <svg viewBox="0 0 200 200" className="relative w-[70%] h-auto">
        <ellipse cx="100" cy="100" rx="78" ry="48" fill="none" stroke="#FF7417" strokeWidth="14" transform="rotate(-20 100 100)" />
        <circle cx="100" cy="100" r="28" fill="#F3ECE0" stroke="#EAE5DB" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function HeroScene() {
  const containerRef = useRef(null);
  const [supported, setSupported] = useState(hasWebGL);

  useEffect(() => {
    if (!supported) return;
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setSupported(false);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    const canvas = renderer.domElement;
    canvas.style.cssText = 'display:block;width:100%;height:100%;opacity:0;transition:opacity 600ms ease';
    container.appendChild(canvas);

    const onLost = (e) => {
      e.preventDefault();
      setSupported(false);
    };
    canvas.addEventListener('webglcontextlost', onLost);

    // Scene + reflections (generated in code, no files to download)
    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;

    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 4, 5);
    scene.add(key);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.3, 7);
    camera.lookAt(0, -0.1, 0);

    // Sculpture
    const root = new THREE.Group(); // pointer parallax
    const spin = new THREE.Group(); // slow rotation + float
    root.add(spin);
    scene.add(root);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.9, 0.42, 64, 160),
      new THREE.MeshPhysicalMaterial({
        color: COLORS.orange,
        roughness: 0.22,
        metalness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      })
    );
    ring.rotation.x = 1.0;
    spin.add(ring);

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.95, 64, 64),
      new THREE.MeshPhysicalMaterial({
        color: COLORS.pearl,
        roughness: 0.25,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      })
    );
    spin.add(orb);

    const thin = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.03, 24, 200),
      new THREE.MeshStandardMaterial({ color: COLORS.charcoal, roughness: 0.3, metalness: 0.9 })
    );
    thin.rotation.set(-0.6, 0.3, 0);
    spin.add(thin);

    // Soft shadow under the sculpture
    const shadowTex = makeShadowTexture();
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.5 })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -2.5;
    shadow.scale.setScalar(4);
    scene.add(shadow);

    const render = () => renderer.render(scene, camera);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.z = w < 340 ? 8.2 : w < 440 ? 7.6 : 7;
      camera.updateProjectionMatrix();
      if (reduceMotion) render();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // Pointer parallax (only on the scene itself)
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = container.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };
    if (!reduceMotion) {
      container.addEventListener('pointermove', onMove);
      container.addEventListener('pointerleave', onLeave);
    }

    // Pause when off-screen
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(container);

    let raf;
    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();

      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;

      root.rotation.y = current.x * 0.3;
      root.rotation.x = current.y * 0.15;
      spin.rotation.y = t * 0.25;
      spin.position.y = Math.sin(t * 0.9) * 0.12;
      shadow.scale.setScalar(4 - Math.sin(t * 0.9) * 0.2);

      render();
    };

    render();
    requestAnimationFrame(() => {
      canvas.style.opacity = '1';
    });
    if (!reduceMotion) tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerleave', onLeave);
      canvas.removeEventListener('webglcontextlost', onLost);
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      shadowTex.dispose();
      envTexture.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, [supported]);

  if (!supported) return <Fallback />;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[280px]"
      role="img"
      aria-label="3D VELORA sculpture: an orange ring around a pearl sphere"
    />
  );
}