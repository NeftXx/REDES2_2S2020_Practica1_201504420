import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SportsTennis from "@material-ui/icons/SportsTennis";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <SportsTennis className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
