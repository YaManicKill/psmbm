import React from 'react';

import Heading from '../components/Heading';

export default () => (
  <>
    <div className="pt-32 -mt-32 lg:pt-20 lg:-mt-20"></div>
    <div className="w-full">
      <Heading>Contact Us</Heading>
      <form className="contact mt-10 pb-8 mb-4" data-netlify="true" name="contact">
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
            className="bg-primary-default hover:bg-primary-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  </>
);
