import { deleteExpertise, getExpertiseById, updateExpertise } from "@/app/models/expertiseModel";


export async function GET(req, context) {
  try {
    const expertiseId = context.params.id;
    const expertise = await getExpertiseById(expertiseId);
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

export async function PATCH(req, context) {
  try {
    const expertiseData = await req.json();
    const expertiseId = context.params.id;
    const updated = await updateExpertise(expertiseId, expertiseData);
    if (updated) {
      return new Response(JSON.stringify({ message: 'Expertise updated successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Expertise not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Expertise not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE(req, res) {
  try {
    const { expertiseId } = req.query;
    const deleted = await deleteExpertise(expertiseId);
    if (deleted) {
      return new Response(JSON.stringify({ message: 'Expertise deleted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Expertise not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Expertise not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}