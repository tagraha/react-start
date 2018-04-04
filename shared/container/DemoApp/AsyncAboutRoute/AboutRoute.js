import React from 'react';
import Helmet from 'react-helmet';

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
        <a target="_blank" href="https://github.com/tagraha/react-start">
          GitHub
        </a>{' '}
        page.
      </p>
      <p>
        honorable mention{' '}
        <a target="_blank" href="https://github.com/ctrlplusb">
          ctrlplusb
        </a>
      </p>
    </div>
  );
}

export default AboutRoute;
