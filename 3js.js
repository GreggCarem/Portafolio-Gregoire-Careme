import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeScene() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x1e1e1e, 1);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = false;

    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    let model, mixer, idleAction, hoverAction;
    const clock = new THREE.Clock();

    const loader = new GLTFLoader();
    loader.load(".src/assets/baymax.glb", (gltf) => {
      model = gltf.scene;
      model.scale.set(1, 1, 1);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      const clips = gltf.animations;

      if (clips.length > 0) {
        idleAction = mixer.clipAction(clips[0]);
        hoverAction = mixer.clipAction(clips[1] || clips[0]);

        idleAction.setLoop(THREE.LoopRepeat);
        hoverAction.setLoop(THREE.LoopOnce);
        hoverAction.clampWhenFinished = true;
        hoverAction.setEffectiveTimeScale(1);

        idleAction.play();

        setInterval(() => {
          idleAction.fadeOut(0.3);
          hoverAction.reset().fadeIn(0.3).play();

          setTimeout(() => {
            hoverAction.fadeOut(0.3);
            idleAction.reset().fadeIn(0.3).play();
          }, hoverAction._clip.duration * 1000);
        }, 8000);
      }

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3()).length();

      camera.position.set(center.x, center.y, center.z + size * 0.7);
      camera.lookAt(center);

      controls.target.copy(center);
      controls.update();
    });

    function animate() {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(clock.getDelta());
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }, []);

  return <div id="threejs-container" className="threejs-container" ref={containerRef} style={{ width: "40rem", height: "40rem" }} />;
}