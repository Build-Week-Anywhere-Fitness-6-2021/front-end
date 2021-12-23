const ClassCard = (props) => {
  const { obj, handleCardClick } = props;
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
        <p>Start Time: {obj.start}</p>
        <p>Location: {obj.location}</p>
      </div>
    </div>
  );
};

export default ClassCard;
