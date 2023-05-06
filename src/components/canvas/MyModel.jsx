import React, {Suspense, useEffect, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const MyModel = ({isMobile}) => {
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
        scale={isMobile ? 8 : 13} 
        position={isMobile ? [0, -2.25, 0] : [0, -2.25, -2.25]}
        rotation={[0, 1.405, 0]}
       />
    </mesh>
  )
}

const MyModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // change the is mobile variable
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listner for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listner when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

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
        <MyModel isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  );
}

export default MyModelCanvas;