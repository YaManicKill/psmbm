import React from 'react';

import Heading from '../components/Heading';
import SESSION_TIMES from '../images/Session-Times.jpg';
import FAMILY_EVENTS from '../images/Family-events-poster-1.jpg';

export default () => (
  <section id="2021">
    <Heading>Beach Mission 2023</Heading>
    <p className="text-2xl lg:text-3xl mt-6 font-light">30th July – 11th August</p>
    {/* <p className="text-l lg:text-xl mt-6 font-light">
      <a href="https://content.scriptureunion.org.uk/holiday/port-st-mary-su-beach-mission">
        Register Here
      </a>
    </p> */}
    <p className="text-l lg:text-xl mt-6 font-light">
      Beach Mission will be back this summer, and all children and young people will be welcome to
      join in. There will be activities every weekday for 0-17 year olds in six different age
      groups. Everyone is welcome, and activities are free (apart from a contribution for the
      outing). Activities include games, crafts, competitions, an outing, and interactive Bible
      based activities appropriate for each age group. Information about how to register will be
      available in June,
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      Children and young people are welcome to attend whichever sessions they wish. Check out our
      age groups and session times here:
    </p>
    <br />
    <img src={SESSION_TIMES} />
    {/* <img src={FAMILY_EVENTS} /> */}
    <p className="text-l lg:text-xl mt-6 font-light">
      All children and young people must be registered for safeguarding reasons and to give us
      contact details and other important information. A link to the registration form will be
      available in June. In the meantime, if you have any questions, please use the contact form.
    </p>
  </section>
);
