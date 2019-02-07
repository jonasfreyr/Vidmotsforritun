let vertexShaderSource = `#version 300 es
 

in vec4 a_position;
 

void main() {
 

  gl_Position = a_position;
}
`;
 
let fragmentShaderSource = `#version 300 es
 
precision mediump float;
 
out vec4 outColor;
 
void main() {
  outColor = vec4(1, 0, 0.5, 1);
}
`;

function createShader(gl, type, source) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
 
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  let success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
 
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function main() {
  let canvas = document.getElementById("c"); 

 let gl = canvas.getContext("webgl2");
 if (!gl) {
    // no webgl2 for you!
    }

let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

let program = createProgram(gl, vertexShader, fragmentShader);

let positionAttributeLocation = gl.getAttribLocation(program, "a_position");

let positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

let positions = [
  0, 0,
  0, 0.5,
  0.7, 0,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);


let vao = gl.createVertexArray();
gl.bindVertexArray(vao);

gl.enableVertexAttribArray(positionAttributeLocation);

let size = 2;          // 2 components per iteration
let type = gl.FLOAT;   // the data is 32bit floats
let normalize = false; // don't normalize the data
let stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
let offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(
    positionAttributeLocation, size, type, normalize, stride, offset)

//weblUtils.resizeCanvasToDisplaySize(gl.canvas);

gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.useProgram(program);

gl.bindVertexArray(vao);

let primitiveType = gl.TRIANGLES;
offset = 0;
count = 3;
gl.drawArrays(primitiveType, offset, count);

}

main()