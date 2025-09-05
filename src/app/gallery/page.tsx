"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* 샘플 큐브들 */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>

      <mesh position={[2, 0, 0]}>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      {/* 추가 기하학적 형태들 */}
      <mesh position={[-1, 2, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>

      <mesh position={[1, 2, 0]}>
        <octahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#06b6d4" />
      </mesh>

      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 8]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      <Environment preset="sunset" />
    </>
  );
}

export default function Gallery3D() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8 mb-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          3D 미술관
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          THREE.js로 제작된 인터랙티브 3D 작품들을 감상해보세요. 마우스로
          회전하고 확대/축소할 수 있습니다.
        </motion.p>
      </div>

      <motion.div
        className="h-[600px] rounded-lg overflow-hidden border"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="p-6 border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">인터랙티브 조작</h3>
          <p className="text-muted-foreground">
            마우스로 3D 객체를 자유롭게 회전하고 확대/축소할 수 있습니다.
          </p>
        </motion.div>

        <motion.div
          className="p-6 border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-2">실시간 렌더링</h3>
          <p className="text-muted-foreground">
            WebGL을 활용한 고성능 실시간 3D 렌더링을 경험해보세요.
          </p>
        </motion.div>

        <motion.div
          className="p-6 border rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-xl font-semibold mb-2">다양한 작품</h3>
          <p className="text-muted-foreground">
            기하학적 형태부터 복잡한 3D 모델까지 다양한 작품을 전시합니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
