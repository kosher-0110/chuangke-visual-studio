"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Mesh, ShaderMaterial } from "three";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normal;
    vec3 pos = position;
    pos.z += sin(pos.x * 2.1 + pos.y * 1.4) * 0.05;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    float veil = smoothstep(0.12, 0.92, vUv.x) * (1.0 - smoothstep(0.7, 1.0, vUv.y));
    float pulse = 0.5 + 0.5 * sin(uTime * 0.36 + vUv.x * 4.2);
    vec3 cold = vec3(0.58, 0.72, 0.76);
    vec3 warm = vec3(0.98, 0.93, 0.82);
    vec3 color = mix(cold, warm, pulse) * veil;
    float fresnel = pow(1.0 - abs(vNormal.z), 2.2);
    gl_FragColor = vec4(color + fresnel * 0.38, veil * 0.32);
  }
`;

function DeepVeil() {
  const material = useRef<ShaderMaterial>(null);

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <Float speed={0.22} rotationIntensity={0.05} floatIntensity={0.1}>
      <mesh rotation={[-0.15, 0.42, 0.08]} position={[-0.2, 0.12, -0.5]}>
        <planeGeometry args={[5.6, 3, 64, 64]} />
        <shaderMaterial
          ref={material}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{ uTime: { value: 0 } }}
          vertexShader={`
            varying vec2 vUv;
            varying vec3 vNormal;
            void main() {
              vUv = uv;
              vNormal = normal;
              vec3 pos = position;
              pos.z += sin(pos.x * 1.4 + pos.y * 0.9) * 0.06;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `}
          fragmentShader={`
            uniform float uTime;
            varying vec2 vUv;
            varying vec3 vNormal;
            void main() {
              float veil = smoothstep(0.05, 0.7, vUv.x) * (1.0 - smoothstep(0.4, 1.0, vUv.y)) * 0.28;
              float drift = 0.5 + 0.5 * sin(uTime * 0.15 + vUv.x * 3.6);
              vec3 cold = vec3(0.48, 0.62, 0.72);
              vec3 warm = vec3(0.88, 0.84, 0.76);
              vec3 color = mix(cold, warm, drift) * veil;
              gl_FragColor = vec4(color, veil * 0.18);
            }
          `}
        />
      </mesh>
    </Float>
  );
}

function LightVeil({ reduced }: { reduced: boolean }) {
  const mesh = useRef<Mesh>(null);
  const material = useRef<ShaderMaterial>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 }
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
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
    }

    if (mesh.current && !reduced) {
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, pointer.current.y * 0.08, 0.035);
      mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, pointer.current.x * 0.12, 0.035);
    }
  });

  return (
    <Float speed={0.65} rotationIntensity={reduced ? 0.03 : 0.12} floatIntensity={reduced ? 0.05 : 0.16}>
      <mesh ref={mesh} rotation={[0.28, -0.38, -0.12]} position={[0.1, -0.08, 0]}>
        <planeGeometry args={[4.4, 2.4, 80, 80]} />
        <shaderMaterial
          ref={material}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </Float>
  );
}

export default function AbstractLight() {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setReduced(!media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 opacity-80 md:opacity-100" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.35} />
        <DeepVeil />
        <LightVeil reduced={reduced} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
