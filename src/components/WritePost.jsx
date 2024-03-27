"use client";
import { FiImage } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import Container from "./Container";
import { useState } from "react";

const WritePost = () => {
  const [selcetedImg, setSelectedImg] = useState(null);

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
            className="py-3 bg-black cursor-auto w-full"
          />
        </div>
        <div className="flex justify-between items-center">
          <label
            htmlFor="file-upload"
            className="flex items-center cursor-pointer"
          >
            <input id="file-upload" type="file" className="hidden" />
            <FiImage className="text-xl ml-3 mt-2" />
          </label>

          <button className="bg-red px-5 py-1 rounded-2xl border-red mr-3 border-2">
            post
          </button>
        </div>
        <div className="h-[1px] w-full bg-white"></div>
      </div>
    </Container>
  );
};

export default WritePost;
