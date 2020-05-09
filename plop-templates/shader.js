const canvasSketch = require('canvas-sketch')
const createShader = require('canvas-sketch-util/shader')
const glsl = require('glslify')

const settings = {
	context: 'webgl',
	animate: true
}

const frag = glsl(`
  precision highp float;

  uniform float time;
  varying vec2 vUv;

  void main () {
    vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0.0, 2.0, 4.0));
    gl_FragColor = vec4(color, 1.0);
  }
`)

const sketch = ({ gl }) => {
	return createShader({
		gl, frag,
		uniforms: {
			time: ({ time }) => time
		}
	})
}

canvasSketch(sketch, settings)
