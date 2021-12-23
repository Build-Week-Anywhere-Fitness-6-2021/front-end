import { useState } from "react";
import { connect } from "react-redux";

import EditForm from "./Forms/EditForm";
import DeleteForm from "./Forms/DeleteForm";

import ClassCard from "./ClassCard";

const ListOfClasses = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [cardData, setCardData] = useState({});

  const handleCardClick = (data) => {
    setCardData(data);
    setClicked(true);
  };

  const handleBackButton = () => {
    props.setSelectedClass("");
  };

  return (
    <>
      {isClicked ? (
        <>
          {props.selectedClass === "edit" ? (
            <EditForm
              setAddedClassName={props.setAddedClassName}
              setEditClassName={props.setEditClassName}
              setDeleteClassName={props.setDeleteClassName}
              setPopup={props.setPopup}
              setSelectedClass={props.setSelectedClass}
              cardData={cardData}
            />
          ) : null}
          {props.selectedClass === "delete" ? (
            <DeleteForm
              setAddedClassName={props.setAddedClassName}
              setEditClassName={props.setEditClassName}
              setDeleteClassName={props.setDeleteClassName}
              setPopup={props.setPopup}
              setSelectedClass={props.setSelectedClass}
              cardData={cardData}
            />
          ) : null}
        </>
      ) : (
        <div className="main-dash-template">
          <header>
            <h1>List Of Classes</h1>
            <button className="custom-button back" onClick={handleBackButton}>
              Go Back
            </button>
          </header>
          <div id="class-list-elem-container">
            {props.classes.map((obj) => {
              return (
                <ClassCard
                  key={obj.id}
                  obj={obj}
                  handleCardClick={handleCardClick}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.instructorReducer.classes,
    numberOfClasses: state.instructorReducer.numberOfClasses,
  };
};

export default connect(mapStateToProps)(ListOfClasses);
