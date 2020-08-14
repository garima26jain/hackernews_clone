import React,{useState}  from "react";
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
//import gql from "graphql-tag";
//import {Mutation} from "react-apollo";

const useStyles = makeStyles((theme) => ({
    
    button: {
      margin: theme.spacing(1),
    },
}));

const divStyles={
    marginBottom:'15px',
    display:'flex',
    alignItems:'center'
};

const labelStyles={
    color:'#828282',
    fontSize:'13px',
    fontWeight:'bold',
    marginRight:'7px'
};

const inputStyles={
    width:'400px',
    padding:'5px'
}

const PostForm=({history})=>{
    const classes = useStyles();
    const[post,setPost]=useState({url:"", description:''});

    return(

        <form onSubmit={e=>{
            e.preventDefault();
        }}>
            <div  style={{backgroundColor:'#f6f6ef' ,padding:'10px 8px 15px'}}>
                <div style={divStyles}>
                <label htmlFor="url" style={labelStyles}>url</label>
                <input className="mb2" value={post.url}
                    type="text"
                    id="url"
                    placeholder="The URL for the link"
                    style={inputStyles}
                />
                </div>

                <div style={divStyles}>
                <label htmlFor="description" style={labelStyles}>text</label>
                <textarea className="mb2" value={post.description}
                    type="text"
                    id="description"
                    placeholder="The description for the link"
                    rows={4}
                    style={inputStyles}
                />
                </div>
                <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
            </div>
        </form>
    
    )
}

export default PostForm;
