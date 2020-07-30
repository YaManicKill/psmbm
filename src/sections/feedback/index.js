import React from 'react';
import FeedbackCard from './feedbackcard';

const feedback = [
  "'It's great to see the team so happy to see our child. She benefits from every session. We wouldn’t miss a single class.'",
  "'Gordon cottage, the care and attitude that you give the children is second to none. No issues from me. Keep up the good work'",
  "'Find everyone is awesome up here. Really good with my child and other children. I think you all do a fantastic job'",
  "'Great support and the one to one is a great support for son. You get lots of answers and information about anything and everything'",
  "'happy atmosphere, very informative, great support network – everything in one area e.g.:  speech and language etc'",
  "'Offering times to work around the family, giving one to one to help settle into the CDC'",
]

export default () => (
    <section id="feedback" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Parent Feedback</h2>
        <div className="flex flex-col flex-wrap sm:flex-row sm:-mx-3 mt-12 items-stretch">
          {feedback.map((quote) => <FeedbackCard feedback={quote} key={quote}></FeedbackCard>)}
        </div>
      </div>
    </section>
);
