import { CREATE_CLASS } from "./Actions/InstructorActions";

import classes from "../data/data";

const initialState = {
  classes: [],
  numberOfClasses: 0,
};

const InstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CLASS:
      return {
        //   Add a new class that SearchClasses.js and InstructorDashboard.js can access
        ...state,
        classes: [...state.classes, action.payload],
        numberOfClasses: (state.classes.length += 1),
      };
    case "EDIT_CLASS":
      return {
        //   Add a new class that SearchClasses.js and InstructorDashboard.js can access
      };
    case "DELETE_CLASS":
      return {
        //   Add a new class that SearchClasses.js and InstructorDashboard.js can access
        // classes: state.classes.filter(item => (action.payload))
      };
    default:
      return state;
  }
};

export default InstructorReducer;
