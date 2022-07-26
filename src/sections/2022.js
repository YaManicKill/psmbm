import React from 'react';

import Heading from '../components/Heading';
import SESSION_TIMES from '../images/Session-Times.jpg';
import FAMILY_EVENTS from '../images/Family-events-poster-1.jpg';

export default () => (
  <section id="2021">
    <Heading>Beach Mission 2022</Heading>
    <p className="text-2xl lg:text-3xl mt-6 font-light">31st July – 12th August</p>
    <p className="text-l lg:text-xl mt-6 font-light">
      <a href="https://content.scriptureunion.org.uk/holiday/port-st-mary-su-beach-mission">
        Register Here
      </a>
    </p>
    <p className="text-l lg:text-xl mt-6 font-light">
      Beach Mission is coming soon and we would love you to register your children. There will be
      activities every weekday for 0-17 year olds in six different age groups. Everyone is welcome,
      and activities are free (apart from a contribution for the outing). Activities include games,
      crafts, competitions, an outing, and interactive Bible based activities appropriate for each
      age group. Children and young people are welcome to attend whichever sessions they wish. Check
      out our age groups and session times here:
    </p>
    <br />
    <img src={SESSION_TIMES} />
    <img src={FAMILY_EVENTS} />
    <p className="text-l lg:text-xl mt-6 font-light">
      All children and young people must be registered for safeguarding reasons and to give us
      contact details and other important information. Please book a place for your child(ren)
      <a href="https://content.scriptureunion.org.uk/holiday/port-st-mary-su-beach-mission">
        {' '}
        at this link
      </a>
      . More information will be provided to families who register, or if you have any questions,
      please use the contact form.
    </p>
  </section>
);
