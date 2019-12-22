import React from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core";
import { Router, Route, Switch } from "react-router";
import history from "service/history";
import { indexRoutes } from "route";
import Sidebar from "component/Sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100vw"
  },
  drawer: {
    width: 280,
    minWidth: 280,
    height: "100%",
    backgroundColor: "#350C35"
  },
  main: {
    width: 800,
    height: "100%",
    backgroundColor: "red"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router history={history}>
      <Switch>
        {indexRoutes.map((item, key) => {
          return (
            <Route path={item.route} key={item.route} exact={item.exact}>
              <div className={classes.root}>
                <div className={classes.drawer}>
                  <Sidebar />
                </div>
                <div className={classes.main}>{item.component}</div>
              </div>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
