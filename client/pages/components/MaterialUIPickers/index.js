import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers({
  selectedDate,
  setSelectedDate,
  setConfirmationDisplayed,
  confirmationDisplayed,
  formatDate
}) {
  // The first commit of Material-UI

  const handleDateChange = date => {
    setSelectedDate(date);
    setConfirmationDisplayed(true);
    console.log(JSON.stringify(selectedDate));
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date"
            format="yyyy/MM/dd hh:mm a"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            selectedDateProp={selectedDate}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
}
