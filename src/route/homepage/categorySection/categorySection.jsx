const CategorySection = () => {
  const categories = [
    { id: "8934", name: "Category 1", popular: true },
    { id: "0934", name: "Category 2", popular: true },
    { id: "9934", name: "Category 3", popular: true },
    { id: "3457", name: "Category 4", popular: false },
    { id: "2345", name: "Category 5", popular: false },
    { id: "8799", name: "Category 6", popular: true },
    { id: "9903", name: "Category 7", popular: true },
    { id: "3464", name: "Category 8", popular: false },
  ];
  return (
    <section id="CategorySection">
      <div>
        <div>
          Category List Component
          <div>
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <h2>{category.name}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          Popular Category Display
          <div>
            {categories.map((category) => {
              const mapFunction = () => {
                if (category.popular) {
                  return (
                    <div key={category.id}>
                      <h2>{category.name}</h2>
                    </div>
                  );
                }
              };

              return mapFunction;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
