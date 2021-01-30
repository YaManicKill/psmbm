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
          <p className="text-2xl lg:text-3xl mt-6 font-light">1st – 13th August</p>
          <p className="text-l lg:text-xl mt-6 font-light">
            We&apos;re not sure yet if we&apos;ll be able to run &quot;as normal&quot;, but
            we&apos;re planning - as a minimum - to run some activities for all ages, for at least
            one week, beginning on 1st August (covid restrictions permitting, of course!) If the
            borders are still restricted, activities will be led by local team members. Keep the
            dates free, and watch out for more information nearer the time.
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
