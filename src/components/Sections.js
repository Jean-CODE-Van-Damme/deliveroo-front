import Section from "./Section";

const Sections = ({ categoryArray = [] }) => {
  return (
    <div>
      <div className="container">
        {categoryArray.map((element, index) => {
          return (
            <Section
              key={index}
              title={element.name}
              mealsArray={element.meals}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sections;
