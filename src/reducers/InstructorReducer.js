import {
  CREATE_CLASS,
  EDIT_CLASS,
  DELETE_CLASS,
} from "../actions/InstructorActions";

const initialState = {
  classes: [],
  numberOfClasses: 0,
};

const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CLASS:
      return {
        //   Add a new class that SearchClasses.js and InstructorDashboard.js can access
        ...state,
        classes: [...state.classes, action.payload],
        numberOfClasses: (state.classes.length += 1),
      };
    case EDIT_CLASS:
      return {
        //   Add a new class that SearchClasses.js and InstructorDashboard.js can access
        ...state,
        classes: state.classes.map(
          (obj) => [action.payload].find((o) => o.id === obj.id) || obj
        ),
      };
    case DELETE_CLASS:
      return {
        //   Add a new class that SearchClasses.js and InstructorDashboard.js can access
        // classes: state.classes.filter(item => (action.payload))
        ...state,
        classes: state.classes.filter((obj) => action.payload !== obj.id),
        numberOfClasses: (state.classes.length -= 1),
      };
    default:
      return state;
  }
};

export default instructorReducer;
