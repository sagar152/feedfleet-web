import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Avatarimg from '../../_assets/defaultprofile/Avatar.png'
import { Avatar } from '@material-ui/core';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';

import { Chip } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

import '../../../style/editreview.css'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& > *": {
            margin: theme.spacing(1)
        }

    },
    inputfile: {
        display: "none"
    },
    inputfile1: {
        display: "none"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    testing: {
        color: '#24a2da',
        fontSize: "16px",
        fontWeight: '700',
        paddingLeft: '1%',
        marginTop: '5px'
    },
    heading: {
        color: '#24a2da',
        fontSize: "18px",
        fontWeight: '500',
        paddingLeft: '1%',
        marginTop: '5px'
    },
    form: {
        marginTop:'150px'
    },
    input: {
        width: ' 100%',
        padding: ' 8px 20px',
        // margin: '8px 0',

        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: ' border-box'
    },
    btn: {
        marginLeft: '5px',
        padding: '8px 8px'
    },
    materialform:{
        '& > *': {
            textAlign:'left',
            width: '25ch',
          },
    },
    form_inline:{  
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
      },
    
    //   form_inline label {
    //     margin: 5px 10px 5px 0;
    //   }
    
      input2 :{
        verticalAlign:' middle',
        margin:' 5px 10px 5px 0',
        padding:'10px',
        backgroundColor:' #fff',
        border:' 1px solid #ddd'
      },
    
      button_section:{
       
      
        position: 'absolute',
         
           left: '0',
           
      },
     
    //   button_section1:{
       
      
    //     position: 'absolute',
       
           
    //         right: '0',
    //         marginTop:'12px'
            
    //   },
}));
export const  CreateCampaign= () => {

    const classes = useStyles();
    // setCover Photo
    // const [cover, setCover] = useState('https://www.feedfleet.com/uploads/20210419064628.png');
    const [imgCover, setImgCover] = useState('https://www.feedfleet.com/uploads/20210419064628.png');
    const [imgProfile, setImgProfile] = useState(Avatarimg);
    const [imgCompany, setImgCompany] = useState("https://www.feedfleet.com/uploads/20201001121334.png");
    
    const onChangeCover = (e) => {
        if (e.target.files[0]) {
            console.log("Cover: ", e.target.files);
            // setCover(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgCover(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onChangeCompany = (e) => {
        if (e.target.files[0]) {
            console.log("Company: ", e.target.files);
            // setCover(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgCompany(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // const [picture, setPicture] = useState(Avatarimg);
    
    const onChangePicture = (e) => {
        console.log('sdfsdffdssdf');
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            // setPicture(e.target.files[0]);
            const reader1 = new FileReader();
            reader1.addEventListener("load", () => {
                setImgProfile(reader1.result);
            });
            reader1.readAsDataURL(e.target.files[0]);
        }
    };

    //  add input value dynamic
    const [formValues, setFormValues] = useState([{ name: ""}])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
     }
        
    let addFormFields = () => {
        setFormValues([...formValues, { name: ""}])
     }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    const top100Films = [
        { title: 'Name', year: 1994 },
        { title: 'Email', year: 1972 },
        { title: 'DOB', year: 1974 },
        { title: 'Phone Number', year: 2008 },
        { title: 'City', year: 1957 },
        { title: "Country", year: 1993 },
        
      ];

      const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange1= (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item md={12} sm={12}>
                        <Paper className={classes.paper}>

                            <Typography variant="h6" className={classes.heading} Align="center">
                               Please Fill The Data
                            </Typography>
                            <div style={{
                                padding: '5px 8px', position: 'relative'
                            }}>
                                <div
                                    className="imagediv"
                                    style={{
                                        // border: '2px solid #24a3da',
                                        height: ' 300px'
                                    }}
                                >
                                    <img
                                        src={imgCover}
                                        alt=""
                                        style={{ verticalAlign: ' middle', width: "100%", height: "100%" }}
                                   
                                    />
                                </div>
                                <div style={{ position: 'absolute', right: '5px', bottom: '0px' }}>
                                    <input
                                        accept="image/*"
                                        className={classes.inputfile1}
                                        id="icon-button-file"
                                        type="file"
                                        name='cover'
                                        onChange={onChangeCover}
                                    />
                                    <label htmlFor="icon-button-file">
                                        <IconButton
                                       
                                       variant="contained"  color="default"  
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                             <Chip  avatar={<Avatar><PhotoCamera /></Avatar>} label="Edit Cover Photo" />
                                            {/* <Avatar>
                                               <PhotoCamera />
                                            </Avatar> */}

                                        </IconButton>
                                    </label>
                                </div>


                            </div>
                            <div style={{
                                position: 'relative'
                            }}>
                                <div
                                    className="imagediv"
                                    style={{
                                        
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={imgProfile}
                                        alt=""
                                        style={{ width: "120px", height: "120px", borderRadius: '50%',border:'3px solid #ddd', verticalAlign: ' middle', position: 'absolute', top: '-65px' }}
                                    
                                    />
                                </div>
                                <div style={{
                                    position: 'absolute', marginLeft: 'auto', marginRight: ' auto', left: ' 80px', right: '0',
                                    textAlign: 'center'
                                }}>
                                    <input
                                        accept="image/*"
                                        className={classes.inputfile}
                                        id="icon-button-file1"
                                        type="file"
                                        name="profile"
                                        onChange={onChangePicture}
                                    />
                                    <label htmlFor="icon-button-file1">
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <Avatar>
                                                <PhotoCamera />
                                            </Avatar>

                                        </IconButton>
                                    </label>
                                </div>
                            </div>
                            <Grid container spacing={1} className={classes.form}>
        
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}> 
          <form  noValidate autoComplete="off">
          <Grid container spacing={1}>
              <Grid item xs={12}>
              <div style={{
                                position: 'relative',
                                bottom:'25px'
                            }}>
                                <div
                                    className="imagediv"
                                    style={{
                                        
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={imgCompany}
                                        alt=""
                                        style={{ width: "140px", height: "140px", borderRadius: '50%',border:'5px solid #ddd',objectFit: 'inherit' , verticalAlign: ' middle', position: 'absolute', top: '-65px' }}
                                    
                                    />
                                </div>
                                <div style={{
                                    position: 'absolute', marginLeft: 'auto', marginRight: ' auto', left: ' 100px', right: '0',top:'20px',
                                    textAlign: 'center'
                                }}>
                                    <input
                                        accept="image/*"
                                        className={classes.inputfile}
                                        id="icon-button-file2"
                                        type="file"
                                        name="profile"
                                        onChange={onChangeCompany}
                                    />
                                    <label htmlFor="icon-button-file2">
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <Avatar>
                                                <PhotoCamera />
                                            </Avatar>

                                        </IconButton>
                                    </label>
                                </div>
                            </div>
              </Grid>
      <Grid item xs={12} style={{textAlign:'left',paddingLeft:'25px',paddingRight:'25px',}}>
      <TextField id="standard-basic" label="Your Name"  style={{width:'100%',marginTop:'35px'}}  /> </Grid>
      <Grid item xs={12} style={{textAlign:'left',paddingLeft:'25px',paddingRight:'25px',}}>
      <TextField id="standard-basic" label="Designation"  style={{width:'100%'}} /> </Grid>
      <Grid item xs={12} style={{textAlign:'left',marginTop:'5px'}}>
          <label htmlFor="maximum height" style={{marginTop:'5px',paddingLeft:'22px',paddingRight:'22px',}}>Message</label>
	<div class="wrap-input100 validate-input" data-validate = "Please enter your message" >
					<textarea class="input100" name="message" placeholder="Your Message"></textarea>
					<span class="focus-input100"></span>
				</div>
 </Grid> 
      <Grid item xs={12} style={{textAlign:'left',paddingLeft:'25px',paddingRight:'21px',}}>
     
      <form  onSubmit={handleSubmit}>
      <Grid item xs={12}>
          <div style={{width:'96%',position:'relative'}}>
          <hr style={{width:'100%',position:'absolute' , top:'15px',backgroundColor:'#3783e7',height:'2px'}}/>
          </div>
      
                <div style={{float:'right'}}>
                   
          <Fab color="secondary" aria-label="add" onClick={() => addFormFields()} >
        <AddIcon  />
         </Fab>
          </div>
           </Grid>
          {formValues.map((element, index) => (
            <Grid container>
                <Grid item xs={11}>
                <div className={`${classes.form_inline}`} key={index}>
               <TextField  type="text"  name="name" id="standard-basic" label="Enter field value"  style={{width:'100%'}} value={element.name || ""} onChange={e => handleChange(index, e)}  />

              
            </div>
                    </Grid>
                    <Grid item xs={1} >
                    {
                index ? 
                <Fab style={{backgroundColor:'red',color:'white' , marginTop:'10px',marginLeft:'20px' , maxWidth:'40px',maxHeight:'40px'}} aria-label="remove" onClick={() => removeFormFields(index)} >
                <DeleteForeverIcon />
                 </Fab>
               
                : null
              }
                        </Grid>
                </Grid>
          ))}
          
        
      </form>
       </Grid>
      </Grid>
     
    </form></Paper>
        </Grid>
        <Grid item xs={12}  md={6}>
          <Paper className={classes.paper}>
          <Grid container>
         
          <Grid item xs={12}>
              <h6 style={{textAlign:'left', marginTop:'25px', fontWeight:' 700',fontSize:'15px', color:'#24a2da'}}>LEAD MANAGEMENT</h6>
              <div className={classes.root} style={{marginTop:'5px',paddingLeft:'12px',paddingRight:'18px'}}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[1]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Extra Fields for Lead"
            placeholder="Extra Fields Add"
          />
        )}
      />
    </div>
          </Grid>
          <Grid item xs={12} style={{ textAlign:'left'}}>
          <label htmlFor="maximum height" style={{marginTop:'5px',textAlign:'left',paddingLeft:'20px',}}>Message</label>
	<div class="wrap-input100 validate-input" data-validate = "Please enter your message" >
					<textarea class="input100" name="message" placeholder="Your Message"></textarea>
					<span class="focus-input100"></span>
				</div>
          </Grid>
          <Grid item xs={12} style={{ textAlign:'left'}}>
              <h6 style={{marginTop:'5px',textAlign:'left',paddingLeft:'20px',}}>After thank you link</h6>
              <div style={{marginTop:'5px',textAlign:'left',paddingLeft:'22px',paddingRight:'20px'}}>
              <TextField id="filled-basic" label="Filled" variant="filled" style={{marginTop:'5px',textAlign:'left',width:'100%'}}/>
              </div>
              </Grid>
              <Grid item xs={12} style={{ textAlign:'left'}}>
            <div style={{marginTop:'12px',textAlign:'left',paddingLeft:'25px',paddingRight:'20px'}}>
            <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange1}
            name="checkedB"
            color="primary"
          />
        }
        label="Do you want to give rating ? "
      />
            </div>
              </Grid>
              <Grid item xs={12}>
              <Button variant="contained" className={classes.button_section1} style={{float:'right'}} >Submit</Button>
              </Grid>
          </Grid>
          </Paper>
        </Grid>
        
      </Grid>
                        </Paper>
                        
                    </Grid>


                </Grid>

            </div>
        </>
    )
}
