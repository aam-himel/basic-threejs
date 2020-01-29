let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


    // scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('anim').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const texture = new THREE.TextureLoader().load('../img/box.jpg')
    const material = new THREE.MeshBasicMaterial({ map: texture });

    cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;
}

function animate() {
    (animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();