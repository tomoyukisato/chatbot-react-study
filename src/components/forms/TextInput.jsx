import React from "react";
import { TextField } from "@material-ui/core";
// import TextField from '@material-ui/core/TextField';

const TextInput =(props)=>{
    return (
        <TextField 
            fullWidth={true}
            id="standard-basic" 
            label={props.label}
            margin ={"dense"}
            multiiline={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    );
}
export default TextInput