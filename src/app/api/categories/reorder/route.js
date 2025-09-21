import { updateCategoryOrder } from "@/app/models/categoryModel";

export async function PATCH(req) {
  try {
    const { categoryUpdates } = await req.json();
    
    if (!categoryUpdates || !Array.isArray(categoryUpdates)) {
      return new Response(JSON.stringify({ error: 'Invalid category updates data' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const modifiedCount = await updateCategoryOrder(categoryUpdates);
    
    return new Response(JSON.stringify({ 
      message: 'Category order updated successfully',
      modifiedCount 
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
