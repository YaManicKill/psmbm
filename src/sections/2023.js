import React from 'react';

import Heading from '../components/Heading';
import SESSION_TIMES from '../images/Session-Times.jpg';
import FAMILY_EVENTS from '../images/Family-events-poster-1.jpg';

export default () => (
  <section id="2021">
    <Heading>Beach Mission 2023</Heading>
    <p className="text-2xl lg:text-3xl mt-6 font-light">30th July – 11th August</p>
    <p className="text-l lg:text-xl mt-6 font-light">
      <a href="/register">
        Register Here.
      </a>
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      <a href="/InformationForParents2023.pdf">
        Important information for parents leaflet.
      </a>
    </p>
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
    <img src={SESSION_TIMES} alt="Age groups and times. Starfish age 0-3, 1:30-3:15pm. Seahorses age 4-5s, 1:30-3:15pm. Turtles age 6-7s, 10-11:45am and 1:30-3:15pm. Narwhals age 8-10s, 10-11:45am, 1:30-3:15pm, and 7:30-8:45pm. Sharks age 11-12s, 10-11:45am, 1:30-3:15pm, and 7:30-8:45pm. Deckers age 13-17s, 10-11:45am, 1:30-3:15pm, and 7:30-9:45pm. The Lighthouse for adults and children not at other groups. 10:45-11:45am." />
    {/* <img src={FAMILY_EVENTS} /> */}
    <p className="text-l lg:text-xl mt-6 font-light">
      All children and young people must be <a href="/register">registered</a> for safeguarding reasons and to give us
      contact details and other important information. A link to the registration form will be
      available in June. In the meantime, if you have any questions, please use the contact form.
    </p>
  </section>
);
