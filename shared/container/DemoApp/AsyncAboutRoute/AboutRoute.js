import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const TestStyle = styled.p`
  color: red;
`;

function AboutRoute() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>About</title>
      </Helmet>

      <p>
        Produced with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        <br />
        <span>Tirta Nugraha (dev.nugrata@gmail.com)</span>
      </p>

      <p>
        View our contributors list on our{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tagraha/react-start"
        >
          GitHub
        </a>{' '}
        page.
      </p>
      <TestStyle>
        honorable mention{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ctrlplusb"
        >
          ctrlplusb
        </a>
      </TestStyle>
    </div>
  );
}

export default AboutRoute;
