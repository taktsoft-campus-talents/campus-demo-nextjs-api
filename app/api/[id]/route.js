const notes = { 4: { id: "4", content: "fourth" } };

export function GET(req, { params }) {
  /* const  id  = params.id; */
  const { id } = params;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return new Response(
    JSON.stringify(Object.values(notes).find((note) => note.id === id)),
    {
      status: 200,
      headers: headers,
    }
  );
}

export function DELETE(req, { params }) {
  /* const  id  = params.id; */
  const { id } = params;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if (!notes[id]) {
    return new Response(JSON.stringify({ error: "note not found" }), {
      status: 404,
      headers: headers,
    });
  }

  delete notes[id];

  return new Response(JSON.stringify({ message: "successfully deleted" }), {
    status: 200,
    headers: headers,
  });
}

export async function PUT(req, { params }) {
  /* const  id  = params.id; */
  const { id } = params;
  const { content } = await req.json();

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  if (!notes[id]) {
    return new Response(JSON.stringify({ error: "note not found" }), {
      status: 404,
      headers: headers,
    });
  }

  notes[id].content = content;

  return new Response(JSON.stringify({ message: "successfully edited" }), {
    status: 200,
    headers: headers,
  });
}
