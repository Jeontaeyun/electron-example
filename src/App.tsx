import React from "react";
import "./App.css";

import { makeStyles, Grid } from "@material-ui/core";
import { Router, Route, Switch } from "react-router";
import history from "service/history";
import { indexRoutes } from "route";
import Sidebar from "component/Sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  drawer: {
    backgroundColor: "#350C35",
    height: "100%",
    minWidth: 280
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router history={history}>
      <Switch>
        {indexRoutes.map((item, key) => {
          return (
            <Route path={item.route} exact={item.exact}>
              <Grid container className={classes.root}>
                <Grid
                  item
                  xs={2}
                  zeroMinWidth={true}
                  className={classes.drawer}
                >
                  <Sidebar />
                </Grid>
                <Grid item xs={10}>
                  {item.component}
                </Grid>
              </Grid>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
