import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("RESULT");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();


    let inputValue = value;

    let yearString = inputValue.slice(0, 2);
    let yearInt = parseInt(yearString);
    yearString = yearString.padStart(4, "19");

    let daysString = inputValue.slice(2, 5);
    let daysInt = parseInt(daysString);

    // const operationResult = num * 20; // example mathematical operation

    const days = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

    const daysLeap = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

    const months = [
        "Janaury",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let lastIndex = days.length;
  let dob = "";
  if (yearInt % 4 != 0) {
    if (daysInt < 500) {
      while (true) {
        if (daysInt > daysLeap[lastIndex - 1]) {
          let countDays = daysInt - daysLeap[lastIndex - 1];

          dob +=
            "DOB: " +
            yearString +
            " " +
            months[lastIndex] +
            " " +
            countDays +
            " " +
            "  Gender : Male  ";
          break;
        }
        lastIndex--;
      }
    } else if (daysInt >= 500) {
      daysInt = daysInt - 500;
      while (true) {
        if (daysInt > daysLeap[lastIndex - 1]) {
          let countDays = daysInt - daysLeap[lastIndex - 1];

          dob +=
            "DOB: " +
            yearString +
            " " +
            months[lastIndex] +
            " " +
            countDays +
            " " +
            "  Gender : Female  ";
          break;
        }
        lastIndex--;
      }
    }
  } else {
    if (daysInt < 500) {
      while (true) {
        if (daysInt > daysLeap[lastIndex - 1]) {
          let countDays = daysInt - daysLeap[lastIndex - 1];

          dob +=
            "DOB: " +
            yearString +
            " " +
            months[lastIndex] +
            " " +
            countDays +
            " " +
            "  Gender : Male  ";

          break;
        }
        lastIndex--;
      }
    } else if (daysInt >= 500) {
      daysInt = daysInt - 500;
      while (true) {
        if (daysInt > daysLeap[lastIndex - 1]) {
          let countDays = daysInt - daysLeap[lastIndex - 1];

          dob +=
            "DOB: " +
            yearString +
            " " +
            months[lastIndex] +
            " " +
            countDays +
            " " +
            "  Gender : Female  ";

          break;
        }
        lastIndex--;
      }
    }
  }

  let operationResult = dob;


    setResult(operationResult);
  };

  return (
    <div className="container1">
      <form onSubmit={handleFormSubmit}>
        <div className="container2">
        <label className="label">
          Enter NIC No:
          <input className="input" type="text" placeholder="Enter only old format nic no" value={value} onChange={handleInputChange} />
        </label>
        </div>
        <div className="container3">
        <button type="submit">CLICK</button>
        </div>
       
      </form>
        <div className="container4">
        <p>{result}</p>
        </div>
    </div>
  );
}
export default Calculator;