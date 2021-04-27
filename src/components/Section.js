const Section = (props) => {
  return (
    <>
      <div className="section">
        <p className="time"> {props.time}</p>
        <img src={props.image} alt="" />
        <div className="right-part">
          <h2>{props.title}</h2>
          <p>{props.type}</p>
          <div className="low-part">
            <p className="duration">{props.duration}</p>
            {props.direct && <p className="info">&#183; Direct</p>}
            {props.inedit && <p className="info">&#183; Inédit</p>}
          </div>
        </div>
      </div>
      <div className="limit"></div>
    </>
  );
};

export default Section;
