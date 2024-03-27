"use client";
import { FiImage } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import Container from "./Container";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const WritePost = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState(false);
  const [caption, setCaption] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if(file.size > 5 * 1024 * 1024){
      setError(true)    
    }
    setSelectedImg(file)
  }
  const handleCaptionChange = (e) => {
    setCaption(e.target.value)
  }

  const handleUpload = async () => {
    if(!selectedImg){
      setError(true)
      return;
    }
    const formData = new FormData();
    formData.append('image', selectedImg)
    try {
      const response = await axios.post('/upload', formData, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      const imageUrl = response.data.imageUrl
      console.log(imageUrl);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container>
      <div className="flex flex-col gap-3 relative mt-20 p-2">
        <div className="flex gap-4 items-center ml-2">
          <span>
            <RxAvatar className="text-3xl" />
          </span>
          <input
            type="text"
            placeholder="What is happening"
            className="py-3 bg-gray-100 cursor-auto w-full"
          />
        </div>
        <div>
          {selectedImg && (
            <>
            <Image src={URL.createObjectURL(selectedImg)} alt="post-image" width={400} height={600}/>
            <input type="text" placeholder="caption" onChange={handleCaptionChange} value={caption} name="caption" className="text-black"/>
            </>
          )}
        </div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="file-upload"
            className="flex items-center cursor-pointer"
          >
            <input id="file-upload" type="file" accept="image" className="hidden" onChange={handleImageChange}/>
            <FiImage className="text-xl ml-3 mt-2" />
          </label>

          <button className="bg-red px-5 py-1 rounded-2xl border-red mr-3 border-2" onClick={handleUpload}>
            post
          </button>
        </div>

        <div className="h-[1px] w-full bg-white"></div>
      </div>
    </Container>
  );
};

export default WritePost;
