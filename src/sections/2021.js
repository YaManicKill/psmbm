import React from 'react';

import SplitView from '../components/SplitView';
import Heading from '../components/Heading';
import Contact from './contact';

export default () => (
  <section id="2021">
    <div className="pt-10 -mt-10" />
    <SplitView
      left={
        <div className="mt-5">
          <Heading>Beach Mission 2021</Heading>
          <p className="text-2xl lg:text-3xl mt-6 font-light">1st – 7th August</p>
          <p className="text-l lg:text-xl mt-6 font-light">
          Plans are well underway to run a programme of events for all ages (0-17) for one week this summer.
          </p>
          <p className="text-l lg:text-xl mt-6 font-light">
          As a result of the continuing uncertainties regarding Border restrictions and Covid guidelines,
          this year's Beach Mission will be scaled back compared to pre-Covid times,
          but we are aiming to include as many of our Beach Mission favourite activities as possible.
          We hope to have at least two sessions per day in four age groups, from Monday 2nd - Friday 6th August.
          </p>
          <p className="text-l lg:text-xl mt-6 font-light">
          If team numbers and current guidelines permit, we may also add an event on Sunday 1st and/or Saturday 7th August.
          More details, including how to book a place for your child(ren) will be made available in the coming weeks
          </p>
          <br />
          <Heading>What is Beach Mission?</Heading>
          <p className="text-l lg:text-xl mt-6 font-light">
            The Port St Mary SU Beach Mission was founded in 1901 and is a well-established event
            with excellent support from local authorities and churches. Since the decline of tourism
            in the area, the mission now works almost entirely with local children and young people,
            some of whom travel from other parts of the island. Around 250 children and young people
            attend daily to enjoy activities including games, crafts, drama, interactive Bible
            teaching, music and outings.
          </p>
          <br />
        </div>
      }
      right={
        <>
          <div className="mt-5 hidden lg:block" id="contactlg">
            <Contact />
          </div>
        </>
      }
    />
  </section>
);
