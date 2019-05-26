import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Question from "../Question/Question";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    border: "1px solid gray",
    maxHeight: "70vh",
    overflowY: "auto",
    marginBottom: 5
  }
}));

function QuestionForm(props) {
  const {
    questions,
    getAnswer,
    handleSubmit,
    notAnsweredQIds,
    clearTrivia,
    answers,
    wrongAnsweredQIds
  } = props;
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        {questions &&
          questions.map(question => (
            <Question
              question={question}
              key={question.id}
              getAnswer={answer => getAnswer(question.id, answer)}
              answer={answers[question.id]}
              notAnswered={
                notAnsweredQIds ? notAnsweredQIds.includes(question.id) : false
              }
              wrongAnswered={
                wrongAnsweredQIds ? wrongAnsweredQIds.includes(question.id): false
              }
            />
          ))}
      </Paper>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button fullWidth variant="outlined" onClick={clearTrivia}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default QuestionForm;
