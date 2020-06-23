import React from 'react';
import SideNavPage from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./Content";
import styled from 'styled-components';

const Wrapper = styled.div`
   display:flex;
   flex-direction:row;

   .alt-first{
   }
   .alt-second{
     position:absolute;
   }
`;

export default function LandingPage() {
  return (
  <>
    <Wrapper>
      <SideNavPage />
      <Header/>
      <div className="alt-second">
        <Content />
      </div>
      
    </Wrapper>
  </>
  );
}
