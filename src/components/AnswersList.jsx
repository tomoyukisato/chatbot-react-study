import React from "react";
import { Answer } from "./index";

const AnswersList = (props) => {
  console.log(props.answers);
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return (
          <Answer
            content={value.content}
            key={index.toString()}
            select={props.select}
            nextId={value.nextId}
          />
        );
      })}
    </div>
  );
};

export default AnswersList;
