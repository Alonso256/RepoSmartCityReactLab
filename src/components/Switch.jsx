import React from 'react';
import styled from 'styled-components';

const Switch = ({ onChange, label }) => {
  return (
    <StyledWrapper>
      <label className="label">
        {label && <span className="label-text">{label}</span>}
        <div className="toggle">
          <input
            className="toggle-state"
            type="checkbox"
            name="check"
            onChange={(e) => onChange(e.target.checked)}
          />
          <div className="indicator" />
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #394a56;
  }

  .label-text {
    margin-right: 16px;
  }

  .toggle {
    isolation: isolate;
    position: relative;
    height: 30px;
    width: 60px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: -8px -4px 8px 0px #ffffff,
      8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset,
      -4px -4px 4px 0px #ffffff inset;
  }

  .toggle-state {
    display: none;
  }

  .indicator {
    height: 100%;
    width: 200%;
    background: #ecf0f3;
    border-radius: 15px;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow: -8px -4px 8px 0px #ffffff,
      8px 4px 12px 0px #d1d9e6;
  }

  .toggle-state:checked ~ .indicator {
    transform: translate3d(25%, 0, 0);
  }
`;

export default Switch;
