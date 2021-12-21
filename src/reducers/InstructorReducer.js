// Actions
// classes data

const initialState = {
  classes: [],
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CLASS":
      return {
        //   Add a new class that SearchClasses.js and InstructorDashboard.js can access
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

export default classReducer;
