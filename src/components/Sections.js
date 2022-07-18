import Section from "./Section";

const Sections = ({ categoryArray = [] }) => {
  return (
    <div>
      <div className="container">
        {categoryArray.map((element, index) => {
          return (
            element.meals.length > 0 && (
              <Section
                key={index}
                title={element.name}
                mealsArray={element.meals}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Sections;
