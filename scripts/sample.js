

function getCategoryInfo() {
    return {
        "categories": [{
            "displayName": "Recommended",
            "id": "recommended"
        }, {
            "displayName": "Dessert and Beverages",
            "id": "dessert_beverage"
        }, {
            "displayName": "Biryani",
            "id": "biryani"
        }]
    };
  }
  function getMenuInfo() {
    return {
        "menuItems": [{
                "id": "2121",
                "displayName": "Kadhai Paneer Biryani",
                "price": 249,
                "currency": "INR",
                "vegetarian": true,
                "imgUrl": "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=",
                "categories": ["recommended", "biryani"]
            },
            {
                "id": "2122",
                "displayName": "Real Biryani",
                "price": 349,
                "currency": "INR",
                "vegetarian": false,
                "imgUrl": "https://media.istockphoto.com/photos/hyderabadi-biryani-a-popular-chicken-or-mutton-rice-preparation-picture-id466089615?k=20&m=466089615&s=612x612&w=0&h=_Z0Jlombq-VX8Pl8I9mJf_kIuvbzZ7j8ucxvRoLL8BM=",
                "categories": ["biryani"]
            },
            {
                "id": "2123",
                "displayName": "Plain Veg Biryani",
                "price": 149,
                "currency": "INR",
                "vegetarian": true,
                "imgUrl": "https://media.istockphoto.com/photos/chicken-biryani-directly-above-photo-picture-id1169141170?k=20&m=1169141170&s=612x612&w=0&h=EpCF3lQF2GBRaVApNELuE5xFQfv8fyQ_wWC52hmyxeo=",
                "categories": ["biryani"]
            }
        ]
    };
  }
function mapItemsToCategory()
{
 
  const menuInfo=getMenuInfo();
  const menuItems=menuInfo.menuItems;
  const categoryInfo=getCategoryInfo();
  const categoriesList= categoryInfo.categories;
  let CategoryItemsMap= new Map();
  for (let category of categoriesList){
    CategoryItemsMap[category.id]=[category.displayName];
  }
  for(let menu of menuItems){
    let tempCategories= menu.categories;
    for (let tempCategory of tempCategories){
        CategoryItemsMap[tempCategory].push(menu);
    }
  }
  
  console.log(Object.keys(CategoryItemsMap));
  for (const category in CategoryItemsMap) {
    const categoryHeaderItems=CategoryItemsMap[category];
    const categoryItems = categoryHeaderItems.slice(1);
    console.log(categoryItems)
  }
  
}
mapItemsToCategory();