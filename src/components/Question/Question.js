import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Options from "./Options";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginBottom: 2
  },
  wrong: {
    border: "1px solid red"
  },
  noAnswer: {
    border: "1px solid brown"
  }
}));

function Question(props) {
  const { question, getAnswer, notAnswered, answer, wrongAnswered } = props;
  const classes = useStyles();

  return (
    <div>
      <Paper
        className={`${classes.root} ${wrongAnswered &&
          classes.wrong} ${notAnswered && classes.noAnswer}`}
      >
        <Typography component="p">
          {question.id}. {question.question}
        </Typography>
        <Options
          options={question.options}
          getAnswer={getAnswer}
          answer={answer}
        />
      </Paper>
    </div>
  );
}

export default Question;
