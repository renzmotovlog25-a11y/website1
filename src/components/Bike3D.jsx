import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// ─── Procedural Low-Poly ADV 160 ────────────────────────────────────────────
function ADV160Model() {
  const group = useRef();

  // Auto-rotate slowly
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  const bodyColor   = '#1a1a2e';
  const accentBlue  = '#3b82f6';
  const chromeMat   = { color: '#888', metalness: 0.9, roughness: 0.1 };
  const darkMat     = { color: '#111', metalness: 0.3, roughness: 0.7 };
  const blueMat     = { color: accentBlue, metalness: 0.4, roughness: 0.3, emissive: accentBlue, emissiveIntensity: 0.2 };
  const bodyMat     = { color: bodyColor, metalness: 0.5, roughness: 0.4 };
  const wheelMat    = { color: '#222', metalness: 0.2, roughness: 0.8 };
  const rimMat      = { color: '#aaa', metalness: 0.95, roughness: 0.1 };

  return (
    <group ref={group} position={[0, -0.4, 0]} scale={1.1}>

      {/* ── WHEELS ─────────────────────────────────────────────── */}
      {/* Rear wheel */}
      <group position={[-0.82, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.44, 0.44, 0.18, 32]} />
          <meshStandardMaterial {...wheelMat} />
        </mesh>
        {/* Rim */}
        <mesh>
          <cylinderGeometry args={[0.28, 0.28, 0.19, 8]} />
          <meshStandardMaterial {...rimMat} />
        </mesh>
        {/* Spokes */}
        {[0, 45, 90, 135].map((deg) => (
          <mesh key={deg} rotation={[0, (deg * Math.PI) / 180, 0]}>
            <boxGeometry args={[0.03, 0.22, 0.55]} />
            <meshStandardMaterial {...rimMat} />
          </mesh>
        ))}
      </group>

      {/* Front wheel */}
      <group position={[0.82, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.42, 0.42, 0.17, 32]} />
          <meshStandardMaterial {...wheelMat} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.26, 0.26, 0.18, 8]} />
          <meshStandardMaterial {...rimMat} />
        </mesh>
        {[0, 45, 90, 135].map((deg) => (
          <mesh key={deg} rotation={[0, (deg * Math.PI) / 180, 0]}>
            <boxGeometry args={[0.03, 0.22, 0.52]} />
            <meshStandardMaterial {...rimMat} />
          </mesh>
        ))}
      </group>

      {/* ── FORK / SUSPENSION ──────────────────────────────────── */}
      <mesh position={[0.6, 0.2, 0.08]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.025, 0.025, 0.55, 8]} />
        <meshStandardMaterial {...chromeMat} />
      </mesh>
      <mesh position={[0.6, 0.2, -0.08]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.025, 0.025, 0.55, 8]} />
        <meshStandardMaterial {...chromeMat} />
      </mesh>

      {/* ── FRAME / CHASSIS ────────────────────────────────────── */}
      {/* Main spine */}
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.55, 0.07, 0.09]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>
      {/* Down tube */}
      <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.65, 0.05, 0.07]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>

      {/* ── ENGINE / BODY PANELS ───────────────────────────────── */}
      {/* Engine block */}
      <mesh position={[-0.05, 0.15, 0]}>
        <boxGeometry args={[0.45, 0.3, 0.25]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>
      {/* Exhaust pipe */}
      <mesh position={[-0.15, 0.08, 0.18]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.02, 0.6, 8]} />
        <meshStandardMaterial {...chromeMat} />
      </mesh>
      <mesh position={[-0.4, 0.08, 0.22]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.025, 0.3, 8]} />
        <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* ── BODY FAIRINGS ──────────────────────────────────────── */}
      {/* Front fairing */}
      <mesh position={[0.68, 0.55, 0]}>
        <boxGeometry args={[0.22, 0.28, 0.36]} />
        <meshStandardMaterial {...bodyMat} />
      </mesh>
      {/* Side panels */}
      <mesh position={[0.1, 0.42, 0.18]}>
        <boxGeometry args={[0.7, 0.22, 0.06]} />
        <meshStandardMaterial {...blueMat} />
      </mesh>
      <mesh position={[0.1, 0.42, -0.18]}>
        <boxGeometry args={[0.7, 0.22, 0.06]} />
        <meshStandardMaterial {...blueMat} />
      </mesh>
      {/* Under cowl */}
      <mesh position={[0.55, 0.28, 0]}>
        <boxGeometry args={[0.28, 0.12, 0.3]} />
        <meshStandardMaterial {...bodyMat} />
      </mesh>

      {/* ── WINDSHIELD ─────────────────────────────────────────── */}
      <mesh position={[0.72, 0.72, 0]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[0.22, 0.18, 0.3]} />
        <meshStandardMaterial color="#88ccff" transparent opacity={0.4} metalness={0.1} roughness={0} />
      </mesh>

      {/* ── FUEL TANK / SEAT ───────────────────────────────────── */}
      {/* Fuel tank */}
      <mesh position={[0.1, 0.65, 0]}>
        <boxGeometry args={[0.45, 0.16, 0.26]} />
        <meshStandardMaterial {...bodyMat} />
      </mesh>
      {/* Seat */}
      <mesh position={[-0.28, 0.68, 0]}>
        <boxGeometry args={[0.55, 0.1, 0.22]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* ── REAR SECTION ───────────────────────────────────────── */}
      {/* Tail fairing */}
      <mesh position={[-0.7, 0.58, 0]}>
        <boxGeometry args={[0.32, 0.14, 0.2]} />
        <meshStandardMaterial {...bodyMat} />
      </mesh>
      {/* Tail light */}
      <mesh position={[-0.88, 0.58, 0]}>
        <boxGeometry args={[0.05, 0.07, 0.14]} />
        <meshStandardMaterial color="#ff2020" emissive="#ff0000" emissiveIntensity={0.8} />
      </mesh>
      {/* Rear fender */}
      <mesh position={[-0.7, 0.28, 0]}>
        <boxGeometry args={[0.28, 0.07, 0.22]} />
        <meshStandardMaterial {...bodyMat} />
      </mesh>

      {/* ── HANDLEBAR ──────────────────────────────────────────── */}
      <mesh position={[0.7, 0.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.52, 8]} />
        <meshStandardMaterial {...chromeMat} />
      </mesh>
      {/* Grips */}
      <mesh position={[0.7, 0.78, 0.26]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.08, 8]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
      <mesh position={[0.7, 0.78, -0.26]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.08, 8]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>

      {/* ── HEADLIGHT ──────────────────────────────────────────── */}
      <mesh position={[0.82, 0.55, 0]}>
        <boxGeometry args={[0.06, 0.1, 0.24]} />
        <meshStandardMaterial color="#ddeeFF" emissive="#aaddff" emissiveIntensity={0.9} metalness={0.1} />
      </mesh>

      {/* ── MIRRORS ────────────────────────────────────────────── */}
      <mesh position={[0.75, 0.84, 0.26]}>
        <boxGeometry args={[0.06, 0.05, 0.1]} />
        <meshStandardMaterial color="#333" metalness={0.8} />
      </mesh>
      <mesh position={[0.75, 0.84, -0.26]}>
        <boxGeometry args={[0.06, 0.05, 0.1]} />
        <meshStandardMaterial color="#333" metalness={0.8} />
      </mesh>

      {/* ── FOOTPEGS ───────────────────────────────────────────── */}
      <mesh position={[-0.1, 0.06, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.14, 6]} />
        <meshStandardMaterial {...chromeMat} />
      </mesh>
      <mesh position={[-0.1, 0.06, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.14, 6]} />
        <meshStandardMaterial {...chromeMat} />
      </mesh>

    </group>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const Bike3D = () => {
  return (
    <section id="bike3d" className="py-24 bg-gradient-to-b from-[#080808] to-[#0a0a0a] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <span className="w-8 h-px bg-blue-500"></span>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Interactive</span>
            <span className="w-8 h-px bg-blue-500"></span>
          </motion.div>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter">
            My <span className="text-gradient">Ride</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm">Honda ADV 160 · Drag to rotate 🏍️</p>
        </div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[480px] rounded-[2rem] overflow-hidden glass border border-white/10"
        >
          <Canvas
            camera={{ position: [0, 1.2, 3.5], fov: 50 }}
            gl={{ antialias: true }}
          >
            <color attach="background" args={['#090909']} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[4, 6, 2]} intensity={1.5} castShadow />
            <directionalLight position={[-4, 2, -2]} intensity={0.5} color="#3b82f6" />
            <pointLight position={[0, 2, 0]} intensity={0.5} color="#3b82f6" />
            <ADV160Model />
            <OrbitControls
              enablePan={false}
              minDistance={2.5}
              maxDistance={6}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 1.8}
              autoRotate={false}
            />
            <Environment preset="city" />
          </Canvas>
        </motion.div>

        {/* Hint */}
        <p className="text-center text-gray-600 text-xs mt-4 tracking-widest uppercase">
          Click + Drag to spin · Scroll to zoom
        </p>
      </div>
    </section>
  );
};

export default Bike3D;
