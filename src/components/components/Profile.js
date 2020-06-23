import React from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';

const Div = styled.div`
   background: #12171d;
   width:100%;
   height:600px;
   .alt-div{
       position:relative;
       display:flex;
       left:30px;
       top:30px;
   }
   .alt-avtr{
       height:100px;
       width:100px;
   }
   .alt-txt{
       display:flex;
       color:white;
       position:relative;
       left:30px;
   }
   .alt-input{
       position:relative;
       left:20px;
       border-radius:20px;
       background: #12171d;
       height:30px;
       border-color:white;
       border-width:1px;
       float:right;
   }
   .alt-dropdown{
    position: relative;
    width:170px;
    border-style: solid;
    border-width: 1px;
    border-radius: 20px;
    height:35px;
    border-color:white;
    color:white;
   }
   .alt-desc{
    position:relative;
    left:20px;
    border-radius:20px;
    background: #12171d;
    height:80px;
    width:400px;
    border-color:white;
    border-width:1px;
    float:right;
   }
   .alt-btns{
       display:flex;
       position:relative;
       left:350px;
       top:80px;
   }
   .alt-btn1{
       background: #12171d;
       border-style:none;
       position:relative;
       left:10px;
       right:10px;
       height:30px;
       color:red;
   }
   .alt-btn2{
    background: blue;
    border-style:none;
    border-radius:20px;
    position:relative;
    left:30px;
    right:10px;
    height:30px;
    width:100px;
    color:white;
}
`;
const Select = styled.select`
  background: #12171d;
  color:black;
  left:35px
`;

export default function Profile(){

    return(
      <>
        <Div>
            <div className="alt-div">
              <Avatar className="alt-avtr" alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"/>
              <div >
                <div className="alt-txt">
                    First Name
                    <input className="alt-input" type="text" placeholder="    Gordon"/>
                </div>
                <div style={{top:"20px"}} className="alt-txt">
                    Last Name
                    <input className="alt-input" type="text" placeholder="    Fitzgerald"/>
                </div>
                <div style={{top:"40px"}} className="alt-txt">
                    Location
                    <FormControl>
                      <Select  className="alt-dropdown" >
                       <option value="" disabled selected>Choose</option>
                       <option value="1">San Jose</option>
                       <option value="2">Irvine</option>
                       <option value="3">Los Angeles</option>
                      </Select>
                    </FormControl>
                </div>
                <div style={{top:"60px"}} className="alt-txt">
                    Description
                    <input className="alt-desc" type="text" placeholder="    Type your description"/>
                </div>
                <div className="alt-btns">
                  <button className="alt-btn1">cancel</button>
                  <button className="alt-btn2">Save</button>
                </div>
              </div>
            </div>
        </Div>
      </>
    )
}