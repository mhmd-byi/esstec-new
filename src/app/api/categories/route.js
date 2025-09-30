import { createCategory, getAllCategories } from "@/app/models/categoryModel";

export async function GET(req, res) {
  try {
    const categories = await getAllCategories();
    return new Response(JSON.stringify(categories), {
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
    const categoryData = await req.json();
    const category = await createCategory(categoryData);
    return new Response(JSON.stringify({ category, message: 'Category created successfully' }), {
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
