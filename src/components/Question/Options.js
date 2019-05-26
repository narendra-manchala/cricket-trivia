import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SimpleSelect(props) {
  const { options, getAnswer, answer } = props;
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    getAnswer(event.target.value)
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Answer
        </InputLabel>
        <Select
          value={answer ? answer : ""}
          onChange={handleChange}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map(option => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<FilledInput name="age" id="filled-age-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            options.map(option => (
              <MenuItem value={10}>{option}</MenuItem>

            ))
          }
        </Select>
      </FormControl> */}
    </form>
  );
}

export default SimpleSelect;
