import { useState } from 'react';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Form data submitted successfully');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
    setTimeout(() => {
      window.location.reload();
      alert('Form data submitted successfully');
    }, 1000);
  };
  return (
    <div className="border-4 border-solid rounded-lg border-red-500 mx-auto sm:mx-4 lg:mx-16 h-full p-4">
      <h1 className="text-purple-700 text-xl mt-4 text-left w-full bg-transparent font-bold items-start">
        Please fill for options that you want in your blog
      </h1>
      <p className="text-purple-700 text-md mx-4 text-left w-full bg-transparent font-bold items-start">
        <span className="text-sm text-red-500">NOTE: </span>Empty slots will we
        filled with defaut values
      </p>
      {/* main form data */}
      <hr />
      <div className="w-full h-full">
        <div className="w-full max-w-md mx-auto">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/**enable original form after setting all the endpoints */}
        {/* <div className="mx-auto my-4 p-6 bg-white rounded-md shadow-md">
          <form>
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
              <textarea
                name="travel"
                id="travel"
                placeholder="Enter your recent travel location"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
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
                required
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
        </div> */}
      </div>
      <hr />
      {/* main form data */}
    </div>
  );
};
