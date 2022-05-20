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

const tick = () => {
    window.requestAnimationFrame(tick)

    Mesh.rotation.y += 0.015
    
    renderer.render(scene, camera)
}

tick()

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;


const canvas = document.querySelector("#anime");
renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );      
canvas.appendChild( renderer.domElement );

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

var request = new XMLHttpRequest();
   request.open("GET", "./data/work.json", false);
   request.send(null)
   var work = JSON.parse(request.responseText);

for (let i = 0; i < work.length; i++) {
    const e = work[i];
    const workBox = document.querySelector(".work");
    const ele = document.createElement('div');
    ele.innerHTML = `
        <div class="work-card">
            <img src=${e.img} alt="">
            <div class="info">
                <h2>${e.title}</h2>
                <ul>
                    <li>${e.li[0]}</li>
                    <li>${e.li[2]}</li>
                    <li>${e.li[2]}</li>
                </ul>
                <p>Visit: <a href=${e.link}>here</a></p>
            </div>
        </div>
    `;
    workBox.appendChild(ele)
}

var request = new XMLHttpRequest();
   request.open("GET", "./data/blog.json", false);
   request.send(null)
   var work = JSON.parse(request.responseText);

for (let i = 0; i < work.length; i++) {
    const e = work[i];
    const blogBox = document.querySelector(".blog");
    const ele = document.createElement('div');

    ele.innerHTML = `
        <div class="blog-card">
            <img src=${e.img} alt="">
            <div class="info">
                <h2>${e.title}</h2>
                <p>${e.content}</p>
            </div>
        </div>
    `;
    blogBox.appendChild(ele)
}

var request = new XMLHttpRequest();
   request.open("GET", "./data/project.json", false);
   request.send(null)
   var work = JSON.parse(request.responseText);

for (let i = 0; i < work.length; i++) {
    const e = work[i];
    const blogBox = document.querySelector(".project");
    const ele = document.createElement('div');

    ele.innerHTML = `
        <div class="project-card">
            <img src=${e.img} alt="">
            <div class="info">
                <h2>${e.title}</h2>
                <p>${e.content}</p>
            </div>
        </div>
    `;
    blogBox.appendChild(ele)
}
