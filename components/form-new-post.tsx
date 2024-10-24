'use client';

import { FormData } from '@/types/blog';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

const inputClass =
  'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300';

const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
  });
  const { data } = useSession();
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");

    // Log the current state of formData
    console.log("Form data:", formData);

    try {
      const response = await axios.post('http://localhost:3000/api/posts', formData);
      console.log("Post created:", response.data);
      router.push('/'); // Redirect after successful post (optional)
  } catch (error) {
      console.error("Error creating post:", error.response ? error.response.data : error.message);
      alert("An error occurred while creating the post. Please try again.");
  }
  
  };

  return (
    <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <input
          type='text'
          className={inputClass}
          placeholder='Enter the title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required // Make title required
        />
      </div>
      <div className='mb-4'>
        <ReactTextareaAutosize
          minRows={5}
          name='content'
          className={inputClass}
          placeholder='Enter the content'
          value={formData.content}
          onChange={handleChange}
          required // Make content required
        />
      </div>
      <button
        disabled={!data?.user?.email} // Disable button if not authenticated
        type='submit' // Specifies that this button submits the form
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'
      >
        Submit
      </button>
    </form>
  );
};

export default FormNewPost;
