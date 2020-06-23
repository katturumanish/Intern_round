import React from "react";
import styled from "styled-components";
import FormControl from '@material-ui/core/FormControl';

const Contentwrapper = styled.div`
  height:700px;
  width: 1100px;
  background: #25262b;
  box-sizing: border-box;
  display: flex;
  color: white;
  flex-direction:row;
  padding: 0 16px;
  position: relative;
  left:250px;
  top:120px;
  
  ::placeholder{
      color:white;
  }

  .alt-dropdown{
      position: relative;
      width:200px;
      border-style: solid;
      border-width: thin;
      border-radius: 30px;
      height:25px;
  }
  

  .alt-content{
      position:relative;
      left:30px;
      top:0px;
  }

  .alt-tech{
    position:relative;
    left:0px;
    top:20px;
    color: #586671;
  }

  .alt-tech1{
    position:relative;
    left:0px;
    top:40px;
    color: #586671;
  }

  .alt-tech2{
    position:relative;
    left:0px;
    top:60px;
    color: #586671;
  }

  .alt-sub{
      font-size:12px;
      word-spacing: 30px;
      color: white;
  }

  .alt-box{
    background: #12171d;
    height: 50px;
    width:1070px;
  }

  .alt-box1{
    background: #12171d;
    position: relative;
    top:10px;
    height: 360px;
    width: 400px;
  }

  .alt-prefrow{
      position:relative;
      top:10px;
      font-size: 13px;
      color: #586671;
  }
  
  .alt-prefmain{
      display:flex;
  }
  .alt-subbox{
      position:relative;
      width:100px;
      height:25px;
      left: 20px;
      top:15px;
      color:#9db4c3;
      border-color:black;
      border-radius:10px;
      background: #12171d;
  }
  
  .alt-subbox1{
    position:relative;
    height:25px;
    left: 20px;
    top:15px;
    color:#9db4c3;
  }
  .alt-subbox2{
    position:relative;
    width:100px;
    height:25px;
    left: 20px;
    top:15px;
    color:#9db4c3;
    border-color:black;
    border-radius:10px;
    background: #12171d;
  }
`;

const Select = styled.select`
  background: #12171d;
  color:black;
  border-color:black;
`;
export default function content(){
    return(
            <Contentwrapper>
              <div className="alt-content">
                <div className="alt-tech">
                    Technical skills
                    <p className="alt-sub">
                        languages Applications Methods
                    </p>
                    <div className="alt-box">
                       <button className="alt-subbox">
                           + Add Skills
                       </button>
                    </div>
                </div>
                <div className="alt-tech1">
                     Business experience
                    <p className="alt-sub">
                        Delivery Impact Communication
                    </p>
                    <div className="alt-box">
                       <button className="alt-subbox2">
                           + Add Skills
                       </button>
                    </div>
                </div>
                <div className="alt-tech2">
                     Preferences
                     <div className="alt-prefmain">
                     <div className="alt-box1">
                       <div className="alt-subbox1">
                           My expectations
                           <div className="alt-prefrow">
                               opportunity type
                               <FormControl>
                                  <Select  style={{left:"30px"}}className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"20px"}}className="alt-prefrow">
                               Target annual salary
                               <FormControl>
                                  <Select  style={{left:"12px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"30px"}}className="alt-prefrow">
                               Target hourly rate
                               <FormControl>
                                  <Select style={{left:"24px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"40px"}}className="alt-prefrow">
                               Willing to relocate
                               <FormControl>
                                  <Select style={{left:"20px"}}  className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"50px"}}className="alt-prefrow">
                               Willing to travel
                               <FormControl>
                                  <Select style={{left:"34px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"60px"}}className="alt-prefrow">
                               Most important
                               <FormControl>
                                  <Select style={{left:"34px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                       </div>
                     </div>
                     <div style={{left:"30px"}}className="alt-box1">
                       <div className="alt-subbox1">  
                         Expectations regarding employers
                         <div className="alt-prefrow">
                               Ideal location
                               <FormControl>
                                  <Select  style={{left:"64px"}}className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"20px"}}className="alt-prefrow">
                               Government jobs
                               <FormControl>
                                  <Select  style={{left:"42px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"30px"}}className="alt-prefrow">
                               Industries
                               <FormControl>
                                  <Select style={{left:"85px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"40px"}}className="alt-prefrow">
                               Data Culture
                               <FormControl>
                                  <Select style={{left:"68px"}}  className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"50px"}}className="alt-prefrow">
                               Preferred company size
                               <FormControl>
                                  <Select style={{left:"7px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                           <div style={{top:"60px"}}className="alt-prefrow">
                               Most important
                               <FormControl>
                                  <Select style={{left:"50px"}} className="alt-dropdown" >
                                   <option value="" disabled selected>Choose</option>
                                   <option value="1">Item 1</option>
                                   <option value="2">Item 2</option>
                                   <option value="3">Item 3</option>
                                  </Select>
                                </FormControl>
                           </div>
                       </div>
                     </div>
                     </div>
                </div>
                
              </div>
            </Contentwrapper>
    )
}