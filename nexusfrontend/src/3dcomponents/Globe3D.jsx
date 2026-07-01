import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ scrollY }) {
  // Load GLTF from the public folder
  const { scene } = useGLTF('/3dcomponents/globe/scene.gltf');
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Base auto rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05 + scrollY.current * 0.0015;
      // Gentle wobble
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <primitive 
      ref={groupRef} 
      object={scene} 
      scale={1.2} 
      position={[0, 0, 0]} 
    />
  );
}

export default function Globe3D() {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 3, 5]} intensity={1.8} castShadow />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} />
        <pointLight position={[0, 10, 0]} intensity={1.0} />
        <React.Suspense fallback={null}>
          <Model scrollY={scrollY} />
        </React.Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
