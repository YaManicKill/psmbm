import React from 'react';
import INFO_2020 from '../static/2020-info.pdf';

import SplitView from '../components/SplitView';

export default () => (
  <section id="2020">
    <SplitView
      left={
        <>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
            Virtually Beach Mission
          </h1>
          <p className="text-xl lg:text-1xl mt-6 font-light">3rd – 14th August 2020</p>
          <p className="text-xl lg:text-1xl mt-6 font-light">
            With most team members unable to travel to the island, Beach Mission is going “Virtual”.
          </p>

          <ul className="px-5 list-disc mt-3 text-xl lg:text-1xl font-light">
            <li>
              <a href={INFO_2020}>More information</a>
            </li>
            <li>
              <a href="https://content.scriptureunion.org.uk/holiday/port-st-mary-su-beach-mission">
                Registration
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/psmbeachmission">Facebook</a>
            </li>
          </ul>
        </>
      }
      right={
        <>
          <p className="text-xl lg:text-1xl mt-12 font-light">
            Playlists will be updated as the weeks go on:
          </p>
          <h1 className="text-xl font-bold leading-none pt-4">Age Group Videos:</h1>
          <ul className="mt-3 text-xl lg:text-1xl font-light">
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
            <h2 className="text-1xl font-bold leading-none pt-5">Others:</h2>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIxNpr6KGZG67uIoh49YZNer">
                Beach Services and Special Events
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Virtually-Beach-Mission-Allsorts-103783218070298/">
                Allsorts: A Place for Parents
              </a>
            </li>
          </ul>
        </>
      }
    ></SplitView>
  </section>
);
