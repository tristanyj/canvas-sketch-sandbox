const canvasSketch = require('canvas-sketch')
const { mapRange } = require('canvas-sketch-util/math')

const settings = {
	dimensions: 'A4',
	orientation: 'portrait',
	pixelsPerInch: 300,
	scaleToView: true,
	units: 'cm'
}

const sketch = () => {
	return ({ context, width, height }) => {
		const margin = 1 / 4

		context.fillStyle = 'hsl(0, 0%, 98%)'
		context.fillRect(0, 0, width, height)

		const fill = context.createLinearGradient(0, 0, width, height)
		fill.addColorStop(0, 'cyan')
		fill.addColorStop(1, 'orange')

		context.fillStyle = fill
		context.fillRect(margin, margin, width - margin * 2, height - margin * 2)
	}
}

canvasSketch(sketch, settings)
