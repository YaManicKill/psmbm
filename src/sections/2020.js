import React from 'react';
import INFO_2020 from '../static/2020-info.pdf';
import LOCAL_2020 from '../static/2020-local.pdf';

import SplitView from '../components/SplitView';
import EXTRA_EVENTS_IMAGE from '../static/2020-extra-events.jpg';
import Contact from './contact';

export default () => (
  <section id="2020">
    <SplitView
      left={
        <>
          <p className="text-xl lg:text-1xl font-light">
            With most team members unable to travel to the island, Beach Mission is going “Virtual”.
          </p>
          <p className="text-xl lg:text-1xl mt-6 font-light">
            Virtually Beach Mission is 3rd – 14th August 2020
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
            <li>
              <a href="/Big-Ball-quiz.pdf">Big Ball's Big Day Out Quiz</a>
            </li>
            <li>
              <a href="/Big-Ball-answers.pdf">Big Ball's Big Day Out Quiz Answers</a>
            </li>
            <li>
              <a href="/lost-leader-instructions.pdf">Lost Leader Instructions</a>
            </li>
            <li>
              <a href="/lost-leader.ppsx">Lost Leader Powerpoint</a>
            </li>
            <li>
              <a href="/lost-leader.pdf">Lost Leader PDF (for those who can't view powerpoints)</a>
            </li>
            <li>
              <a href="/lost-leader-answers.pdf">Lost Leader Answers</a>
            </li>
          </ul>
          <img
            className="pr-10 pt-10 hidden lg:block"
            src={EXTRA_EVENTS_IMAGE}
            alt="As well as the daily Beach Services and Age Group videos there will be 4 big events over the fornight for you to join in with virtually. Wednesday 5th August: Big Ball's big day out quiz. Friday 7th August: Lost leader challenge. Wednesday 12th August: Sand text competition. Friday 14th August: Ceilidh, at 7.30pm."
          ></img>
        </>
      }
      right={
        <>
          <ul className="text-xl lg:text-1xl font-light">
            <p className="text-xl lg:text-1xl font-light mb-5">
              Video playlists will be updated as the weeks go on.
            </p>
            <h1 className="text-xl font-bold leading-none mt-2 pb-2">All Age Videos:</h1>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLztoJU0d3XIxNpr6KGZG67uIoh49YZNer">
                Beach Services and Special Events
              </a>
            </li>
            <h1 className="text-xl font-bold leading-none mt-2 pb-2">Age Group Videos:</h1>
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
            <h1 className="text-xl font-bold leading-none mt-2 pb-2">Other:</h1>
            <li>
              <a href="https://www.facebook.com/Virtually-Beach-Mission-Allsorts-103783218070298/">
                Parents - Allsorts
              </a>
            </li>
          </ul>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none mt-5">
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

          <img
            className="p-20 lg:hidden"
            src={EXTRA_EVENTS_IMAGE}
            alt="Front door of Mallmore, where beach mission normally takes place. Scripture union banner flying"
          ></img>

          <div className="mt-5">
            <Contact></Contact>
          </div>
        </>
      }
    ></SplitView>
  </section>
);
