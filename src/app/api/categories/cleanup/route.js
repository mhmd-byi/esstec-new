import { getAllCategories, deleteCategory } from "@/app/models/categoryModel";

export async function GET() {
  try {
    const categories = await getAllCategories();
    
    // Group categories by name (case insensitive)
    const groupedCategories = {};
    categories.forEach(category => {
      const key = category.name.toLowerCase();
      if (!groupedCategories[key]) {
        groupedCategories[key] = [];
      }
      groupedCategories[key].push(category);
    });
    
    // Find duplicates
    const duplicates = Object.values(groupedCategories).filter(group => group.length > 1);
    let deletedCount = 0;
    const deletedCategories = [];
    
    // Keep the first occurrence of each duplicate group, delete the rest
    for (const duplicateGroup of duplicates) {
      // Sort by creation date or order to keep the oldest/first one
      duplicateGroup.sort((a, b) => (a.order || 0) - (b.order || 0));
      
      // Keep the first one, delete the rest
      for (let i = 1; i < duplicateGroup.length; i++) {
        await deleteCategory(duplicateGroup[i]._id);
        deletedCategories.push(duplicateGroup[i].name);
        deletedCount++;
      }
    }
    
    return new Response(JSON.stringify({ 
      message: `Cleanup complete. ${deletedCount} duplicate categories removed.`,
      deletedCategories,
      totalCategories: categories.length,
      remainingCategories: categories.length - deletedCount
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
