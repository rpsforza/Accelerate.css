# Accelerate.css
Force Enable Hardware Acceleration using CSS to speed up web preformance.

Simply download the css file and include it in your project.

<link rel="stylesheet" type="text/css" href="accelerate.css" />

Or... Include it yourself. Just add this to your css.

.accelerate {
	transform: translate3d(0,0,0);
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	will-change: transform;
}


