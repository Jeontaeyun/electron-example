import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface IProps {
  title: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  }
}));

const ChannelPage: React.FC<IProps> = props => {
  const { title } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1">채널 페이지 : {title}</Typography>
    </Grid>
  );
};

export default ChannelPage;
