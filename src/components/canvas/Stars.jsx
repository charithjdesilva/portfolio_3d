import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { LineSegments, BufferGeometry, BufferAttribute, LineBasicMaterial } from 'three';

const Stars = (props) => {
  const ref = useRef();

  // Generate random star positions as a Float32Array
  const starPositions = random.inSphere(new Float32Array(1000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 100;
    ref.current.rotation.y -= delta / 150;
  });

  // Create a buffer geometry to hold the star positions
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(starPositions, 3));

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <lineSegments ref={ref} geometry={geometry} {...props}>
        <lineBasicMaterial color="#011453" linewidth={0.4} />
      </lineSegments>
    </group>
  );
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default StarsCanvas;
