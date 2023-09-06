import React, {Suspense, useEffect, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
// import * as THREE from 'three'; // Import THREE
// import { BoxHelper } from 'three'; // import BoxHelper
import { useAnimations } from '@react-three/drei';

const MyModel = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./planet/CharithModelOutput.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(nodes);
    console.log(animations);
    // Apply a rotation to the group to rotate the entire model
    group.current.rotation.y = -Math.PI / 4; // Rotate by -45 degrees

    console.log(actions['Armature|mixamo.com|Layer0']);
    actions['Armature.001|mixamo.com|Layer0'].play();

  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={props.isMobile ? [0, -1.25, 0] : [0, -2.5, 0]}>
        <hemisphereLight intensity={0.8}
          groundColor="black" />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={props.isMobile?1.5:2.65}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} />
        </group>
      </group>
    </group>
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
    style={{ height: '800px' }}
    // shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 100,
      position: [-2, 3.5, 5]
    }}
    gl={{preserveDrawingBuffer: true}}>
      {/* have a loader while the moddel is loading, we use Suspense */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />

        <MyModel isMobile={isMobile} />
      </Suspense>

      {/* <Preload all/> */}
    </Canvas>
  );
}

export default MyModelCanvas;