const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, 500/500);
camera.position.z = 3

scene.add(camera);

const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load("https://bruno-simon.com/prismic/matcaps/8.png")

const geometry = new THREE.TorusKnotGeometry(.5, .2, 100, 22);
const material = new THREE.MeshMatcapMaterial({
    matcap: texture
});

const Mesh = new THREE.Mesh(geometry, material);
Mesh.rotation.y = .5

scene.add(Mesh);

const renderer = new THREE.WebGLRenderer({
    alpha: true
});

renderer.setSize(500, 500);

const tick = () => {
    window.requestAnimationFrame(tick)

    Mesh.rotation.y += 0.015
    
    renderer.render(scene, camera)
}

tick()

document.body.append(renderer.domElement)

const cursor = {
    x: 0,
    y: 0
}

window.addEventListener("mousemove", (e) => {
    cursor.x = (e.clientX / 500) - 0.5
    cursor.y = (e.clientY / 500) - 0.5

    const cameraX = cursor.x - 1
    const cameraY = - cursor.y

    camera.position.x = (cameraX - camera.position.x) / 5
    camera.position.y = (cameraY - camera.position.y) / 5
})


