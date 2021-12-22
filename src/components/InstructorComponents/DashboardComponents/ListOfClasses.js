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

  return (
    <>
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
