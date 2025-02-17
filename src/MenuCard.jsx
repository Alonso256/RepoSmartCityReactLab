import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="text">
          <span>Lorem ipsum dolor sit amet</span>
          <p className="subtitle">Vivamus nisi purus</p>
        </div>
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: auto;
    height: auto;
    border-radius: 15px;
    background: rgba(194, 198, 255);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: "";
    height: 100px;
    width: 100px;
    position: absolute;
    top: -40%;
    left: -20%;
    border-radius: 50%;
    border: 35px solid rgba(255, 255, 255, 0.5);
    transition: all .8s ease;
    filter: blur(.5rem);
  }

  .text {
    flex-grow: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    color: aliceblue;
    font-weight: 900;
    font-size: 1.2em;
  }

  .subtitle {
    font-size: .6em;
    font-weight: 300;
    color: rgba(240, 248, 255, 0.691);
  }

  .icons {
    display: flex;
    justify-items: center;
    align-items: center;
    width: 250px;
    border-radius: 0px 0px 15px 15px;
    overflow: hidden;
  }

  .btn {
    border: none;
    width: 84px;
    height: 35px;
    background-color: rgba(247, 234, 234, 0.589);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .svg-icon {
    width: 25px;
    height: 25px;
    stroke: rgb(38, 59, 126);
  }

  .btn:hover {
    background-color: rgb(247, 234, 234);
  }

  .card:hover::before {
    width: 140px;
    height: 140px;
    top: -30%;
    left: 50%;
    filter: blur(0rem);
  }`;

export default Card;
