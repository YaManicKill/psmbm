import React from 'react';

import Heading from '../components/Heading';
import SESSION_TIMES from '../images/Session-Times.jpg';

export default () => (
  <section id="2021">
    <Heading>Beach Mission 2021</Heading>
    <p className="text-2xl lg:text-3xl mt-6 font-light">1st – 7th August</p>
    <p className="text-l lg:text-xl mt-6 font-light">
      Not long to go now until this year’s Beach Mission!
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      The uncertainties and border restrictions mean that things will be scaled back a bit, but we
      are planning to include lots of favourite Beach Mission activities for all ages (0-17s).
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      <strong>Opening Event</strong> – Sunday 1st August – more information to follow.
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      <strong>Daily sessions</strong> in four age groups:
    </p>
    <img
      className="pr-10"
      src={SESSION_TIMES}
      alt="Session times. 
      Starfish, 0-4 year olds (with parent/carer) 10 till 11:50am and 2:30 till 4pm. 
      Turtles, 5-7 year olds, 10 till 11:50 am and 2:30 till 4pm.  
      Narwhals, 8-11 year olds, 10 till 11:50 am and 2:30 till 4pm.  
      Sharks, 12-17 year olds, 10 till 11:50 am, 2:30 till 4pm, and 7:30 till 9:30pm. 
      "
    ></img>
    <p className="text-l lg:text-xl mt-6 font-light">
      <strong>Closing Event</strong> – Saturday 7th August – more information to follow.
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      The online registration site is nearly ready. Watch this page for more information. Please
      plan to register your child(ren) as soon as possible after the bookings have opened.
    </p>
  </section>
);
