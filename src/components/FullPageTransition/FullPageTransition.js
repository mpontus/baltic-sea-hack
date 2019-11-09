import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const FirstScreen = styled.div`
  transition: all 200ms ease-in;
`;

const SecondScreen = styled.div`
  transform: translateY(100%);
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
`;

export const FullPageTransition = ({ open, to, children }) => (
  <Wrapper>
    <FirstScreen style={{ opacity: open ? 0 : 1 }}>{children}</FirstScreen>
    <SecondScreen
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : undefined
      }}
    >
      {open ? to : null}
    </SecondScreen>
  </Wrapper>
);
