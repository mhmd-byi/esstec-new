import { createProject, getAllProjects } from "@/app/models/projectModel";

export async function GET(req, res) {
  try {
    const projects = await getAllProjects();
    return new Response(JSON.stringify(projects), {
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
    const projectData = await req.json();
    const project = await createProject(projectData);
    return new Response(JSON.stringify({ project, message: 'Project created successfully' }), {
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
