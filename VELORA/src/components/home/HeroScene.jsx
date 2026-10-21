import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch (e) {
      setWebGLSupported(false);
      return;
    }

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

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
      renderer.toneMappingExposure = 1.15;
      container.appendChild(renderer.domElement);
    } catch (err) {
      setWebGLSupported(false);
      return;
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff7417, 3.2);
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffa257, 2.0);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);

    const topSoftLight = new THREE.PointLight(0xffefe0, 2.5, 20);
    topSoftLight.position.set(0, 6, 2);
    scene.add(topSoftLight);

    // Group for entire sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Primary Material: Glossy Orange Liquid Metal
    const orangeMetalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff7417,
      emissive: 0x4a1800,
      roughness: 0.22,
      metalness: 0.75,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });

    // Secondary Accent Material: Warm Sand & Champagne Gold
    const sandCoreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe8d5bb,
      roughness: 0.35,
      metalness: 0.4,
      clearcoat: 0.4,
    });

    // 1. Signature Sculptural Liquid Torus
    const torusGeometry = new THREE.TorusGeometry(2.1, 0.52, 64, 128);
    const mainTorus = new THREE.Mesh(torusGeometry, orangeMetalMaterial);
    mainTorus.rotation.x = Math.PI * 0.35;
    mainTorus.rotation.y = Math.PI * 0.15;
    sculptureGroup.add(mainTorus);

    // 2. Inner Stylized Geometric V Prism Core
    const vGroup = new THREE.Group();
    
    // Left Wing of V
    const wingGeo = new THREE.BoxGeometry(0.32, 2.4, 0.32);
    const leftWing = new THREE.Mesh(wingGeo, orangeMetalMaterial);
    leftWing.position.set(-0.6, 0.15, 0.1);
    leftWing.rotation.z = Math.PI * 0.16;
    vGroup.add(leftWing);

    // Right Wing of V
    const rightWing = new THREE.Mesh(wingGeo, orangeMetalMaterial);
    rightWing.position.set(0.6, 0.15, 0.1);
    rightWing.rotation.z = -Math.PI * 0.16;
    vGroup.add(rightWing);

    // Apex Core Jewel
    const apexGeo = new THREE.OctahedronGeometry(0.38, 0);
    const apexJewel = new THREE.Mesh(apexGeo, sandCoreMaterial);
    apexJewel.position.set(0, -0.85, 0.2);
    vGroup.add(apexJewel);

    // Center Floating Sphere
    const centerOrbGeo = new THREE.SphereGeometry(0.48, 48, 48);
    const centerOrb = new THREE.Mesh(centerOrbGeo, sandCoreMaterial);
    centerOrb.position.set(0, 0.2, -0.1);
    vGroup.add(centerOrb);

    sculptureGroup.add(vGroup);

    // Orbiting Micro Rings / Satellites
    const ringGeo = new THREE.TorusGeometry(3.1, 0.04, 24, 96);
    const orbitRing = new THREE.Mesh(ringGeo, sandCoreMaterial);
    orbitRing.rotation.x = Math.PI * 0.6;
    orbitRing.rotation.z = Math.PI * 0.2;
    sculptureGroup.add(orbitRing);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.6;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp Mouse Movement
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Organic Floating & Rotation
      sculptureGroup.rotation.y = elapsedTime * 0.22 + mouseX * 0.8;
      sculptureGroup.rotation.x = Math.sin(elapsedTime * 0.35) * 0.12 - mouseY * 0.6;
      sculptureGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.14;

      // Subtle counter-rotation on inner elements
      mainTorus.rotation.z = elapsedTime * 0.15;
      orbitRing.rotation.z = -elapsedTime * 0.12;
      vGroup.rotation.y = -elapsedTime * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      torusGeometry.dispose();
      wingGeo.dispose();
      apexGeo.dispose();
      centerOrbGeo.dispose();
      ringGeo.dispose();
      orangeMetalMaterial.dispose();
      sandCoreMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center -z-0 opacity-80 sm:opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
    >
      {/* Graceful Fallback for non-WebGL / low-end mobile */}
      {!webGLSupported && (
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center animate-pulse-subtle">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange/30 via-orange/15 to-transparent blur-2xl" />
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl animate-float-slow">
            <circle cx="100" cy="100" r="75" fill="none" stroke="#FF7417" strokeWidth="18" strokeDasharray="360 40" opacity="0.9" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#E8D5BB" strokeWidth="6" opacity="0.7" />
            <path d="M70 75L100 135L130 75" fill="none" stroke="#FF7417" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="100" cy="100" r="10" fill="#E8D5BB" />
          </svg>
        </div>
      )}
    </div>
  );
}
