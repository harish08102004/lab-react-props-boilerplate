import React from 'react';
import elephant from "./images/elephant.jpeg";
import AppClass from "./AppClass";

let data = [
  {
    id:1,
    img:elephant
  },
  {
    id:2,
    img:elephant
  },
  {
    id:3,
    img:elephant
  },
  {
    id:4,
    img:elephant
  }
]

function NewComponents() {
  return (
    <div>
      <AppClass img={data} />
    </div>
  );
}

export default NewComponents;
