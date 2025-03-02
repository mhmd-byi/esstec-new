// File: app/api/hello/route.js

export async function GET(req, res) {
    return new Response(JSON.stringify({ message: 'Hello from the app directory!' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
