import React, { useEffect, useState } from 'react';
import { Api, ImgApi } from '../Config/Api'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import MySwiperImg from '../Components/SwiperImg/Swiper'
import EditModal from '../Components/EditModal'
import ImageUploader from '../Components/ImageUploader'

export default function AboutUserPage() {
  const { id } = useParams()

  const [task,setTask] = useState({
    id: 4762,
    isCompleted: false,
    images: [
      {
        id: 7101,
        imageName: '0d18b21d-d641-4a05-baa0-adfb04929aea.svg',
      },
    ],
    name: 'HAYRAT KOR NAKAD',
    description: '%%',
  })
  
  
	async function  getUser() {
		try {
			let { data } = await axios.get(`${Api}/${id}`)
			setTask(data.data)
			
			
		} catch (error) {
			console.error(error);
			
		}
	}

	useEffect(() => {
		getUser()
  }, [])
  
  const [editVisible, setEditVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1E2F] to-[#141427] text-white p-6 flex items-center justify-center">
      <div className="bg-[#222232] rounded-xl shadow-xl w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-[#7B61FF] mb-6 text-center">User Info</h2>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span className="text-gray-400">ID:</span>
            <span>{task.id}</span>
          </div>

          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span className="text-gray-400">Name:</span>
            <span className="font-medium">{task.name}</span>
          </div>

          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span className="text-gray-400">Description:</span>
            <span>{task.description}</span>
          </div>

          <div className="flex justify-between border-b border-gray-600 pb-2">
            <span className="text-gray-400">Completed:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                task.isCompleted ? 'bg-green-600' : 'bg-red-600'
              }`}
            >
              {task.isCompleted ? 'Yes' : 'No'}
            </span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-400">Image:</span>
          
					    {task.images?.[0]?.imageName ? (
							<img
							  src={`${ImgApi}/${task.images[0].imageName}`}
							  alt="Task Image"
							  className="w-12 h-12 object-contain bg-white rounded"
							/>
						 ) : (
							<span className="text-gray-500">No Image</span>
						 )}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 max-sm:flex-col">
         <button
  className="bg-[#7B61FF] hover:bg-[#684fd4] px-6 py-2 rounded-lg font-medium"
  onClick={() => {
    setSelectedItem(task);
    setEditVisible(true);
  }}
>
  Edit
</button>
 {selectedItem && (
       <EditModal
  open={editVisible}
  onClose={() => {setEditVisible(false),getUser()}}
  initialData={selectedItem}
   
/>
      )}

         <Link to={'/'}> <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium" onClick={async () => {
            try {
              await axios.delete(`https://to-dos-api.softclub.tj/api/to-dos?id=${task.id}`)
              
              getUser()
            } catch (error) {
              console.error(error);
              
            }
          }}>
            Delete
				  </button></Link>
				 
				  <Link to={'/'}>
					   <button className="border border-gray-400 hover:bg-gray-700 px-6 py-2 rounded-lg font-medium h-[100%] max-sm:w-[100%]">
            Back
          </button>
				  </Link>
          <input type="checkbox" checked={task.isCompleted} onChange={async () => {
            try {
              await axios.put(`https://to-dos-api.softclub.tj/completed?id=${task.id}`)
              getUser()
            } catch (error) {
              console.error(error);
              
            }
          }} className='w-[50px] h-[50px] max-sm:mx-auto' />
          <ImageUploader todoId={task.id} getUser={getUser} />
			  </div>
			  <div className="h-[400px] mt-[30px]">
				  <MySwiperImg user={task} idUser={id} />
				  
			  </div>
		  </div>
		  
    </div>
  );
}
