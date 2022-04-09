
const categoryMenuMap = (categoryInfo,menuInfo)=>{
    console.log("map",categoryInfo,menuInfo)
    const categoriesList = categoryInfo;
   
        let CategoryItemsMap = new Map();
        for (let category of categoriesList) {
            CategoryItemsMap[category.id] = [category.displayName];
        }
        const menuItems = menuInfo;
        for (let menu of menuItems) {
            let tempCategories = menu.categories;
            for (let tempCategory of tempCategories) {
                CategoryItemsMap[tempCategory].push(menu);
            }
        }
        return CategoryItemsMap;
}

export default categoryMenuMap;