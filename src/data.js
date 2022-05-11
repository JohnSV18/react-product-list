import data from './data.json';

const allCategories = data.map(obj => obj.category)

const categorySet = new Set(allCategories) 
const categoriesUnique = Array.from(categorySet)

const categoriesWithCounts = data.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    if (!obj[cat.category]) {
        obj[cat.category] = 0
    }
    obj[cat.category] += 1
  
    return obj
  }, {}) 

const namesAndCategories = categoriesUnique.map(name => {
// return an object here with the name and count
    return (
        {
            name: name,
            count: categoriesWithCounts[name]
        }
    )
})

namesAndCategories.push({ name: 'All', count: data.length })

const test_namesAndCatergories = console.log(namesAndCategories)
const test_catergoriesWithCounts = console.log(categoriesWithCounts)

export default data;
export { categoriesUnique, namesAndCategories, allCategories, categoriesWithCounts, test_namesAndCatergories, test_catergoriesWithCounts };