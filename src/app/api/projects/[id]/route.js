import {
  deleteProject,
  getProjectById,
  updateProject,
} from "@/app/models/projectModel";

export async function GET(req, context) {
  try {
    const projectId = context.params.id;
    const project = await getProjectById(projectId);
    return new Response(JSON.stringify(project), {
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
    const projectData = await req.json();
    const projectId = context.params.id;
    const updated = await updateProject(projectId, projectData);
    if (updated) {
      return new Response(JSON.stringify({ message: 'Project updated successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Project not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Project not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE(req, res) {
  try {
    const { projectId } = req.query;
    const deleted = await deleteProject(projectId);
    if (deleted) {
      return new Response(JSON.stringify({ message: 'Project deleted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Project not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Project not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}