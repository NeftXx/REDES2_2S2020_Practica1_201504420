import React from "react";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright";
import useStyles from "./styles";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        My new kick
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Página hecha para la practica 1 de Redes 2
      </Typography>
      <Copyright />
    </footer>
  );
}

export default Footer;
