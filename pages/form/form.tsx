'use client';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: '',
    place: '',
    twitter: '',
    instagram: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Form data submitted successfully:', responseData);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
    setTimeout(() => {
      window.location.reload();
      alert('Form data submitted successfully');
    }, 1000);
  };
  return (
    <div className="">
      <div className="blog_main_body border-4 border-solid rounded-lg border-red-500 mx-auto sm:mx-4 lg:mx-16 h-full p-4">
        <h1 className="text-purple-700 text-xl mt-4 text-left w-full bg-transparent font-bold items-start">
          Please fill for options that you want in your blog
        </h1>
        <p className="text-purple-700 text-md mx-4 text-left w-full bg-transparent font-bold items-start">
          <span className="text-sm text-red-500">NOTE: </span>Sections are
          divided by colored borders. {' '}
          <span className="text-md text-red-500"> RED: </span>Default
          <span className="text-md text-green-500"> Green: </span>Live
        </p>
        {/* main form data */}
        <hr />
        <div className="w-full h-full">
          {/**enable original form after setting all the endpoints */}
          <div className="mx-auto my-4 p-6 bg-white rounded-md ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="travel"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Recent Travel Location
                </label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  placeholder="Latest Travel Location"
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  value={formData.place}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="about"
                  className="block text-gray-700 font-bold mb-2"
                >
                  About Yourself
                </label>
                <textarea
                  name="about"
                  id="about"
                  placeholder="Enter information about yourself"
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  value={formData.about}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="twitter"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Twitter
                </label>
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Enter your Twitter username"
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  value={formData.twitter}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="instagram"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  placeholder="Enter your Instagram username"
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  value={formData.instagram}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8 items-center justify-between text-center">
                <button
                  type="submit"
                  className="border-solid border-green-600 border-4 text-red-600 text-center w-full rounded-t-lg p-1 bg-green-400 font-bold hover:bg-green-700 hover:text-red-400 text-3xl md:w-2/3 lg:w-1/2 mx-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        {/* main form data */}
      </div>
    </div>
  );
};

export default Form;
