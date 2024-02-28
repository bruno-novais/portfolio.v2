import { useRef, useEffect } from "react";
import "./home.css";
import TopNavbar from "../../components/top-navbar/top-navbar";
import * as THREE from "three";
import { CaretDown } from "@phosphor-icons/react";
import TypeIt from "typeit-react";
import { IconButton } from '@mui/material';

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: "#5769E9" });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 2, 4);
    light.castShadow = true;
    scene.add(light);

    light.shadow.mapSize.width = 1920;
    light.shadow.mapSize.height = 1080;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadow.camera.left = -500;
    light.shadow.camera.right = 500;
    light.shadow.camera.top = 500;
    light.shadow.camera.bottom = -500;
    light.shadow.camera.visible = true;

    camera.position.z = 10;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  const SuperStrong = ({ children }) => {
    return <strong>{children}</strong>;
  };

  return (
    <>
      <div className="page home">
        <div className="navabar_container">
          <TopNavbar />
        </div>

        <div className="title" id="title">
          <TypeIt
          options={{
            speed:  50,
            waitUntilVisible: true,
          }}
        >
          Hi, I'm <SuperStrong>Bruno Novais</SuperStrong>👋!<br/>
          Seja Bem-Vindo ao meu Portifólio
        </TypeIt>
        </div>

        <div className="art"></div>

        <div className="mouse_btn">
          <IconButton href="#about" color="white">
            <CaretDown weight="fill" />
          </IconButton>
        </div>

      </div>
    </>
  );
}

export default Home;
