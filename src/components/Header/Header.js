import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,

   
    
  },

  search: {
    position: 'relative',
    borderStyle:'solid ',
    borderColor:'lightGray',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

  },
  searchIcon: {
    padding: theme.spacing(0, 40),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 10),
    paddingLeft: `calc(1em + ${theme.spacing(10)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const Header = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <div position="static" className="appbar">
        <Toolbar className="toolbar">
         
          <div className="header-img">
          <img src={Logo} alt=""/>
          </div>
          <div className="search-box">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
           </div>
           <div className="other-header">
             <div>
             <Link to ="/home">Home</Link>
             </div>

               <div>
             <Link to ="/">Blog</Link>
             </div>
             <div>
             <Link to ="/">News</Link>
             </div>
             <div>
             <Link to ="/">Destination</Link>
             </div>
            
             <div>
             <Link to ="/login">Login</Link>
             </div>
           </div>
       
          
        </Toolbar>
      </div>
  
    </div>
  );
}

export default Header;