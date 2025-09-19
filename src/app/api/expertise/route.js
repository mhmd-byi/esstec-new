import { createExpertise, getAllExpertise } from "@/app/models/expertiseModel";

export async function GET(req, res) {
  try {
    const expertise = await getAllExpertise();
    return new Response(JSON.stringify(expertise), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function POST(req, res) {
  try {
    const expertiseData = await req.json();
    const expertise = await createExpertise(expertiseData);
    return new Response(JSON.stringify({ expertise, message: 'Expertise created successfully' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
