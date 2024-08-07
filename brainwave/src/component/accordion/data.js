// AccordionData.js

export const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently.",
  },
  {
    id: 2,
    question: "How does the virtual DOM work in React?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates by diffing the virtual DOM with a snapshot of the previous state and applying only the necessary changes to the actual DOM.",
  },
  {
    id: 3,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that let you use state and other React features in functional components. Some common hooks include useState, useEffect, and useContext.",
  },
  {
    id: 4,
    question: "What is a component in React?",
    answer:
      "A component in React is a reusable piece of the UI. It can be a function or a class that returns a React element. Components allow you to break the UI into independent, reusable parts, and think about each piece in isolation.",
  },
  {
    id: 5,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe the UI. JSX makes it easier to write and add HTML in React.",
  },
  {
    id: 6,
    question: "How do you handle state in React?",
    answer:
      "State in React can be managed using useState in functional components or setState in class components. It allows components to create and manage their own data that can influence their rendering.",
  },
  {
    id: 7,
    question: "What is the difference between props and state?",
    answer:
      "Props (short for 'properties') are used to pass data from parent to child components. State, on the other hand, is local data storage that is specific to a component and can change over time. Props are read-only, while state can be updated using setState or useState.",
  },
  {
    id: 8,
    question: "What is a React fragment?",
    answer:
      "A React fragment is a wrapper that allows you to group a list of children without adding extra nodes to the DOM. It is used to avoid adding unnecessary divs when grouping elements.",
  },
];
