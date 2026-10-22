import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const checkWebGL = () => {
  if (typeof window === 'undefined') return true;
  try {
    const testCanvas = document.createElement('canvas');
    return Boolean(testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
};

export default function HeroScene() {
  const containerRef = useRef(null);
  const [webGLSupported] = useState(checkWebGL);

  useEffect(() => {
    if (!webGLSupported) return;
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 480;
    let height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch {
      setWebGLSupported(false);
      return;
    }

    // Lighting setup matching Warm Ivory #F7F5F0, Charcoal #202124 & Orange #FF7417
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff7417, 3.4);
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff9e4f, 2.2);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);

    const topSoftLight = new THREE.PointLight(0xffeedb, 2.5, 25);
    topSoftLight.position.set(0, 6, 3);
    scene.add(topSoftLight);

    const charcoalFill = new THREE.DirectionalLight(0x202124, 1.2);
    charcoalFill.position.set(0, -5, 2);
    scene.add(charcoalFill);

    // Group for entire sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Primary Material: High-gloss liquid metallic Orange (#FF7417)
    const orangeMetalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff7417,
      emissive: 0x3d1700,
      roughness: 0.18,
      metalness: 0.78,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
      reflectivity: 0.95,
    });

    // 2. Secondary Material: Warm Sand & Champagne Gold (#EAE5DB / #F7F5F0 accent)
    const ivoryMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xeae5db,
      roughness: 0.3,
      metalness: 0.45,
      clearcoat: 0.5,
    });

    // 3. Accent Material: Sleek Obsidian Charcoal (#202124)
    const charcoalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x202124,
      emissive: 0x111214,
      roughness: 0.25,
      metalness: 0.85,
      clearcoat: 0.7,
    });

    // Outer Liquid Sculpture Torus (Signature Velora Loop)
    const torusGeometry = new THREE.TorusGeometry(2.1, 0.48, 64, 128);
    const mainTorus = new THREE.Mesh(torusGeometry, orangeMetalMaterial);
    mainTorus.rotation.x = Math.PI * 0.35;
    mainTorus.rotation.y = Math.PI * 0.15;
    sculptureGroup.add(mainTorus);

    // Core Architectural V & Monolith Group
    const vGroup = new THREE.Group();
    
    // Left Wing of V (Orange)
    const wingGeo = new THREE.BoxGeometry(0.3, 2.3, 0.3);
    const leftWing = new THREE.Mesh(wingGeo, orangeMetalMaterial);
    leftWing.position.set(-0.58, 0.15, 0.1);
    leftWing.rotation.z = Math.PI * 0.16;
    vGroup.add(leftWing);

    // Right Wing of V (Orange)
    const rightWing = new THREE.Mesh(wingGeo, orangeMetalMaterial);
    rightWing.position.set(0.58, 0.15, 0.1);
    rightWing.rotation.z = -Math.PI * 0.16;
    vGroup.add(rightWing);

    // Apex Core Jewel (Charcoal obsidian facet)
    const apexGeo = new THREE.OctahedronGeometry(0.42, 0);
    const apexJewel = new THREE.Mesh(apexGeo, charcoalMaterial);
    apexJewel.position.set(0, -0.85, 0.2);
    vGroup.add(apexJewel);

    // Center Floating Sphere (Warm Ivory pearl)
    const centerOrbGeo = new THREE.SphereGeometry(0.5, 48, 48);
    const centerOrb = new THREE.Mesh(centerOrbGeo, ivoryMaterial);
    centerOrb.position.set(0, 0.2, -0.1);
    vGroup.add(centerOrb);

    sculptureGroup.add(vGroup);

    // Dynamic Orbiting Rings
    const ringGeo1 = new THREE.TorusGeometry(3.0, 0.035, 24, 96);
    const orbitRing1 = new THREE.Mesh(ringGeo1, ivoryMaterial);
    orbitRing1.rotation.x = Math.PI * 0.6;
    orbitRing1.rotation.z = Math.PI * 0.2;
    sculptureGroup.add(orbitRing1);

    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.025, 24, 96);
    const orbitRing2 = new THREE.Mesh(ringGeo2, charcoalMaterial);
    orbitRing2.rotation.x = -Math.PI * 0.4;
    orbitRing2.rotation.y = Math.PI * 0.3;
    sculptureGroup.add(orbitRing2);

    // Interactive Drag & Parallax Logic
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };
    let dragDeltaX = 0;
    let dragDeltaY = 0;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.7;
      targetY = y * 0.5;
    };

    const onPointerDown = (e) => {
      isDragging = true;
      previousPointerPosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPointerPosition.x;
      const deltaY = e.clientY - previousPointerPosition.y;
      dragDeltaX += deltaX * 0.008;
      dragDeltaY += deltaY * 0.008;
      previousPointerPosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Smooth resize observer for fluid responsive layouts
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      // Decay drag delta over time
      dragDeltaX *= 0.95;
      dragDeltaY *= 0.95;

      // Group rotation combining continuous flow + mouse parallax + drag interaction
      sculptureGroup.rotation.y += 0.004 + dragDeltaX;
      sculptureGroup.rotation.x += dragDeltaY;
      
      sculptureGroup.position.x = mouseX * 0.4;
      sculptureGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12 - mouseY * 0.3;

      // Counter rotations
      mainTorus.rotation.z = elapsedTime * 0.12;
      orbitRing1.rotation.z = -elapsedTime * 0.15;
      orbitRing2.rotation.z = elapsedTime * 0.1;
      vGroup.rotation.y = -elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      torusGeometry.dispose();
      wingGeo.dispose();
      apexGeo.dispose();
      centerOrbGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      orangeMetalMaterial.dispose();
      ivoryMaterial.dispose();
      charcoalMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[360px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Three.js Velora Sculpture"
    >
      {/* Fallback if WebGL isn't supported */}
      {!webGLSupported && (
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center animate-pulse-subtle">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange/30 via-orange/15 to-transparent blur-2xl" />
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl animate-float-slow">
            <circle cx="100" cy="100" r="75" fill="none" stroke="#FF7417" strokeWidth="18" strokeDasharray="360 40" opacity="0.9" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#EAE5DB" strokeWidth="6" opacity="0.7" />
            <path d="M70 75L100 135L130 75" fill="none" stroke="#FF7417" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="100" cy="100" r="12" fill="#202124" />
          </svg>
        </div>
      )}
    </div>
  );
}
