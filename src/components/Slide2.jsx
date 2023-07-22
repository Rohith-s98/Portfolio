import React, {Suspense} from 'react';
import './Slide2.css'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "../utility/Cube";

const Slide2 = () => {
  return (
    <div className="slide2">
        <div className="slide2__cube">
        <Canvas camera={{ position: [2, 2, 2], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
        <div className="slide2__text">
            <h3>Unleash the power of web development, empowering digital transformation through innovation, passion, and boundless curiosity.</h3>
        </div>
    </div>
  )
}

export default Slide2