//serverless functions in Node.js

const notes = {};
let nextId = 1;

export function GET() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return new Response(JSON.stringify(Object.values(notes)), {
    status: 200,
    headers: headers,
  });
}

export async function POST(req) {
  const id = nextId++;
  const { content } = await req.json();
  notes[id] = { id, content };

  console.log(content);

  return new Response(JSON.stringify(notes[id]), { status: 201 });
}
