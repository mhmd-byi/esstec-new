import { createCategory } from "@/app/models/categoryModel";

export async function GET() {
  try {
    // Default categories to migrate
    const defaultCategories = [
      { name: "branding & communication" },
      { name: "virtual computing" },
      { name: "spatial experience" }
    ];

    let createdCount = 0;
    const results = [];

    for (const categoryData of defaultCategories) {
      try {
        const categoryId = await createCategory(categoryData);
        results.push({ name: categoryData.name, id: categoryId, status: 'created' });
        createdCount++;
      } catch (error) {
        // If category already exists, skip it
        if (error.message.includes('duplicate') || error.message.includes('already exists')) {
          results.push({ name: categoryData.name, status: 'already exists' });
        } else {
          results.push({ name: categoryData.name, status: 'error', error: error.message });
        }
      }
    }

    return new Response(JSON.stringify({ 
      message: `Migration complete. ${createdCount} categories created.`,
      results 
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
