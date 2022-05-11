import data from "../data";
import "./ProductList.css";
function ProductList (props) {
  const { category } = props;
    return (
      <div className='ProductList'>
        {data.filter(obj => obj.category == category || category == 'All').map(item => {
            return (
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <small>Category: {item.category} Rating: {item.rating}</small>
              </div>
              )
          })}
      </div>
    )
}
export default ProductList;