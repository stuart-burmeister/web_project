import { Backdrop, Box, Button, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  backdrop: {
    position: "absolute",
    zIndex: 5,
    display: "block || flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor:"rgba(0,0,0,0.85)",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  button: {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.palette.primary.main,
    width: 160,
  },
}));

const CustomBackdrop = props => {
  const { open, title, onClick,  } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Backdrop className={classes.backdrop}open={open}>
        <Typography className={classes.text}>
          {title}
        </Typography>
        <Button className={classes.button}
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => onClick()}>
          Create User
        </Button>
      </Backdrop>
    </Box>
  );
};

Backdrop.propTypes ={
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomBackdrop;