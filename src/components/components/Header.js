import React from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const HeaderWrapper = styled.header`
   height: 150px;
   width: 100%;
   box-sizing: border-box;
   display: flex;
   flex-direction:row;
   padding: 0 16px;
   position: relative;
   top: 0;
   left:300px;
   background: #eeeeee;
   background-image: linear-gradient(to right, #3d3b36, #3d3b36);

   
.alt-t{
    padding: 20px 20px 20px 20px;
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
    width:800px;
    padding:0 0 0 600px;
}
`;

const H6 = styled.h6`
   margin: 0px 0px;
   padding: 0 0 0px 30px;

.alt-t1{
    display: flex;
    padding: 0 0 10px 0px;
}
`;

const H4 = styled.h4`
   margin: 0px 0px;
   display:flex;
   flex-direction:row;

   .alt-t3{
    width:400px;
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
                    <H6>Edit
                    <div className="alt-t1">
                     <H4>Gordon Fitzgerald
                      <div className="alt-t3">
                        <Button variant="contained" color="primary">
                           Upload Resume
                        </Button>
                      </div>
                     </H4>
                    </div>
                    </H6>
                    <H6>No Location Needed</H6>
                <h6>Description(in your words)</h6>
            </div>
        </HeaderWrapper>
    )
}