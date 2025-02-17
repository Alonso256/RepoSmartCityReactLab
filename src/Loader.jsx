import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: inline-flex;
    gap: 10px;
  }

  .loader:before,
  .loader:after {
    content: "";
    height: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat
      #eee;
    transform: scaleX(var(--s,1)) rotate(0deg);
    animation: l6 1s infinite linear;
  }

  .loader:after {
    --s: -1;
    animation-delay: -0.1s;
  }

  @keyframes l6 {
    100% {
      transform: scaleX(var(--s,1)) rotate(360deg);
    }
  }`;

export default Loader;
