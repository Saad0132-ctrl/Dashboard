import React from 'react'
import Button from '../components/Button';

function Table({ products,handleDisplay, setData,setShow, setProducts,show }) {
    function handleEdit(index) {
        setData({
          name: products[index].name,
          price: products[index].price,
          category: products[index].category,
          condition: products[index].condition,
          index: index
        })
        localStorage.setItem('products', JSON.stringify(products))
        setShow(!show)
      }

      function handleDelete(index) {
        let values = [...products]
        values.splice(index, 1)
        setProducts(values)
        localStorage.setItem('products', JSON.stringify(values))
      }
     
    return (
        <div className='w-[70%] mx-auto mt-[6rem]'>
            <div className='max-w-4xl mx-auto text-center'>

                <button onClick={() => 
                    handleDisplay()
                
                } className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Add Products</button>
            </div>
            <table className="w-full text-center mt-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Product Name</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Condition</th>
                        <th className='border p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((pro, index) => (
                            <tr key={index} className="border">
                                <td className="border p-2 max-md">{pro.name}</td>
                                <td className="border p-2">${pro.price}</td>
                                <td className="border p-2">{pro.category}</td>
                                <td className="border p-2">{pro.condition}</td>
                                <div className='flex justify-center items-center'>
                                    <td className=' p-2'><Button className="bg-yellow-500 hover:bg-yellow-700" text="Edit"  handleClick={() => handleEdit(index)} /></td>
                                    <td className='p-2' ><Button className="bg-red-500 hover:bg-red-700  " text="Delete" handleClick={() => handleDelete(index)} /></td>
                                </div>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
