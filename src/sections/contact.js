import React from 'react';

import LOCAL_2020 from '../static/2020-local.pdf';
import SplitView from '../components/SplitView';

export default () => (
  <section id="contact">
    <SplitView
      left={
        <>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
            Afternoon Events
          </h1>
          <p className="text-xl lg:text-1xl mt-6 font-light">
            We are planning to run some afternoon events during the Beach Mission fortnight. Parents
            of children aged 12 and under will need to stay on site because we don't have enough
            team members to look after all the children.
          </p>
          <p className="text-xl lg:text-1xl mt-6 font-light">
            More information here: <a href={LOCAL_2020}>Local-Events.pdf</a>
          </p>
        </>
      }
      right={
        <div class="w-full max-w-xs">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">Contact Us</h1>
          <form class="contact px-8 pt-6 pb-8 mb-4 mt-5" data-netlify="true" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div class="mb-4">
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      }
    ></SplitView>
  </section>
);
