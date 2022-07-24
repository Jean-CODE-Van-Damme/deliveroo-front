import Section from "./Section";

const Sections = ({ categoryArray = [], basketArray = [], setBasketArray }) => {
  return (
    <div>
      {/* on map sur categoryArray */}
      {categoryArray.map((element, index) => {
        return (
          element.meals.length > 0 && (
            <Section
              key={index}
              title={element.name}
              // on passe le tab meals array en props
              mealsArray={element.meals}
              basketArray={basketArray}
              setBasketArray={setBasketArray}
            />
          )
        );
      })}
    </div>
  );
};

export default Sections;
