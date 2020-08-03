import React from 'react';

import SplitView from '../components/SplitView';

export default () => (
  <section id="contact">
    <div className="w-full max-w-xs">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">Contact Us</h1>
      <form className="contact px-8 mt-6 pb-8 mb-4" data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="text"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="subject"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  </section>
);
