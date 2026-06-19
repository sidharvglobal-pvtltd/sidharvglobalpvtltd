'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Float, Stars } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const cloudRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, '/images/earth-texture.png')

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.12
    if (cloudRef.current) cloudRef.current.rotation.y += delta * 0.16
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      {/* Golden atmospheric glow */}
      <mesh ref={cloudRef} scale={1.04}>
        <sphereGeometry args={[1.6, 48, 48]} />
        <meshStandardMaterial
          color="#d4a437"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh scale={1.18}>
        <sphereGeometry args={[1.6, 48, 48]} />
        <meshBasicMaterial
          color="#e3b94f"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

function OrbitRing({
  radius,
  speed,
  color,
  tilt,
}: {
  radius: number
  speed: number
  color: string
  tilt: number
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 16, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  )
}

function SpiceParticles() {
  const ref = useRef<THREE.Points>(null)
  const { positions, colors } = useMemo(() => {
    const count = 320
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const palette = [
      new THREE.Color('#d4a437'),
      new THREE.Color('#2f6b3c'),
      new THREE.Color('#c2410c'),
    ]
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 2.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  )
}

export function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.4} color="#fff4d6" />
      <pointLight position={[-5, -2, -4]} intensity={0.6} color="#2f6b3c" />
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <Globe />
        </Float>
        <OrbitRing radius={2.2} speed={0.25} color="#d4a437" tilt={Math.PI / 3} />
        <OrbitRing radius={2.6} speed={-0.18} color="#3a7d49" tilt={Math.PI / 2.4} />
        <OrbitRing radius={3.0} speed={0.14} color="#d4a437" tilt={Math.PI / 1.8} />
        <SpiceParticles />
        <Stars radius={40} depth={30} count={800} factor={3} fade speed={1} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        rotateSpeed={0.5}
      />
    </Canvas>
  )
}
