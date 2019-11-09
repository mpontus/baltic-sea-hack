import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * Container to capture contents box sizing
 */
const Container = styled.div`
  position: relative;
`;

/**
 * Overlay to fill the container
 */
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Contents wrapper to hide the original contents
 */
const Contents = styled.div`
  opacity: 1;
  * {
    color: transparent;
  }
`;

/**
 * 360º rotation animation
 */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/**
 * Animated spinner
 */
const Spinner = styled.div`
  z-index: 100;
  opacity: 0.8;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  border: 2px solid #fff;
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: ${rotate} 0.5s infinite linear;
`;

/**
 * Displays loading overlay on top of contents when something is loading
 */
export const LoadingOverlay = ({ isLoading, children }) =>
  isLoading ? (
    <Container>
      <Overlay>
        <Spinner />
      </Overlay>
      <Contents>{children}</Contents>
    </Container>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
