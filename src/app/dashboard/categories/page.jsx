"use client";
import { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Category Item Component
const SortableCategoryItem = ({ category, onEdit, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: category._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex justify-between items-center bg-white shadow px-4 py-3 rounded-lg hover:shadow-md transition-shadow"
    >
      <div className="flex items-center">
        <div 
          className="mr-3 text-gray-400 cursor-move"
          {...listeners}
        >
          <i className="fas fa-grip-vertical"></i>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{category.name}</h3>
          <p className="text-sm text-gray-500">Order: {category.order}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={(e) => {
            console.log('Edit button clicked');
            e.stopPropagation();
            e.preventDefault();
            onEdit(category);
          }}
          className="text-blue-500 hover:text-blue-700 px-2 py-1"
        >
          <i className="fas fa-pencil-alt"></i> Edit
        </button>
        <button
          onClick={(e) => {
            console.log('Delete button clicked');
            e.stopPropagation();
            e.preventDefault();
            onDelete(category._id);
          }}
          className="text-red-500 hover:text-red-700 px-2 py-1"
        >
          <i className="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '' });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/categories");
      const data = await response.json();
      if (response.ok) {
        setCategories(data);
      } else {
        alert("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      alert("Error fetching categories");
    } finally {
      setLoading(false);
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = categories.findIndex((category) => category._id === active.id);
      const newIndex = categories.findIndex((category) => category._id === over.id);

      const newCategories = arrayMove(categories, oldIndex, newIndex);
      setCategories(newCategories);

      // Update order in the database
      try {
        const categoryUpdates = newCategories.map((category, index) => ({
          id: category._id,
          order: index + 1
        }));

        const response = await fetch("/api/categories/reorder", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categoryUpdates }),
        });

        if (!response.ok) {
          console.error("Failed to update category order");
          setCategories(categories);
        }
      } catch (error) {
        console.error("Error updating category order:", error);
        setCategories(categories);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingCategory ? `/api/categories/${editingCategory._id}` : "/api/categories";
      const method = editingCategory ? "PATCH" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(editingCategory ? "Category updated successfully!" : "Category created successfully!");
        setFormData({ name: '' });
        setShowForm(false);
        setEditingCategory(null);
        fetchCategories();
      } else {
        alert(data.error || "Failed to save category");
      }
    } catch (error) {
      console.error("Error saving category:", error);
      alert("Error saving category: " + error.message);
    }
  };

  const handleEdit = (category) => {
    console.log('Edit clicked for category:', category);
    setEditingCategory(category);
    setFormData({ name: category.name });
    setShowForm(true);
  };

  const handleDelete = async (categoryId) => {
    console.log('Delete clicked for category ID:', categoryId);
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await fetch(`/api/categories/${categoryId}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (response.ok) {
          alert("Category deleted successfully!");
          fetchCategories();
        } else {
          alert(data.error || "Failed to delete category");
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Error deleting category: " + error.message);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: '' });
    setShowForm(false);
    setEditingCategory(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl font-semibold">Categories</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            {editingCategory ? "Edit Category" : "Add New Category"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                {editingCategory ? "Update" : "Create"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <p className="text-sm text-gray-600 mb-4">
        Drag and drop categories to reorder them. The order will be saved automatically.
      </p>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={categories.map(category => category._id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3">
            {categories.map((category) => (
              <SortableCategoryItem
                key={category._id}
                category={category}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {categories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No categories found. Create your first category!</p>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
