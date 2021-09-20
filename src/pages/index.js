import React from 'react';
import Layout from '../components/layout/Layout';

import BM2020 from '../sections/2020';
import BM2022 from '../sections/2022';
import SplitView from '../components/SplitView';
import Contact from '../sections/contact';
import Heading from '../components/Heading';

import MALLMORE_IMAGE from '../images/mallmore.jpg';

const Index = () => (
  <Layout>
    <div className="pt-10 -mt-10" />
    <SplitView
      left={
        <div className="mt-5">
          <BM2022></BM2022>
          <div className="mt-5" id="contact">
            <Contact></Contact>
          </div>
          <br />
          <img
            className="pr-10 hidden lg:block"
            src={MALLMORE_IMAGE}
            alt="Front door of Mallmore"
          ></img>
          <img className="p-10 lg:hidden" src={MALLMORE_IMAGE} alt="Front door of Mallmore"></img>
        </div>
      }
      right={
        <div className="mt-5">
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
          <BM2020></BM2020>
        </div>
      }
    />
  </Layout>
);

export default Index;
