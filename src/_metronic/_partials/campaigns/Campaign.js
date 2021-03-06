
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MenuItem } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Popover } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({
  
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    root: {
        flexGrow: 1,
        // maxWidth: 345,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      icons:{
          color:'red'
      },
      // typography: {
      //   padding: theme.spacing(1),
      // },
  }));
  
export function  Campaign() {
    const classes = useStyles();
    // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

    const [shareEl, setShareEl] = React.useState(null);
  
    const shareClick = (event) => {
      setShareEl(event.currentTarget);
    };
  
    const shareClose = () => {
      setShareEl(null);
    };
  
    const shareopen = Boolean(shareEl);
    const id = shareopen ? 'simple-popover' : undefined;
    return (
     <>
     <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
           
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
          }
          
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon  aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      >
     
          
        <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
          
         
        </Typography>
      
      </Popover>
          </IconButton>
          
     
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
            
          }
          
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon  aria-describedby={id} variant="contained" color="primary" onClick={shareClick} />
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      >
     
          
        <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
          
         
        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      >
<Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      >  
        <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar> 
        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      >
     <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
 
        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      >
        <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar> 
        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>   
            </Menu>
          </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      > 
        <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>

        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}> <NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      >
        <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
            <IconButton aria-label="settings"  aria-haspopup="true"
          onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><NavLink className="menu-link" to='/videos'> <VisibilityOutlinedIcon  color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to='/editreview'><EditOutlinedIcon color="primary"/></NavLink></MenuItem>
              <MenuItem onClick={handleClose}><DeleteOutlineOutlinedIcon className={classes.icons}/></MenuItem>
              
            </Menu>
          </div>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon aria-describedby={id} variant="contained" color="primary" onClick={shareClick}/>
            <Popover
        id={id}
        open={shareopen}
        anchorEl={shareEl}
        onClose={shareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       
      > 
        <Typography style={{display:'flex',margin:'15px 15px'}}  className={classes.typography}>
        <Avatar style={{backgroundColor:'#00e676',marginLeft:'20px'}}><a href="https://web.whatsapp.com/send?text=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <WhatsAppIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#3B5998',marginLeft:'11px'}}><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <FacebookIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#dd4b39',marginLeft:'11px'}}><a href="mailto:?subject=Review&body=Check out this site https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <MailIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#55ACEE',marginLeft:'11px'}}><a href="https://twitter.com/share?text=Feedfleet&url=https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <TwitterIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#8c3c3c',marginLeft:'11px'}}><a href="https://www.feedfleet.com/shareVideo/Mg==/MQ=="> <LinkIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        <Avatar style={{backgroundColor:'#007bb5',marginLeft:'11px'}}><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.feedfleet.com%2FshareVideo%2FMg%3D%3D%2FMQ%3D%3D"> <LinkedInIcon style={{width:'30px',height:'30px',color:'white'}}/></a></Avatar>
        </Typography>
      
      </Popover>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don???t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        </Grid>
        
      </Grid>
    </div>
     
     </>
    );
  }
