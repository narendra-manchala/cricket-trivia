import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chart from "react-google-charts"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function PaperSheet(props) {
  const classes = useStyles();
  const { result } = props

  return (
    <div>
      <Paper className={classes.root}>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["", "Correct", "InCorrect"],
            ["Number", result.correctlyAnsweredQIds.length, result.wrongAnsweredQIds.length],
          ]}
          options={{
            // Material design options
            chart: {
              title: "Result",
              // subtitle: "Sales, Expenses, and Profit: 2014-2017"
            }
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </Paper>
    </div>
  );
}

export default PaperSheet;
