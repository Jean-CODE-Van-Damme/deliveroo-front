import Section from "./Section";

const Sections = ({
  categoryArray = [],
  basketArray = [],
  setBasketArray,
  numberMeal,
  setNumberMeal,
}) => {
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
                basketArray={basketArray}
                setBasketArray={setBasketArray}
                numberMeal={numberMeal}
                setNumberMeal={setNumberMeal}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Sections;
