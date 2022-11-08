var InitDemo = function () {
    var canvas = document.getElementById('polygon-surface');
    var gl = canvas.getContext('webgl');

    //геометрия
    var vertices = [];
    var indices = [];
    vertices.push(0, 0);
    indices.push(0);

    //начнинаем с создания вершин шестиугольника
    for (var i = 0; i <= 6; i++) {
        var degree_offset = i * 60.0;
        var radian_offset = degree_offset * (Math.PI / 180.0);
        var x_pos = 0.5 * Math.cos(radian_offset);
        var y_pos = 0.5 * Math.sin(radian_offset);

        vertices.push(x_pos);
        vertices.push(y_pos);
        indices.push(i + 1);
    }


    var index = 1;
    var inner_poly_vert = indices.length - 1;
    
    // найти внешние вершины, необходимые для звезды
    for (var i = 1; i < inner_poly_vert; i++) {
        var c_x = vertices[2 * i + 0];
        var c_y = vertices[2 * i + 1];
        var n_x = vertices[2 * i + 2];
        var n_y = vertices[2 * i + 3];
        var x_mp = (c_x + n_x);
        var y_mp = (c_y + n_y);
        vertices.push(x_mp, y_mp);
        indices.push(indices.length);
    }
    
    var temp = [];
    
    // создаём звезду из шестиугольника и внешних вершин
    for (var i = 0; i < 6; i++) {
        temp.push(0, i + 1, i + 2);
        temp.push(i + 1, i + 8, i + 2);
    }

    indices = temp;
    console.log(indices);
    console.log(vertices);

    //создать VBO
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    //создать шейдер
    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    var vertSrc = 'attribute vec2 coordinates;' +
        'void main(){' +
        'gl_Position = vec4(coordinates,0.0,1.0);' +
        '}';
    gl.shaderSource(vertShader, vertSrc);
    gl.compileShader(vertShader);
    gl.compileShader(vertShader);
    if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertShader));
        return;
    }

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    var fragSrc = 'void main(){' +
        'gl_FragColor = vec4(0.0,0.7,0.9,1.0);' +
        '}';
    gl.shaderSource(fragShader, fragSrc);
    gl.compileShader(fragShader);
    if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragShader));
        return;
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);

    gl.linkProgram(program);
    gl.useProgram(program);

    // объединение
    var coord = gl.getAttribLocation(program, 'coordinates');
    gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(coord);

    // рисовать
    gl.clearColor(0.9, 0.2, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, temp.length, gl.UNSIGNED_SHORT, 0); // change back to /2 find out what draw arrays does


}

InitDemo();