import Section from "./Section";

const Sections = ({ categoryArray = [] }) => {
  return (
    <div>
      <div className="container">
        {/* on map sur categoryArray */}
        {categoryArray.map((element, index) => {
          return (
            element.meals.length > 0 && (
              <Section
                key={index}
                title={element.name}
                // on passe le tab meals array en props
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
