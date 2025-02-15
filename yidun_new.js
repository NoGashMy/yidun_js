const { caller } = require("./webProgram");

function get_cb() {
    caller(71);
    return caller["c"][71]["exports"]();
}

function get_fp() {
    caller(59)

    return caller["c"][59]["exports"]();
}


// var G = caller(3);
// var O = caller(10),
//     N = O["aes"],
//     J = O["xorEncode"];
// var j = caller(56);

// function generate_track(token, x) {
//     // var G = caller(3);
//     // var O = caller(10),
//     //     J = O["xorEncode"];

//     // var startX = 327, 
//     //     startY = 442,
//     //     cX = 327 + 4, 
//     //     cY = 442 + 1;
//     // var beginTime = G["now"]() - 2000;
//     // var dragX = cX - startX;

//     var atomTraceData = [];
//     var traceData = [];

//     // d1 = [Math["round"](dragX < 0 ? 0 : dragX), Math["round"](cY - startY), G["now"]() - 1500 - beginTime];
//     d1 = [4, -1, 289]
//     t1 = J(token, d1 + '');
    

//     // cX = startX + x;
//     // dragX = cX - startX;
//     // d2 = [Math["round"](dragX < 0 ? 0 : dragX), Math["round"](cY - startY + 1), G["now"]() - beginTime];
//     console.log(x);
    
//     d2 = [x + 4, -2, 4217];
//     t2 = J(token, d2 + '');

//     atomTraceData.push(d1, d2);
//     traceData.push(t1, t2);
    
//     return {atomTraceData, traceData}
// }

// function get_data(token, x, x_number) {
//     // var G = caller(3);
//     // var O = caller(10),
//     //     N = O["aes"],
//     //     J = O["xorEncode"];
//     // var j = caller(56);

//     var data = generate_track(token, x_number), 
//     atomTraceData = data.atomTraceData, 
//     traceData = data.traceData;
//     console.log(traceData);
    
    
//     var left = x, 
//     width = 320, 
//     down_counts = 1;
//     var C2 = j(G["unique2DArray"](atomTraceData, 2));
    

//     var d = N(G['sample'](traceData, 50)['join'](':')), 
//     p = N(J(token, parseInt(left, 10) / width * 100 + '')), 
//     f = N(J(token, C2["join"](','))), 
//     ext = N(J(token, down_counts + ',' + traceData["length"]));
    

//     return JSON['stringify']({
//         'd': d,
//         'm': '',
//         'p': p,
//         'f': f,
//         'ext': ext
//     })

// }

function get_left(dragX) {
    var Z = -21;
    var H,
        C0,
        C2 = 0,
        C3 = dragX,
        C4 = 320,
        C5 = 61,
        C6 = 40,
        C7 = C4 - C5,
        C8 = C2 + C3,
        C9 = 21;
    return (C3 <= C9 ? (H = C3, C0 = Z < 0 ? -H / 2 : H, C8 += C0) : C4 - C3 - C6 <= C9 ? (H = C3 - (C4 - C6 - C9), C0 = Z < 0 ? -H / 2 : H, C8 += Z / 2 + C0) : C8 += Z / 2), C8 <= 0 && (C8 = 0), C8 >= C7 && (C8 = C7), C8;
}

function get_data(token, x_number, track) {
    var G = caller(3);
    var O = caller(10),
        N = O["aes"],
        J = O["xorEncode"];
    var j = caller(56);

    // var token = "e1e02cbf379f42e7a91aa0f59043a437";
    x_number = parseInt(x_number);
    var left = get_left(x_number) + "px";
    
    // var atomTraceData = [
    //     [
    //         5,
    //         0,
    //         97
    //     ],
    //     [
    //         x_number + 5,
    //         -5,
    //         4110
    //     ]
    // ];
    var atomTraceData = track;

    var traceData = [
        J(token, atomTraceData[0] + ''), 
        J(token, atomTraceData[1] + '')
    ];
    var width = 320, 
    down_counts = 1;
    var C2 = j(G["unique2DArray"](atomTraceData, 2));
    console.log(j(G["unique2DArray"](atomTraceData, 2)));
    

    var d = N(G['sample'](traceData, 50)['join'](':')), 
    p = N(J(token, parseInt(left, 10) / width * 100 + '')), 
    f = N(J(token, C2["join"](','))), 
    ext = N(J(token, down_counts + ',' + traceData["length"]));

    return JSON['stringify']({
        'd': d,
        'm': '',
        'p': p,
        'f': f,
        'ext': ext
    })

}

// console.log(get_data("e1e02cbf379f42e7a91aa0f59043a437", 146));
