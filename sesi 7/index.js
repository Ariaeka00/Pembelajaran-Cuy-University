const http = require('http');
const rupiah = require('rupiah-format');
const host = 'localhost'
const port = 3002

// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
    const nama = "ARIA EKA";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    const hasil =`
    <head><title>ARIA EKA</title></head>
    <body> 
    <h1>NODE JS UANG JAJAN SAYA WKWK</h1>
    <p>
    Halo nama ${nama}. Saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} 
    sekarang menjadi ${sisa}. 
    </p>
    </body>`
    

    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`server menyala di ${host}:${port} 😎`)
});