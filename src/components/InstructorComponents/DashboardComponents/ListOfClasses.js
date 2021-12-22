import { useEffect, useState } from "react";
import { connect } from "react-redux";
import EditForm from "./Forms/EditForm";
import DeleteForm from "./Forms/DeleteForm";

const ListOfClasses = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [cardData, setCardData] = useState({});

  console.log(props);

  const handleCardClick = (data) => {
    setCardData(data);
    setClicked(true);
  };

  return (
    <div>
      {isClicked ? (
        <>
          {props.selectedClass === "edit" ? (
            <EditForm cardData={cardData} />
          ) : null}
          {props.selectedClass === "delete" ? (
            <DeleteForm cardData={cardData} />
          ) : null}
        </>
      ) : (
        <div id="class-list-container">
          <h2>List Of Classes</h2>
          <div id="class-list-elem-container">
            {props.classes.map((obj) => {
              return (
                <div
                  onClick={() => {
                    handleCardClick(obj);
                  }}
                  className="class-list-elem"
                  key={obj.id}
                >
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
      )}
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
