// Программа Herex Shader
var VSHADER_SOURCE =
    'attribute vec4 a_Position;'+
    'attribute vec4 a_Normal;'+    // Способ вектора
    'uniform mat4 u_MvpMatrix;'+
    'uniform mat4 u_NormalMatrix;\n' +
    'varying vec4 v_Color;'+
    'void main(){'+
    'gl_Position = u_MvpMatrix * a_Position;'+

    'vec3 lightDirection = normalize(vec3(0.0, 0.5, 0.7));' + // Light direction
    'vec4 color = vec4(1.0, 0.4, 0.0, 1.0);' +
    'vec3 ambientLight = vec3(0.2, 0.2, 0.2);'+
    // Нормилизуют метод
    'vec3 normal = normalize((u_NormalMatrix * a_Normal).xyz);'+
    // // Расчет метода вектор и точка в направлении света
    'float nDotL = max(dot(normal, lightDirection), 0.0);'+
    // Рассчитать цвет отраженного света
    'vec3 diffuse = vec3(color) * nDotL;'+
    // Рассчитать цвет отражения, порожденного окружающей средой
    'vec3 ambient = ambientLight * color.rgb;'+

    'v_Color = vec4(diffuse + ambient, color.a);'+
    '}';

// Шт. Цветная программа
var FSHADER_SOURCE=
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'varying vec4 v_Color;' +
    'void main() {'+
    'gl_FragColor = v_Color;'+
    '}';

function main() {
    // получить элемент холста
    var canvas = document.getElementById("JointModel");
    if(!canvas){
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    // Получить контекст рисования WebGL
    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("Failed to get the rendering context for WebGL");
        return;
    }

    // инициализация шейдера
    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.log("Failed to initialize shaders.");
        return;
    }

    // установить положение вершины
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
    }

    // Укажите пустые <canvas> цвет
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    // Получить место хранения u_mvpmatrix, u_lightcolor u_lightdirection u_ambientlight переменная

    var u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
    var u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
    if(!u_MvpMatrix || !u_NormalMatrix){
        console.log("Failed to get the storage location");
        return;
    }

    // просматривать матрицу проекции
    var viewProjMatrix = new Matrix4();
    viewProjMatrix.setPerspective(50.0, canvas.width / canvas.height, 1.0, 100.0);
    viewProjMatrix.lookAt(20.0, 10.0,  30.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);

    // Зарегистрируйте событие клавиатуры
    document.onkeydown = function(ev){ keydown(ev, gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix); };

    draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
}

var ANGLE_STEP = 3.0;  // Нажмите угол поворота каждый раз
var g_arm1Angle = 90.0;  // ARM1 Угол тока
var g_jointAngle = 0.0;  // Соединительный угол тока

function keydown(ev, gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix){
    switch (ev.keyCode){
        case 38:
            if(g_jointAngle < 135.0) g_jointAngle += ANGLE_STEP;
            break;
        case 40:
            if(g_jointAngle > -135.0) g_jointAngle -= ANGLE_STEP;
            break;
        case 39:
            g_arm1Angle = (g_arm1Angle + ANGLE_STEP) % 360;
            break;
        case 37:
            g_arm1Angle = (g_arm1Angle - ANGLE_STEP) % 360;
            break;
        default:
            return;
    }

    draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
}

function initVertexBuffers(gl) {
    //    v6----- v5
    //   /|      /|
    //  v1------v0|
    //  | |     | |
    //  | |     | |
    //  | |     | |
    //  | |v7---|-|v4
    //  |/      |/
    //  v2------v3

    var vertices = new Float32Array([   // координаты вершины
        1.5, 10.0, 1.5, -1.5, 10.0, 1.5, -1.5,  0.0, 1.5,  1.5,  0.0, 1.5, // v0-v1-v2-v3
        1.5, 10.0, 1.5,  1.5,  0.0, 1.5,  1.5,  0.0,-1.5,  1.5, 10.0,-1.5, // v0-v3-v4-v5
        1.5, 10.0, 1.5,  1.5, 10.0,-1.5, -1.5, 10.0,-1.5, -1.5, 10.0, 1.5, // v0-v5-v6-v1
        -1.5, 10.0, 1.5, -1.5, 10.0,-1.5, -1.5,  0.0,-1.5, -1.5,  0.0, 1.5, // v1-v6-v7-v2
        -1.5,  0.0,-1.5,  1.5,  0.0,-1.5,  1.5,  0.0, 1.5, -1.5,  0.0, 1.5, // v7-v4-v3-v2
        1.5,  0.0,-1.5, -1.5,  0.0,-1.5, -1.5, 10.0,-1.5,  1.5, 10.0,-1.5  // v4-v7-v6-v5
    ]);

    var normals = new Float32Array([    // Способ вектора
        0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,
        1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,
        0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,
        -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,
        0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,
        0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0
    ]);

    var indices = new Uint8Array([       // index index.
        0, 1, 2,   0, 2, 3,
        4, 5, 6,   4, 6, 7,
        8, 9,10,   8,10,11,
        12,13,14,  12,14,15,
        16,17,18,  16,18,19,
        20,21,22,  20,22,23
    ]);

    if (!initArrayBuffer(gl, 'a_Position', vertices, 3, gl.FLOAT)) return -1;
    if (!initArrayBuffer(gl, 'a_Normal', normals, 3, gl.FLOAT)) return -1;

    // Создать объект буфера
    var indexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    return indices.length;
}

function initArrayBuffer(gl, attribute, data, num, type) {
    var buffer = gl.createBuffer();
    if(!buffer){
        console.log("Failed to create thie buffer object");
        return -1;
    }

    // Сохранить объект буфера к цели
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    // Написать данные в объект кэша
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    var a_attribute = gl.getAttribLocation(gl.program,attribute);
    if(a_attribute < 0){
        console.log("Failed to get the storage location of " + attribute);
        return -1;
    }

    gl.vertexAttribPointer(a_attribute, num, type, false, 0, 0);
    gl.enableVertexAttribArray(a_attribute);

    return true;
}

// Координатная трансформация матрицы
var g_modelMatrix = new Matrix4(), g_mvpMatrix = new Matrix4();
function draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix) {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //arm1
    var arm1Length = 10.0;
    g_modelMatrix.setTranslate(0.0, -12.0, 0.0);
    g_modelMatrix.rotate(g_arm1Angle, 0.0, 1.0, 0.0);
    drawBox(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);

    //arm2
    g_modelMatrix.translate(0.0, arm1Length, 0.0);
    g_modelMatrix.rotate(g_jointAngle, 0.0, 0.0, 1.0);
    g_modelMatrix.scale(1.3, 1.0, 1.3);
    drawBox(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
}

var g_normalMatrix = new Matrix4();

function drawBox(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix) {
    g_mvpMatrix.set(viewProjMatrix);
    g_mvpMatrix.multiply(g_modelMatrix);
    gl.uniformMatrix4fv(u_MvpMatrix, false, g_mvpMatrix.elements);

    // Рассчитать нормальную матрицу изменения
    g_normalMatrix.setInverseOf(g_modelMatrix);
    g_normalMatrix.transpose();
    gl.uniformMatrix4fv(u_NormalMatrix, false, g_normalMatrix.elements);

    //рисовать
    gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
}