"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { ShaderMaterial } from "three";
import * as THREE from "three";

const vertex = `
  varying vec2 vUv;
  varying vec3 vNormal;
  void main() {
    vUv = uv;
    vNormal = normal;
    vec3 pos = position;
    pos.z += sin(pos.x * 1.6 + pos.y * 1.1) * 0.04;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragment = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    float veil = smoothstep(0.0, 0.55, vUv.x) * (1.0 - smoothstep(0.35, 1.0, vUv.y));
    veil *= 0.48;
    float drift = 0.5 + 0.5 * sin(uTime * 0.22 + vUv.y * 2.8);
    vec3 cold = vec3(0.58, 0.72, 0.76);
    vec3 warm = vec3(0.98, 0.93, 0.82);
    vec3 color = mix(cold, warm, drift) * veil;
    float fresnel = pow(1.0 - abs(vNormal.z), 2.6);
    gl_FragColor = vec4(color + fresnel * 0.22, veil * 0.4);
  }
`;

function DriftVeil() {
  const material = useRef<ShaderMaterial>(null);

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <Float speed={0.3} rotationIntensity={0.06} floatIntensity={0.08}>
      <mesh rotation={[0.12, 0.22, -0.06]} position={[0.15, -0.1, -0.3]}>
        <planeGeometry args={[3.6, 2, 64, 64]} />
        <shaderMaterial
          ref={material}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={vertex}
          fragmentShader={fragment}
        />
      </mesh>
    </Float>
  );
}

export default function WorkAmbientLight() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 3.6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.28} />
        <DriftVeil />
      </Canvas>
    </div>
  );
}
