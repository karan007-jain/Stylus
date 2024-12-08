/* eslint-disable no-unused-vars */
import {Canvas} from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei'; 

import Shirt from './ShirtWardrobe';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const WardrobeModel = ( {snap} ) => {
    return(
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full max-w-full h-full transition-all ease-in"
        >
            <Environment preset="city" />
            <CameraRig>
                <Backdrop />
                <Center>
                    <Shirt snap={snap} />
                </Center>
            </CameraRig>

        </Canvas>
    )
}

export default WardrobeModel;