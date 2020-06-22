import React from 'react';
import './App.css';
import SideNavPage from "./components/components/Sidebar";
import Header from "./components/components/Header";
import Content from "./components/Content";
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

function App() {
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

export default App;
