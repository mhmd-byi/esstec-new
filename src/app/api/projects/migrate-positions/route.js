import { getAllProjects, updateProject } from "@/app/models/projectModel";

export async function POST(req) {
  try {
    const projects = await getAllProjects();
    
    // Find projects without position field
    const projectsWithoutPosition = projects.filter(project => project.position === undefined);
    
    if (projectsWithoutPosition.length === 0) {
      return new Response(JSON.stringify({ 
        message: 'All projects already have position fields',
        migrated: 0 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Update projects without position field
    const updatePromises = projectsWithoutPosition.map((project, index) => {
      const newPosition = projects.length - projectsWithoutPosition.length + index;
      return updateProject(project._id, { position: newPosition });
    });

    await Promise.all(updatePromises);

    return new Response(JSON.stringify({ 
      message: `Successfully migrated ${projectsWithoutPosition.length} projects with position fields`,
      migrated: projectsWithoutPosition.length 
    }), {
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
