import React, {createElement} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Footer, FooterText} from 'react-weui';

const Viewer = ({viewerId, users}) => {
  if (users.length <= 1) { return null; }

  const {activeCount, viewers} = users.reduce(
    ({activeCount, viewers}, user) => {
      if (user.fbId === viewerId) {
        return {activeCount, viewers};
      }

    // Attributes
      const {fbId, online, profilePic} = user;
      const className = `viewer ${online ? 'active' : ''}`;

    // Construct viewer
      const viewer = <img key={fbId} src={profilePic} className={className} />;

    // Accumulate
      return {
        activeCount: (user.online ? activeCount + 1 : activeCount),
        viewers: viewers.concat(viewer),
      };
    },
    {activeCount: 0, viewers: []}
  );

  return (
    <section id='viewers'>
      <ReactCSSTransitionGroup
        className='viewers-list-cntnr'
        transitionName='viewer'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {viewers}
      </ReactCSSTransitionGroup>

      <Footer id='viewer-count'>
        <FooterText>
          {activeCount}/{viewers.length} people are viewing this list right now
        </FooterText>
      </Footer>
    </section>
  );
};
export default Viewer;