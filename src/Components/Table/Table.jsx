import React, { useEffect, useState } from 'react';
import { Api, ImgApi } from '../../Config/Api'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddModal from '../AddModal'


export default function DataTable() {
	const [data,setData] =useState([])
	
async function getData() {
	try {
		let { data } = await axios.get(Api)
		setData(data.data)
	} catch (error) {
		console.error(error);
		
	}
}
useEffect(() => {
	getData()
},[])
  return (
	  <div className="p-6 bg-gradient-to-br from-[#1E1E2F] to-[#141427] min-h-screen text-white flex justify-center items-start w-[100%]">
		 
      <div className="w-full ">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#7B61FF]">USER TODO</h2>
 {
          <AddModal getData={ getData} />
		  }
        <table className="w-full table-auto border-collapse overflow-hidden shadow-md rounded-lg bg-[#222232]">
          <thead>
            <tr className="bg-[#2E2E3E] text-left text-sm uppercase text-gray-400 cursor-pointer">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Description</th>
              <th className="p-4 max-sm:hidden">Completed</th>
						  <th className="p-4 max-sm:hidden">Image</th>
						  <th>ACTION</th>
            </tr>
          </thead>
				  <tbody>
					  {
						  data?.map((user, index) => {
							  return (
								    <tr key={index} className="border-t border-gray-700 hover:bg-[#29293d] transition-all">
              <td className="p-4 font-medium">{index+1}</td>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.description}</td>
              <td className="p-4 max-sm:hidden">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    user.isCompleted ? 'bg-green-600' : 'bg-red-600'
                  }`}
                >
                  {user.isCompleted ? 'Yes' : 'No'}
                </span>
              </td>
              <td className="p-4 max-sm:hidden">
                {user.images?.[0]?.imageName ? (
    <img
      src={`${ImgApi}/${user.images[0].imageName}`}
      alt="Task Image"
      className="w-12 h-12 object-contain bg-white rounded"
    />
  ) : (
    <span className="text-gray-500">No Image</span>
  )}
									  </td>
									  <td>
										  <Link to={`aboutUserPage/${user.id}`}><button className='bg-[#7772F1] px-[20px] rounded'>ALL ACTION +INFO</button></Link>
									  </td>
            </tr>
							  )
						  })
					  }
          
          </tbody>
        </table>
      </div>
    </div>
  );
}
