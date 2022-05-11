import { namesAndCategories } from '../data.js';
import "./CategoryList.css";
function CategoryList(props) {
  const { category, onClick } = props;

    return (
      <div className='CategoryList'>
        {namesAndCategories.map(cat => {
          const className = cat.name == category ? "selected" : ''
          return (  
            <button 
              className={className}
              onClick={() => onClick(cat.name)}
              >
              {cat.name}
              <span> {cat.count} </span>
            </button>
          )
        })}
      </div>
      
    )
  }

  export default CategoryList;