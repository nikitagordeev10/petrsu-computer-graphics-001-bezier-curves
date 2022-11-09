// вершинного шейдера программа
var VSHADER_SOURCE =
    'attribute vec4 a_Position;' +
    'attribute vec4 a_Color;' +
    'uniform mat4 u_MvpMatrix;' +
    'varying vec4 v_Color;' +
    'void main(){' +
    'gl_Position = u_MvpMatrix * a_Position;' +
    'v_Color = a_Color;' +
    '}';

// Программа Кусок Цвет
var FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'varying vec4 v_Color;' +
    'void main() {' +
    'gl_FragColor = v_Color;' +
    '}';

function main() {
    // Получить элемент Canvas
    var canvas = document.getElementById("webgl");
    if (!canvas) {
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    // Получаем контекст рисования WebGL
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log("Failed to get the rendering context for WebGL");
        return;
    }

    // Инициализация шейдер
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("Failed to initialize shaders.");
        return;
    }

    // Установить положение вершин
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
    }

    // Укажите пустой <холст> цвет
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    // Получить место хранения U_ViewMatrix, U_MODELMATRIX и U_Projmatrix переменных
    var u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
    if (u_MvpMatrix < 0) {
        console.log("Failed to get the storage location of u_MvpMatrix");
        return;
    }

    var mvpMatrix = new Matrix4();
    mvpMatrix.setPerspective(30, 1, 1, 100);
    mvpMatrix.lookAt(3, 3, 7, 0, 0, 0, 0, 1, 0);


    gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

    gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);

    // Нарисовать куб
    gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
}

function initVertexBuffers(gl) {
    var verticesColors = new Float32Array([
        // координаты вершин и цветы
        1.0, 1.0, 1.0, 1.0, 1.0, 1.0,  // v0 белый
        -1.0, 1.0, 1.0, 1.0, 0.0, 1.0,  // v1 красный
        -1.0, -1.0, 1.0, 1.0, 0.0, 0.0,  // v2 красный
        1.0, -1.0, 1.0, 1.0, 1.0, 0.0,  // v3 желтый
        1.0, -1.0, -1.0, 0.0, 1.0, 0.0,  // v4 зеленый
        1.0, 1.0, -1.0, 0.0, 1.0, 1.0,  // v5 циан
        -1.0, 1.0, -1.0, 0.0, 0.0, 1.0,  // v6 синий
        -1.0, -1.0, -1.0, 0.0, 0.0, 0.0   // v7 черный
    ]);

    // индекс вершины
    var indices = new Uint8Array([
        0, 1, 2, 0, 2, 3,    // вперед
        0, 3, 4, 0, 4, 5,    // Правильно
        0, 5, 6, 0, 6, 1,    // начальство
        1, 6, 7, 1, 7, 2,    // Левый
        7, 4, 3, 7, 3, 2,    // Вниз
        4, 7, 6, 4, 6, 5     // Задний
    ]);

    // Создание объекта буфера
    var vertexColorBuffer = gl.createBuffer();
    var indexBuffer = gl.createBuffer();
    if (!vertexColorBuffer || !indexBuffer) {
        console.log("Failed to create thie buffer object");
        return -1;
    }

    // Сохранить буфер объекта к цели
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
    // Запись данных в объект кэша
    gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);

    var FSIZE = verticesColors.BYTES_PER_ELEMENT;

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log("Failed to get the storage location of a_Position");
        return -1;
    }

    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0);
    gl.enableVertexAttribArray(a_Position);

    var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
    if (a_Color < 0) {
        console.log("Failed to get the storage location of a_Color");
        return -1;
    }

    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
    gl.enableVertexAttribArray(a_Color);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    return indices.length;
}