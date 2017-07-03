import React from 'react';

const About = ({match}) => {
  return (
    <div>
      About {match.params.username}
    </div>
  );
}


export default About;
