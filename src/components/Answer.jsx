import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
      "button":{
          borderColor:'orange',
          color: "orange",
          fontWeight: 60,
          marginBottom: "8px",
            "&:hover":{
                backgroundColor:"orange",
                color:"#FFFF",
            }

      }
  })
);

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      className={classes.button}
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
