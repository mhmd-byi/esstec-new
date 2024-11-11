'use client';
import { useEffect, useState } from 'react';
import EditorConvertToHTML from '../adminComponents/wysiwygEditor';
import menuData from '@/app/common/components/menuData';
import toast, { Toaster } from 'react-hot-toast';

export default function EditMenu() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    setMenu(menuData);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    // const { name, value } = e.target;
    // setMenu((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(menu);
    toast.success('Menu data saved successfully');
  };

  return (
    <div className="mt-6 mx-6">
      <h2 className="text-2xl font-medium text-black">
        Edit Menu Names and Details
      </h2>
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          {menu?.map((menuItem, index) => (
            <div key={index} className="flex flex-row space-x-6">
              <div className="flex flex-col w-1/2">
                <label>Menu title</label>
                <input
                  type="text"
                  name="title"
                  value={menuItem.title}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label>Menu description / text</label>
                <EditorConvertToHTML />
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
