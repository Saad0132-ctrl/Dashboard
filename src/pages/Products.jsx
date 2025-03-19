import React, { useState } from 'react';
import Table from './Table';
function Products() {

  const [data, setData] = useState({
    name: '',
    price: '',
    category: '',
    condition: '',
    index: null
  })
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')) || [])
  const [show, setShow] = useState(false)
  function handleDisplay() {
    setShow(!show)
    // let cate = JSON.parse(localStorage.getItem('category'))
    setData({
      name: '',
      price: '',
      category: '',
      condition: '',
      index: null
    }
    )
  }
  function handleSubmit() {
    if (data.name !== '' && data.price !== '' && data.condition !== '') {
      let values = [...products]

      if (data.index === null) {
        values.unshift(data)
      }
      else {
        values[data.index] = data
      }
      setProducts(values)
      localStorage.setItem('products', JSON.stringify(values))
      setData({
        name: '',
        price: '',
        category: '',
        condition: '',
        index: null
      }
      )
      setShow(!show)
    }
  }
  function handleChange(e) {
    // let cate=JSON.parse(localStorage.getItem('category'))
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      // category:cate
    })
    )
  }



  // const [products, setProducts] = useState([]);

  return (
    <div>
      <div className={` text-left fixed inset-0 flex items-center justify-center bg-gray-800 opacity-  ${show ? "block" : "hidden"}`}>
        <div className="bg-white  p-6 rounded-lg shadow-lg w-96 relative">
          <button id="closeButton" onClick={handleDisplay} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">
            &times;
          </button>

          <p id="paragraphId" className="text-xl font-semibold mb-4 text-center">
            {data.index === null ? 'Add Product' : ' Update Product'}          </p>
          <div className='space-y-4'>
            <div className="flex flex-col">
              <label htmlFor="productName" className="font-medium">Name</label>
              <input
                value={data.name}
                type="text"
                id="productName"
                onChange={handleChange}
                className="border p-2 rounded-md"
                name='name'
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productPrice" className="font-medium">Price</label>
              <input
                value={data.price}
                type="number"
                onChange={handleChange}
                id="productPrice"
                className="border p-2 rounded-md"
                name='price'
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productType" className="font-medium">Category</label>
              <select
                // onChange={handleChange}
                id="type"
                className="border p-[11px] rounded-md"
                name='category'
                onChange={handleChange}
                value={data.category}
              >
                <option value="" disabled hidden>Select Category</option>
                {JSON.parse(localStorage.getItem('category'))?.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>

            </div>
            <div className="flex flex-col">
              <label htmlFor="productCondition" className="font-medium">Product Condition</label>
              <select
                name='condition'
                id="productCondition"
                value={data.condition}
                className="border p-[11px] rounded-md"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>Select Condition</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="bad">Bad</option>
              </select>
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 px-4 rounded-md mt-2">Save</button>
          </div>


        </div>
      </div>
      <Table products={products} setData={setData} setProducts={setProducts} setShow={setShow} handleDisplay={handleDisplay} display={show} handleChange={handleChange} />
    </div>
  );
}

export default Products;
