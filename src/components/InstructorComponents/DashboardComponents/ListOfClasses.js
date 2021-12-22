import { connect } from "react-redux";

const ListOfClasses = (props) => {
  console.log(props);
  return (
    <div id="class-list-container">
      <h2>List Of Classes</h2>
      <div id="class-list-elem-container">
        {props.classes.map((obj) => {
          return (
            <div className="class-list-elem" key={obj.id}>
              <div id="group-1">
                <p>Name:</p>
                <span>{obj.name}</span>
              </div>
              <hr />
              <div id="group-2">
                <p>Start Time: {obj.startTime}</p>
                <p>Location: {obj.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    numberOfClasses: state.numberOfClasses,
  };
};

export default connect(mapStateToProps)(ListOfClasses);
