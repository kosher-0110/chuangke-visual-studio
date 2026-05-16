"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function OpticalRig({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const filmGateMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#d7e4df",
        roughness: 0.18,
        metalness: 0.08,
        transmission: 0.42,
        transparent: true,
        opacity: 0.36,
        thickness: 0.7,
        ior: 1.45,
        side: THREE.DoubleSide
      }),
    []
  );

  const edgeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#f2f0ea",
        transparent: true,
        opacity: 0.34
      }),
    []
  );

  const darkMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0f1111",
        roughness: 0.5,
        metalness: 0.28
      }),
    []
  );

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const t = state.clock.elapsedTime;
    const targetX = reduced ? 0.04 : pointer.current.y * 0.16;
    const targetY = reduced ? Math.sin(t * 0.18) * 0.08 : pointer.current.x * 0.22;

    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.035);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.035);
    group.current.rotation.z = Math.sin(t * 0.16) * 0.025;
  });

  return (
    <group ref={group}>
      <Float speed={0.55} rotationIntensity={reduced ? 0.06 : 0.18} floatIntensity={reduced ? 0.08 : 0.2}>
        <mesh material={filmGateMaterial} position={[-0.82, 0.08, 0]} rotation={[0.08, -0.28, -0.03]}>
          <boxGeometry args={[1.18, 2.5, 0.035]} />
        </mesh>
        <lineSegments position={[-0.82, 0.08, 0.028]} rotation={[0.08, -0.28, -0.03]}>
          <edgesGeometry args={[new THREE.BoxGeometry(1.18, 2.5, 0.04)]} />
          <primitive object={edgeMaterial} attach="material" />
        </lineSegments>

        <mesh material={filmGateMaterial} position={[0.82, -0.08, -0.15]} rotation={[-0.04, 0.32, 0.04]}>
          <boxGeometry args={[1.18, 2.5, 0.035]} />
        </mesh>
        <lineSegments position={[0.82, -0.08, -0.122]} rotation={[-0.04, 0.32, 0.04]}>
          <edgesGeometry args={[new THREE.BoxGeometry(1.18, 2.5, 0.04)]} />
          <primitive object={edgeMaterial.clone()} attach="material" />
        </lineSegments>

        <mesh material={darkMaterial} position={[0, 0, -0.28]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.18, 0.012, 8, 120]} />
        </mesh>
        <mesh material={edgeMaterial} position={[0, 0, 0.18]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.62, 0.006, 8, 120]} />
        </mesh>
      </Float>
    </group>
  );
}

export default function StudioArtifact() {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setReduced(!media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-line bg-[#060707]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_46%,rgba(211,231,224,0.16),transparent_27rem),linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.68)_42%,rgba(5,5,5,0.12)_100%)]" />
      <div className="absolute inset-0 md:left-[32%]">
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 36 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.42} />
          <directionalLight position={[2.5, 3, 4]} intensity={2.1} color="#f2f0ea" />
          <pointLight position={[-2, -1, 2]} intensity={1.2} color="#a8c6c2" />
          <OpticalRig reduced={reduced} />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 py-14 md:items-center md:py-24">
        <div className="max-w-xl">
          <p className="mb-5 text-xs uppercase tracking-studio text-bone/42">Interactive Optical System</p>
          <h2 className="font-display text-4xl uppercase leading-none md:text-7xl">Light, Frame, Motion</h2>
          <p className="mt-7 max-w-md text-base leading-8 text-bone/58">
            A quiet 3D studio object that reacts to the cursor like a moving camera rig, adding depth without stealing focus from the films.
          </p>
        </div>
      </div>
    </section>
  );
}
