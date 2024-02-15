import { useRef, useEffect } from "react";
import "./home.css";
import TopNavbar from "../../components/top-navbar/top-navbar";
import * as THREE from "three";

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Habilita o suporte a sombras no renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.shadowMap.enabled = true; // Habilita sombras
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Tipo de sombra suave

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: "#5769E9" }); // Materiais padrão para sombras
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true; // Permite que o cubo projete sombras
    scene.add(cube);

    // Adiciona uma luz direcional com sombras
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 2, 4);
    light.castShadow = true; // Permite que a luz projete sombras
    scene.add(light);

    // Configurações de sombra para a luz
    light.shadow.mapSize.width = 1024; // Define o tamanho do mapa de sombras
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    light.shadow.camera.left = -500;
    light.shadow.camera.right = 500;
    light.shadow.camera.top = 500;
    light.shadow.camera.bottom = -500;
    light.shadow.camera.visible = true; // Opcional: torna visível a frustum da câmera de sombras

    camera.position.z = 10;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    // Limpeza ao desmontar o componente
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="page home">
      <div ref={containerRef} className="threejs-container"></div>
      <div className="home_content">
        <TopNavbar />
        <div className="title">
          <h1>Lorem ipsum is placeholder text commonly </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
