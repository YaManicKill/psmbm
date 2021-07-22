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
      We've had a great response for this year's Beach Mission with lots of children and young
      people now registered. Sadly this means that we've had to close bookings because we don't have
      enough team members to take any more children.
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      Having said that, there is no limit to the number of families with 0-4 year olds who can come,
      because they need to have a parent or carer with them. And we can also take a lot more
      secondary aged young people, but only at our evening sessions when extra team members will be
      available.
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      If you would like to register a child who is not at school yet for our afternoon session, or a
      secondary aged child (for evenings only), please send a message via the contact form, giving
      the names and ages of the child(ren).
    </p>
    <br />
    <h2 className={`text-xl lg:text-2xl xl:text-3xl font-bold leading-none`}>
      Programme Information
    </h2>
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
      Starfish, 0-4 year olds (with parent/carer) 2:30 till 4pm. 
      Turtles, 5-7 year olds, 10 till 11:50 am and 2:30 till 4pm.  
      Narwhals, 8-11 year olds, 10 till 11:50 am and 2:30 till 4pm.  
      Sharks, 12-17 year olds, 10 till 11:50 am, 2:30 till 4pm, and 7:30 till 9:30pm. 
      "
    ></img>
    <p className="text-l lg:text-xl mt-6 font-light">
      <strong>Closing Event</strong> – Saturday 7th August – more information to follow.
    </p>
  </section>
);
