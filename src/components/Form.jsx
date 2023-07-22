/* eslint-disable react/prop-types */

import { useState } from "react";

export const Form = ({
  inputvalue,
  handleChange,
  handleAdd,
  buttonText,
  handleSave,
}) => {
  // let add = false;
  // let text;
  // if (add) {
  //   text = "add";
  // } else {
  //   text = "save";
  // }
  // const arr = [
  //   { text: "sample1", id: 1, arrlist: false },
  //   { text: "sample2", id: 2, arrlist: false },
  //   { text: "sample3", id: 3, arrlist: true },
  // ];

  // const Lists = test.map((list) => (
  //   <li key={list.id} style={{ color: list.arrlist ? "blue" : "red" }}>
  //     {list.text}
  //   </li>
  // ));

  // const [count, setCount] = useState(0);

  // function clicked() {
  //   setCount(count + 1);
  // }

  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Write your tasks here"
          value={inputvalue}
          onChange={handleChange}
        />
        <button onClick={buttonText === "Save" ? handleSave : handleAdd}>
          {buttonText}
        </button>
      </div>

      {/* <ul>{Lists}</ul> */}
    </>
  );
};

export default Form;
