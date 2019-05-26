import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./App.css";
import questions from "../../data";
import QuestionsForm from "../QuestionsForm/QuestionsForm";
import BarChart from "../BarChart/BarChart";

function App() {
  const [answers, setAnswers] = React.useState({});
  const [notAnsweredQIds, setNotAnsweredQIds] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const getAnswer = (id, answer) => {
    if (answer === "") {
      const answersCopy = { ...answers };
      delete answersCopy[id];
      setAnswers(answersCopy);
      setResult(null);
    } else {
      setAnswers(prevState => ({
        ...prevState,
        [id]: answer
      }));
      setResult(null);
    }
  };

  React.useEffect(() => {
    console.log(result);
  });

  const handleSubmit = () => {
    if (checkAnswered()) {
      evalQuestions();
    }
  };

  const checkAnswered = () => {
    const notAnswered = [];
    questions.forEach(question => {
      if (!answers.hasOwnProperty(question.id)) {
        notAnswered.push(question.id);
      }
    });
    console.log(notAnswered);
    setNotAnsweredQIds(notAnswered.length > 0 ? notAnswered : null);
    return notAnswered.length === 0;
  };

  const evalQuestions = () => {
    const correctlyAnsweredQIds = [];
    const wrongAnsweredQIds = [];
    questions.forEach(question => {
      // console.log(question.answer, answers[q])
      if (question.answer === answers[question.id]) {
        correctlyAnsweredQIds.push(question.id);
      } else {
        wrongAnsweredQIds.push(question.id);
      }
    });
    console.log(correctlyAnsweredQIds, wrongAnsweredQIds);
    setResult({ correctlyAnsweredQIds, wrongAnsweredQIds });
  };

  const clearTrivia = () => {
    setAnswers({});
    setNotAnsweredQIds(null);
    setResult(null);
  };

  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        <Box textAlign="center" m={1}>
          Cricket Trivia
        </Box>
      </Typography>
      {notAnsweredQIds && (
        <Typography style={{ color: "red" }}>
          Answer all the questions
        </Typography>
      )}
      {}
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <QuestionsForm
            questions={questions}
            getAnswer={getAnswer}
            answers={answers}
            handleSubmit={handleSubmit}
            notAnsweredQIds={notAnsweredQIds}
            clearTrivia={clearTrivia}
            wrongAnsweredQIds={result ? result.wrongAnsweredQIds : null}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          {result && <BarChart result={result} />}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
