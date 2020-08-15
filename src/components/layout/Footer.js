import React from 'react';

import FACEBOOK_ICON from '../../images/social/facebook.svg';
import YOUTUBE_ICON from '../../images/social/youtube.svg';
import TWITTER_ICON from '../../images/social/twitter.svg';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-12 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="grid grid-cols-5 px-3">
        <p className="col-span-3 lg:col-span-4 mt-5">
          The Port St Mary SU Beach Mission is run by{' '}
          <a href="http://www.sumt.im/">Scripture Union on the Isle of Man (SUMT)</a> and{' '}
          <a href="https://www.scriptureunion.org.uk/">Scripture Union England and Wales</a>
        </p>

        <div className="mt-6 lg:mt-2 grid grid-flow-col grid-cols-4 lg:grid-cols-5 col-span-2 lg:col-span-1">
          <div></div>
          <div>
            <a href="https://www.facebook.com/psmbeachmission/">
              <img src={FACEBOOK_ICON} />
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com/psmbm/">
              <img src={TWITTER_ICON} />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UC0tRjEk3zZQIF9hZZcLmCDQ">
              <img src={YOUTUBE_ICON} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
