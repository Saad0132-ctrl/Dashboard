import React from 'react'
import { useState } from 'react'
function Category() {
  const [category, setCategory] = useState(()=>JSON.parse(localStorage.getItem("category")) || [] )
  const [input, setInput] = useState('')
  function handleChange(e) {
    let type = e.target.value
    setInput(type)
  }
  function handleSubmit() {
    setCategory([...category, input])
    localStorage.setItem("category", JSON.stringify([...category, input]))
    setInput('')
  }
  function handleDelete(index) {
    let selected = category[index]
    let newCategory = category.filter((item) => item !== selected)
    setCategory(newCategory)
    localStorage.setItem("category", JSON.stringify(newCategory))
  }
  return (
    <div className=" min-h-screen  flex flex-col items-center pt-16">
      <div className="p-6 rounded-lg w-[70%] shadow-lg ">
        <label htmlFor="Select Category" className="text-lg font-semibold text-gray-700 block mb-2">
          Add Category
        </label>
        <input
          type="text"
          value={input}
          className="mt-2 border border-gray-300 rounded-lg p-3 w-full"
          onChange={handleChange}
          placeholder="Enter category..."
        />
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-black text-white rounded-md p-2 hover:bg-gray-800"
        >
          Submit
        </button>
      </div>

      <div className="mt-6 w-[70%]">
        {category.length > 0 ? (
          <div className="p-4 rounded-lg shadow-lg">
            {category.map((cat, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 rounded-md mb-2"
              >
                <p className="text-gray-800 font-medium">{cat}</p>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 "
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">No categories added yet.</p>
        )}
      </div>
    </div>
  )
}

export default Category
