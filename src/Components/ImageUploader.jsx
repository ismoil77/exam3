import React, { useState } from 'react';
import axios from 'axios';
import { Input } from 'antd'

const SimpleImageUpload = ({ todoId,getUser }) => {
  const [files, setFiles] = useState([]);


  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
  

    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));

    try {
      await axios.post(`https://to-dos-api.softclub.tj/api/to-dos/${todoId}/images`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
		});
		 getUser()
		 location.reload()
      alert("YES ok LEGENDA ISMOIL")
    } catch (err) {
      console.error(err);
    
    }
  };

  return (
    <div className='flex'>
      <Input type="file" multiple onChange={handleChange} />
      <button className='bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium' onClick={handleUpload} >
      ADD IMG
      </button>
    </div>
  );
};

export default SimpleImageUpload;
