import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%"
  }
}));

/**
 * * Material UI에서 기본 제공되는 스타일링 시스템은 JSS를 바탕으로 한다.
 */

const IndexPage: React.FC = props => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1">메인 페이지 입니다.</Typography>
    </Grid>
  );
};

export default IndexPage;
