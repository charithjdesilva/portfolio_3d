import React, {Suspense, useEffect, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
// import * as THREE from 'three'; // Import THREE
// import { BoxHelper } from 'three'; // import BoxHelper
import { useAnimations } from '@react-three/drei';

const MyModel = ({isMobile}) => {
  // const myModel = useGLTF('./MyModel/MyModel.glb');
  // const myModel = useGLTF('./planet/MyModel3.glb');
  const myModel = useGLTF('./MyModel/MyModelFormal.glb');

  const { nodes, animations } = useGLTF('./MyModel/MyModelFormal.glb');
  const meshRef = useRef(); // create a ref for the mesh

// Get animations and actions
const { actions } = useAnimations(animations, meshRef);

// Wait until the model is loaded before getting the mesh
useEffect(() => {
  if (myModel) {
    meshRef.current = myModel.scene.children[0];
    actions['Armature|mixamo.com|Layer0'].play();
  }
}, [myModel, actions]);

  // // create a box helper for the mesh and add it to the scene
  // useEffect(() => {
  //   if (meshRef.current) {
  //     const box = new BoxHelper(meshRef.current, 0xffff00);
  //     box.name = 'BoundingBox'; // give the helper a name
  //     meshRef.current.parent.add(box); // add the helper to the parent of the mesh
  //   }
  // }, [meshRef.current]);

  return (
    <mesh ref={meshRef}>
        <hemisphereLight intensity={1}
          groundColor="black" />
        <pointLight intensity={1} />
        <spotLight 
          position={[-20, 50, 10]}
          angle={0.12} 
          penumbra={1} 
          intensity={0.8}
          castShadow
          shadow-mapSize={1024}/>
        <spotLight 
          position={[20, 50, 10]}
          angle={0.12} 
          penumbra={1} 
          intensity={0.8}
          castShadow
          shadow-mapSize={1024}/>
          <OrbitControls enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              // target={isMobile ? [0, 0, 0] : [0, 0, 0]}
              // position={isMobile ? [0, 2.25, 0] : [0, -2, 0]}
              />
          <primitive
            object={myModel.scene} 
            scale={isMobile ? 15 : 18} 
            position={isMobile ? [0, -22, 0] : [0, -26, 0]}
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
    camera={{position: [40, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>
      {/* have a loader while the moddel is loading, we use Suspense */}
      <Suspense fallback={<CanvasLoader />}>
        {/* will alow us to move, rotate. PolarAngle makes it allowing only specific angle */}
          <MyModel isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  );
}

export default MyModelCanvas;