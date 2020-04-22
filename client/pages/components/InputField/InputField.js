import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function InputField({ label, type, className }) {
  const classes = useStyles();

  return (
    <div className={className}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          type={type}
        />
      </form>
    </div>
  );
}
