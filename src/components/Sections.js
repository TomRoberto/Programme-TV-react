import Section from "./Section";
import data from "../data.json";

const Sections = (props) => {
  return (
    <div className="sections">
      {data.map((elem, index) => {
        return (
          <Section
            time={elem.time}
            image={elem.image}
            title={elem.title}
            type={elem.type}
            duration={elem.duration}
            direct={elem.direct}
            inedit={elem.isUnseen}
          />
        );
      })}
    </div>
  );
};

export default Sections;
