import React from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const HeaderWrapper = styled.header`
   height: 120px;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   flex-direction:row;
   padding: 0 16px;
   position: relative;
   top: 0;
   left:250px;
   background: #eeeeee;
   background-image: linear-gradient(to right, #3d3b36, #3d3b36);

   .alt-t{
       padding: 20px 20px 20px 20px;
   }
   .alt-button{
       position:relative;
       left:600px;
       height:30px;
       font-size:12px;
   }
   .alt-text{
       position:relative;
       left:10px;
       font-size:12px;
   }
   .alt-textName{
       position:relative;
       left:10px;
       font-size:18px;
       color:#9db4c3;
       font-weight:bold;
   }
   .flex-container{
       display:flex;
   }
   .alt-btn{
       position:relative;
       left:10px;
       font-size:12px;
       background: #3d3b36;
       border-color: #3d3b36;
       border-style: none;
       cursor:pointer;
       color: blue;
       font-weight: bold;
       z-index:9999999;
   }
 
`; 

const Div = styled.div`
margin: 20px 20px 20px 20px;
display: flex;
flex-direction:row;
width:100%;
max-width: 50px;
float:left;

.alt-img{
  height: 80px;
  width:80px;
}


.alt-t3{
    width:300px;
    padding:0 0 0 600px;
}
`;


export default function header(){
    
    return(
        <HeaderWrapper>
            <Div >
              <Avatar className="alt-img"src=""/>
            </Div>
            <div className="alt-t">
                <Link to="/profile" className="alt-btn">Edit</Link>
                <div className="flex-container">
                  <div>
                    <div className="alt-textName">Gordon Fitzgerald </div>
                    <div className="alt-text">No Location Needed</div>
                  </div>
                   <Button className="alt-button" variant="contained" color="primary">
                     Upload Resume
                   </Button>
                </div>
                <div style={{top:"10px"}} className="alt-text">Description(in your words)</div>
            </div>
        </HeaderWrapper>
    )
}