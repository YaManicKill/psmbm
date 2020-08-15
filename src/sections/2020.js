import React from 'react';

import SplitView from '../components/SplitView';
import Heading from '../components/Heading';
import Contact from './contact';

import MALLMORE_IMAGE from '../images/mallmore.jpg';

export default () => (
  <section id="2020">
    <div className="pt-32 -mt-32 lg:pt-20 lg:-mt-20"></div>
    <SplitView
      top={<Heading>Virtually Beach Mission 2020</Heading>}
      right={
        <>
          <p className="text-xl lg:text-1xl mt-6 font-light"></p>

          <img
            className="pr-10 hidden lg:block"
            src={MALLMORE_IMAGE}
            alt="Front door of Mallmore"
          ></img>

          <div className="mt-5 lg:hidden" id="contact">
            <Contact></Contact>
          </div>
          <img className="p-10 lg:hidden" src={MALLMORE_IMAGE} alt="Front door of Mallmore"></img>
        </>
      }
      left={
        <>
          <ul className="text-xl lg:text-1xl font-light mt-5">
            <li>
              <a href="https://content.scriptureunion.org.uk/holiday/port-st-mary-su-beach-mission">
                You can still Register now
              </a>
            </li>
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

          <h1 className="text-xl font-bold leading-none mt-5">Resources:</h1>
          <ul className="text-xl lg:text-1xl font-light mt-5">
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
            <li>
              <a href="/jelly-tots-heroes-day-8-colouring.pdf">
                Jelly Tots and Heroes Day 8 Colouring Sheet
              </a>
            </li>
          </ul>
        </>
      }
    ></SplitView>
  </section>
);
