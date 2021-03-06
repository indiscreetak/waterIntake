import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  overflow-y: scroll;
`;

const backdrop = props => {
  return (
    <Wrapper data-testid="backdrop" onClick={props.onClick} style={props.style}>
      {props.children}
    </Wrapper>
  );
};

backdrop.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.object
};

export default backdrop;
