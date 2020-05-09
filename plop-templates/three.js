global.THREE = require('three')

require('three/examples/js/controls/OrbitControls')

const canvasSketch = require('canvas-sketch')

const settings = {
	animate: true,
	context: 'webgl',
	attributes: { antialias: true }
}

const sketch = ({ context }) => {
	const renderer = new THREE.WebGLRenderer({
		context
	})

	renderer.setClearColor('#000', 1)

	const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100)
	camera.position.set(2, 2, -4)
	camera.lookAt(new THREE.Vector3())

	const controls = new THREE.OrbitControls(camera, context.canvas)

	const scene = new THREE.Scene()

	const mesh = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshPhysicalMaterial({
			color: 'white',
			roughness: 0.75,
			flatShading: true
		})
	)
	scene.add(mesh)

	scene.add(new THREE.AmbientLight('#59314f'))

	const light = new THREE.PointLight('#45caf7', 1, 15.5)
	light.position.set(2, 2, -4).multiplyScalar(1.5)
	scene.add(light)

	return {
		// Handle resize events here
		resize ({ pixelRatio, viewportWidth, viewportHeight }) {
			renderer.setPixelRatio(pixelRatio)
			renderer.setSize(viewportWidth, viewportHeight)
			camera.aspect = viewportWidth / viewportHeight
			camera.updateProjectionMatrix()
		},
		// Update & render your scene here
		render ({ time }) {
			mesh.rotation.y = time * (10 * Math.PI / 180)
			controls.update()
			renderer.render(scene, camera)
		},
		// Dispose of events & renderer for cleaner hot-reloading
		unload () {
			controls.dispose()
			renderer.dispose()
		}
	}
}

canvasSketch(sketch, settings)
