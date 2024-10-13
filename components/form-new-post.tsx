'use client';
import React, { ChangeEvent, FormEvent, useState } from "react"; // Import both ChangeEvent and useState
import TextareaAutosize from "react-textarea-autosize"; // Import here

// Define the FormData interface
interface FormData {
  title: string;
  content: string;
}

const inputClass = 
  'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300';

const FormNewPost = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; // Destructure name and value from the target
        setFormData(prev => ({ ...prev, [name]: value })); // Update state
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        // Handle form submission logic here, e.g., sending data to a server
        console.log('Form submitted:', formData);

        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
        
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form className="max-w-4xl mx-auto p-4" 
        onSubmit={handleSubmit}>
            <div className="mb-4">
                <input 
                    type="text" 
                    className={inputClass}
                    placeholder='Enter the Title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <TextareaAutosize 
                    minRows={5} 
                    name='content'
                    className={inputClass}
                    placeholder="Enter the content"
                    value={formData.content}
                    onChange={handleChange}
                />
            </div>

            <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400"
            >
                Submit
            </button>
        </form>
    );
};

export default FormNewPost;
