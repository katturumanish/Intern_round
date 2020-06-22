import React from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
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
  max-width: 300px;
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
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const UserWrapper = styled.div`
    margin: 10px 20px 20px 20px;
    width:10%;
    max-width: 10px;
`


export default function SideNavPage(){
  const classes = useStyles();
  return(
    <Div>
      <br></br>
        <UserWrapper>
          <div className={classes.root}>
           <Avatar label="kasturi" alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"/>
           <label>Kasturi Manish</label>
           <EmailIcon />
          </div>
          <br></br>
          <div className={classes.root}>
            <PersonIcon/>
            <label>Profile</label>
          </div>
          <div className={classes.root}>
            <DashboardIcon />
            <label>Dashboard</label>
          </div>
          <div className={classes.root}>
            <ChromeReaderModeIcon/>
            <label>Resume Builder</label>
          </div>
          <div className={classes.root}>
            <PeopleIcon/>
            <label>Community</label>
          </div>
          <div className={classes.root}>
            <AppsIcon/>
            <label>Resources</label>
          </div>
          <div className={classes.root}>
            <LiveHelpIcon />
            <label>FAQ</label>
          </div>
          <div className={classes.root}>
            <ContactsIcon/>
            <label>Contact</label>
          </div>
          <div className={classes.root}>
            <AccountBalanceWalletIcon/>
            <label>Referral Program</label>
          </div>
        </UserWrapper>     
    </Div>
  )
}

