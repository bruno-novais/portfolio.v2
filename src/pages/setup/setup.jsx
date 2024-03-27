import { useRef, useEffect } from "react";
import "./setup.css";
import { Box, IconButton, Tooltip } from "@mui/material";
import Menu from "../../components/menu/menu";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Setup() {
  useEffect(() => {
    // Verifique se o elemento DOM está disponível
    const container = document.getElementById("setup_art");
    if (!container) {
      console.error("Elemento DOM 'setup_art' não encontrado.");
      return;
    }

    // Create a Three.JS Scene
    const scene = new THREE.Scene();
    // Create a new camera with positions and angles
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Instantiate a new renderer and set its size
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the renderer to the DOM
    container.appendChild(renderer.domElement);

    // Set how far the camera will be from the 3D model
    camera.position.z = 200; // Assuming "computer" for simplicity

    // Add lights to the scene, so we can actually see the 3D model
    const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
    topLight.position.set(500, 500, 500); //top-left-ish
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 5);
    scene.add(ambientLight);

    // This adds controls to the camera, so we can rotate / zoom it with the mouse
    const controls = new OrbitControls(camera, renderer.domElement);

    // Instantiate a loader for the .gltf file
    const loader = new GLTFLoader();

    // Load the file
    loader.load(
      `src/assets/computer/scene.gltf`, // Assuming the path is correct
      function (gltf) {
        // If the file is loaded, add it to the scene
        scene.add(gltf.scene);
      },
      function (xhr) {
        // While it is loading, log the progress
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        // If there is an error, log it
        console.error(error);
      }
    );

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    // Start the 3D rendering
    animate();

    // Define the resize function
    const resizeFunction = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Add a listener to the window, so we can resize the window and the camera
    window.addEventListener("resize", resizeFunction);

    // Add mouse position listener, so we can make the computer move
    document.onmousemove = (e) => {
      // Assuming you want to implement movement based on mouse position
      // This part of the code was not fully implemented in the original snippet
    };

    // Cleanup function to remove event listeners and dispose of resources
    return () => {
      window.removeEventListener("resize", resizeFunction);
      renderer.dispose();
      //   camera.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <>
      <div className="page setup">
        <h1>test</h1>
        <div className="setup_art" id="setup_art"></div>
      </div>
    </>
  );
}

export default Setup;
