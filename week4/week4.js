import http from 'http';

let message = null;

const server = http.createServer((req, res) => {
    if (req.url === '/message' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(message);
    }else if (req.url === '/message' && req.method === 'POST') {
        let title = '';

        req.on('data', chunk => {
            title += chunk;
        });

        req.on('end', () => {
            message = title;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Pesan berhasil disimpan');
        });
    }else if (req.url === '/message' && req.method === 'PUT') {
        let title = '';

        req.on('data', chunk => {
            title += chunk;
        });

        req.on('end', () => {
            message = title;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Pesan berhasil diperbarui');
        });
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint tidak ditemukan');
    }
});

server.listen(3000, () => { 
    console.log('Server berjalan di http://localhost:3000'); 
});