import React from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const Div = styled.div`
  width: 50%;
  max-width: 250px;
  background: black;
  height:700px;
  box-sizing: border-box;
  color: white;
  border radius: 4px;
  margin: 0 auto auto 0;
  position: fixed;

  .alt-text{
    margin: 10px 20px 20px 20px;
    width:20%;
    max-width: 10px;
  }
  .alt-name{
    display:flex;
    width:250px;
    color: #586671;
  }
  .alt-label{
    padding:10px;
    position: relative;
    left:4px;
  }

  .alt-options{
    display:flex;
    position:relative;
    left:10px;
    padding: 0px 10px 10px 0px;
    color: #586671;
  }
  .alt-optlabel{
    position:relative;
    left:15px;
    width:100px;
    color: #586671;
    font-size:14px;
  }
`;


const UserWrapper = styled.div`
    margin: 10px 20px 20px 20px;
    width:10%;
    max-width: 10px;
`


export default function SideNavPage(){
  return(
    <Div>
      <br></br>
        <UserWrapper>
          <div className="alt-name">
           <Avatar label="kasturi" alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"/>
           <label className="alt-label">Kasturi Manish</label>
           <EmailIcon className="alt-label"/>
          </div>
          <br></br>
          <div className="alt-options">
            <PersonIcon/>
            <div className="alt-optlabel">Profile</div>
          </div>
          <div className="alt-options">
            <DashboardIcon />
            <div className="alt-optlabel">Dashboard</div>
          </div>
          <div className="alt-options">
            <ChromeReaderModeIcon/>
            <div className="alt-optlabel">Resume Builder</div>
          </div>
          <div className="alt-options">
            <PeopleIcon/>
            <div className="alt-optlabel">Community</div>
          </div>
          <div className="alt-options">
            <AppsIcon/>
            <div className="alt-optlabel">Resources</div>
          </div>
          <div className="alt-options">
            <LiveHelpIcon />
            <div className="alt-optlabel">FAQ</div>
          </div>
          <div className="alt-options">
            <ContactsIcon/>
            <div className="alt-optlabel">Contact</div>
          </div>
          <div className="alt-options">
            <AccountBalanceWalletIcon/>
            <div className="alt-optlabel">Referral Program</div>
          </div>
        </UserWrapper>     
    </Div>
  )
}

