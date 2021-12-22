export const CREATE_CLASS = "CREATE_CLASS";
export const EDIT_CLASS = "EDIT_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";

export const createClass = (data) => {
  return { type: CREATE_CLASS, payload: data };
};

export const editClass = (data) => {
  return { type: EDIT_CLASS, payload: data };
};

export const deleteClass = (id) => {
  return { type: DELETE_CLASS, payload: id };
};
