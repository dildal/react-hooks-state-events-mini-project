import React, {useState} from "react";

function CategoryFilter({categories, handleCategoryChange}) {
  const [selected, setSelected] = useState({'All': true, 'Code': false, 'Food': false, 'Money': false, 'Misc': false})
  function handleClick(e, category){
    setSelected((selected) => {
      let newSelected = {}
      for(let selector in selected){
        newSelected = {...newSelected, [selector]: selector === category}

      }
      return newSelected
    })
    handleCategoryChange(category);
  }
  const categoriesToDisplay = categories.map(category => {
    return <button 
              key={category} 
              onClick={(e) => handleClick(e, category)}
              className={selected[category] ? 'selected': 'test'}
            >
                {category}
              </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesToDisplay}
    </div>
  );
}

export default CategoryFilter;
