import {
  deleteCategory,
  getCategoryById,
  updateCategory,
} from "@/app/models/categoryModel";

export async function GET(req, context) {
  try {
    const categoryId = context.params.id;
    const category = await getCategoryById(categoryId);
    return new Response(JSON.stringify(category), {
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
    const categoryData = await req.json();
    const categoryId = context.params.id;
    const updated = await updateCategory(categoryId, categoryData);
    if (updated) {
      return new Response(JSON.stringify({ message: 'Category updated successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Category not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Category not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE(req, res) {
  try {
    const { categoryId } = req.query;
    const deleted = await deleteCategory(categoryId);
    if (deleted) {
      return new Response(JSON.stringify({ message: 'Category deleted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Category not found');
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Category not found' ? 404 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
