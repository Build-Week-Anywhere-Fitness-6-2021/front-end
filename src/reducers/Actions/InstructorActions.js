export const CREATE_CLASS = "CREATE_CLASS";

export const createClass = (data) => {
  return { type: CREATE_CLASS, payload: data };
};
