import React from 'react';
import Promo2020 from '../static/2020-promo.mp4';
import Promo2020_2 from '../static/2020-promo2.mp4';
import Promo2020_Image from '../static/2020-promo-still.jpg';
import Promo2020_2_Image from '../static/2020-promo2-still.jpg';
import INFO_2020 from '../static/2020-info.pdf';
import LOCAL_2020 from '../static/2020-local.pdf';

import Video from '../components/Video';
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
            With most team members unable to travel to the island, Beach Mission is going “Virtual”:
          </p>
          <ul className="list-disc pl-6 text-xl lg:text-1xl mt-6 font-light">
            <li>Daily online “Beach Services” (including the daily Drama)</li>
            <li>Daily online videos for every age group</li>
            <li>Resource pack for every child who registers</li>
          </ul>
          <p className="text-xl lg:text-1xl mt-6 font-light">
            More information here: <a href={INFO_2020}>VBM-Info.pdf</a>
            <br />
            The links for the videos <a href="#contact">are available now.</a>
          </p>
          <p className="text-xl lg:text-1xl mt-2 font-light">
            <a href="https://content.scriptureunion.org.uk/holiday/port-st-mary-su-beach-mission">
              Click here to register
            </a>
          </p>
        </>
      }
      right={<Video poster={Promo2020_Image} src={Promo2020} />}
    ></SplitView>

    <SplitView
      left={<Video poster={Promo2020_2_Image} src={Promo2020_2} />}
      right={
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
    ></SplitView>
  </section>
);
