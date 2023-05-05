import React, {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const MyModel = () => {
  const myModel = useGLTF('./MyModel/myModel.glb');

  return (
    <mesh>
      <hemisphereLight intensity={0.50}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
      position={[-20, 50, 10]}
      angle={0.12} 
      penumbra={1} 
      intensity={0.5}
      castShadow
      shadow-mapSize={1024}/>
      <spotLight 
      position={[20, 50, 10]}
      angle={0.12} 
      penumbra={1} 
      intensity={0.5}
      castShadow
      shadow-mapSize={1024}/>
      <primitive
      object={myModel.scene} 
      scale={10} 
      position={[0, -2.25, 0]}
      rotation={[0, 1.415, 0]}
       />
    </mesh>
  )
}

const MyModelCanvas = () => {
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>
      {/* have a loader while the moddel is loading, we use Suspense */}
      <Suspense fallback={<CanvasLoader />}>
        {/* will alow us to move, rotate. PolarAngle makes it allowing only specific angle */}
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}/>
        <MyModel />
      </Suspense>

      <Preload all/>
    </Canvas>
  );
}

export default MyModelCanvas;