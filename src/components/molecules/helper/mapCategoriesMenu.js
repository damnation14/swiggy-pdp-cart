import  menuInfo from '../data/menu.json'
import  categoryInfo from '../data/categories.json'


const categoryMenuMap = ()=>{
    const categoriesList = categoryInfo.categories;
        let CategoryItemsMap = new Map();
        for (let category of categoriesList) {
            CategoryItemsMap[category.id] = [category.displayName];
        }
        const menuItems = menuInfo.menuItems;
        for (let menu of menuItems) {
            let tempCategories = menu.categories;
            for (let tempCategory of tempCategories) {
                CategoryItemsMap[tempCategory].push(menu);
            }
        }
        return CategoryItemsMap;
}

export default categoryMenuMap;