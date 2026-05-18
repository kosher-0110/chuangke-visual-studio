"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";

const vertex = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = `
  uniform float uProgress;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center);
    float angle = atan(center.y, center.x);

    float radius = uProgress * 0.82;
    float edge = 0.06;

    float disc = 1.0 - smoothstep(radius - edge, radius + edge, dist);

    float glow = exp(-abs(dist - radius) * 35.0) * 0.55;
    glow += exp(-abs(dist - radius) * 14.0) * 0.18;

    float rays = sin(angle * 5.0 + uTime * 0.35) * 0.5 + 0.5;
    rays = mix(1.0, rays * 0.35 + 0.65, glow * 2.2);

    vec3 warm = vec3(0.98, 0.93, 0.82);
    vec3 cold = vec3(0.62, 0.74, 0.78);
    vec3 color = mix(cold, warm, rays);

    float alpha = disc + glow;

    gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
  }
`;

function Veil({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uProgress: { value: 0 },
          uTime: { value: 0 },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  useFrame((state) => {
    material.uniforms.uProgress.value = progressRef.current;
    material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export default function TransitionPortal({
  progressRef,
}: {
  progressRef: MutableRefObject<number>;
}) {
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 1.8], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <Veil progressRef={progressRef} />
      </Canvas>
    </div>
  );
}
