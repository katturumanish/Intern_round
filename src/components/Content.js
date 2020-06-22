import React from "react";
import styled from "styled-components";

const Contentwrapper = styled.div`
  height:200px;
  width: 1070px;
  background: #25262b;
  box-sizing: border-box;
  display: flex;
  background-image: linear-gradient(to right, #25262b, #25262b);
  color: white;
  flex-direction:row;
  padding: 0 16px;
  position: relative;
  left:300px;
  top:150px;
  
  .alt-tech{
      position:relative;
      left:30px;
      top:30px;
  }
  .alt-sub{
      font-size:12px;
      word-spacing: 30px;
  }

`;
export default function content(){
    return(
            <Contentwrapper>
                <div className="alt-tech">
                    Technical skills
                    <p className="alt-sub">
                        languages Applications Methods
                    </p>
                </div>
            </Contentwrapper>
    )
}