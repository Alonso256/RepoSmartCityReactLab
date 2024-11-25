import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="container">
        {children}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    background-color: #f2f3f7;
    border-radius: 0.75em;
    cursor: pointer;
    transition: ease 0.2s;
    box-shadow: 1em 1em 1em #d8dae0b1, -0.75em -0.75em 1em #ffffff;
    border: 1.5px solid #f2f3f7;
  }

  .card:hover {
    background-color: #e3e6ea;
    border: 1.5px solid #1677ff;
  }

   .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    align-items: center;
    justify-content: center;
  }

  .status-ind {
    width: 0.625em;
    height: 0.625em;
    background-color: #ff0000;
    margin: 0.375em 0;
    border-radius: 0.5em;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    color: #333;
  }

  .time {
    font-size: 0.875em;
    color: #777;
  }

  .text-link {
    font-weight: 500;
    text-decoration: none;
    color: black;
  }

  .button-wrap {
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
  }

  .secondary-cta {
    background-color: transparent;
    border: none;
    font-size: 15px;
    font-weight: 400;
    color: #666;
    cursor: pointer;
  }

  .primary-cta {
    font-size: 15px;
    background-color: transparent;
    font-weight: 600;
    color: #1677ff;
    border: none;
    border-radius: 1.5em;
    cursor: pointer;
  }

  button:hover {
    text-decoration: underline;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 0.875em;
  }
    @media (max-width: 768px) {
    .card {
      padding: 1rem;
    }
  }`;

export default Card;
