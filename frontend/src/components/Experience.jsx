import {OrbitControls, ScrollControls} from "@react-three/drei";
import {Office} from "./Office.jsx";
export const Experience = () => {
    return(
        <>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <ambientLight intensity={1}/>
            <OrbitControls enableZoom={false}/>
            <ScrollControls pages={3} damping={0.25}>
                <Office/>
            </ScrollControls>
        </>
    )
}