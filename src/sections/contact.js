import React from 'react';
import Promo2020 from '../static/2020-promo.mp4';
import Promo2020_2 from '../static/2020-promo2.mp4';
import Promo2020_Image from '../static/2020-promo-still.jpg';
import Promo2020_2_Image from '../static/2020-promo2-still.jpg';
import INFO_2020 from '../static/2020-info.pdf';

import SplitView from '../components/SplitView';

export default () => (
  <section id="contact">
    <SplitView
      left={
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
      right={
        <div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
            Links to Videos
          </h1>
          <ul className="px-8 pt-6 pb-8 mb-4 mt-5">
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIyiCM98TaGBUOoo9mlxbhFW&index=1">
                Under 5s - Jelly Tots and Heroes
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIyFDhIB3Y3g0Yfv5TeqVTip&index=1">
                5-6s - Smarties
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIyRh4NOBVAww3fT7s8MQcYn&index=1">
                7-8s - Skittles
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIzNsFd39MKtIJ2uXtNCAt5R&index=1">
                9-10s - Crunchies
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIz_eFlp3qv8pdDEcjvU_biX&index=1">
                11-12s - Refreshers
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIxIYrTH1PiJVIxMUGXMS0LQ&index=1">
                13-17s - Deckers
              </a>
            </li>
            <h2 className="text-1xl font-bold leading-none pt-5">For all ages:</h2>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIxNpr6KGZG67uIoh49YZNer">
                Beach Services and Special Events
              </a>
            </li>
          </ul>
        </div>
      }
    ></SplitView>
  </section>
);
