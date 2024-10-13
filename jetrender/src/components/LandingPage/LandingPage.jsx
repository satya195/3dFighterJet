import "./LandingPageStyle.css";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CloudvideoBg from "../../assets/videos/CloudvideoBg.mp4";

const LandingPage = () => {
    const scene = new THREE.Scene();
    return (
        <>
        <div className='landingPage-Box'>
            <video src={CloudvideoBg} autoPlay loop muted className='cloudVideoBg'/>
            <div className='landingcontainer'>
            <h1 className='landingText' id="landingText">Hello sweetheart</h1>
            </div>
        </div>
        </>
    );
};

export default LandingPage