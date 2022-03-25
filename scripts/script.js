

class Model{
    constructor() {
        this.menuInfo = this.getMenuInfo();
        this.cartInfo = this.getCartInfo();
        this.categoryInfo = this.getCategoryInfo();
        this.categoryItemMap=this.createCategoryItemMap();
        
    }
    getMenuInfo() {
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

       getCartInfo() {
        return {
            "lineItems": [{
                "id": "1121",
                "name": "Plain Veg Biryani",
                "quantity": 2,
                "price": 149,
                "currency": "INR"
            }],
            "shippingFee": 0,
            "discount": 0,
            "tax": 0,
            "subTotal": 149
        };
      }
      
       getCategoryInfo() {
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

      createCategoryItemMap() {
        const categoriesList = this.categoryInfo.categories;
        let CategoryItemsMap = new Map();
        for (let category of categoriesList) {
            CategoryItemsMap[category.id] = [category.displayName];
        }
        const menuItems = this.menuInfo.menuItems;
        for (let menu of menuItems) {
            let tempCategories = menu.categories;
            for (let tempCategory of tempCategories) {
                CategoryItemsMap[tempCategory].push(menu);
            }
        }
        return CategoryItemsMap;
      }

      bindCategoryChanged(callback) {
        this.displayMenu = callback
      }

      createInitialMenu(){
        this.editMenuFromCategory(Object.keys(this.categoryItemMap)[0]);
      }

      editMenuFromCategory(categoryId){
        const categoryHeaderItems = this.categoryItemMap[categoryId];
        this.menu=categoryHeaderItems.slice(1);
        this.displayMenu(this.menu,categoryHeaderItems[0]);
      }

}


class View{
    constructor() {
        this.categoryDiv=this.getElement(".category")
        this.menuDiv=this.getElement(".menu-items")
        this.cartDiv=this.getElement(".cart")
        
    }
    displayCategories(categoryInfo){
        const categoriesList = categoryInfo.categories;
        const unorderedList = this.categoryTemplate(categoriesList);
        this.categoryDiv.appendChild(unorderedList);
    }
    categoryTemplate(categoriesList) {
        const unorderedList = document.createElement("ul");
        for (let category of categoriesList) {
            let listItem = document.createElement("li");
            listItem.innerText = category.displayName;
            listItem.id = category.id;
            unorderedList.appendChild(listItem);
        }
      
        return unorderedList;
      
    }

    displayMenu(menuItems,menuHeader){
        this.menuDiv.innerHTML=this.menuHeaderTemplate(menuHeader,menuItems.length)
        const menuItemsListDiv = document.createElement("div");
        menuItemsListDiv.classList.add('items');
        for (let item of menuItems) {
            const menuDiv = document.createElement("div");
            const itemImg = document.createElement("img");
            const itemName = document.createElement("p")
            const itemPrice = document.createElement("p")
            if (item.vegetarian)
                itemImg.src = "https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png";
            else
                itemImg.src = "https://freesvg.org/img/1531813245.png";
            itemName.innerText = item.displayName;
            itemPrice.innerText = `₹${item.price}`;
            menuDiv.append(itemImg, itemName, itemPrice);
            menuItemsListDiv.appendChild(menuDiv);
        }
         this.menuDiv.append(menuItemsListDiv);
    }

    menuHeaderTemplate(categoryHeader, categoryItemsNo) {
        return `<h2>${categoryHeader}</h2>
            <p>ITEMS ${categoryItemsNo}</p>`;
      }



    displayCart(cartInfo){
        const cartItems = cartInfo.lineItems;
        this.cartDiv.innerHTML = this.cartHeaderTemplate(cartItems.length);
        for (let cartItem of cartItems) {
            const cartItemDiv = this.cartItemsTemplate(cartItem);
            this.cartDiv.appendChild(cartItemDiv);
        }
        this.cartDiv.innerHTML += this.cartPriceSubmitTemplate(cartInfo.subTotal);

        
    }

     cartHeaderTemplate(cartItemsNo) {
        return `<h2>Cart</h2>
            <p>ITEMS ${cartItemsNo}</p>`;
      }
    cartItemsTemplate(cartItem) {

        const cartItemDiv = this.createElement("div","cart-item-quantity");
        const cartItemName = document.createElement("p");
        const cartItemQuantity = document.createElement("p")
        cartItemName.innerText = cartItem.name;
        cartItemQuantity.innerText = cartItem.quantity;
        cartItemDiv.appendChild(cartItemName);
        cartItemDiv.appendChild(cartItemQuantity);
        return cartItemDiv;
      }
      cartPriceSubmitTemplate(subTotal) {
        return `<div class="total-price">
              <h3>Subtotal</h3>
              <p>₹${subTotal}</p>
            </div>
            <button class="button">Checkout</button>`;
      }

      eventCategoryMenuChange(handler){
        document.querySelectorAll('.category ul li')[0].classList.add("highlighted");
        document.querySelectorAll('.category ul li').forEach(element => element.addEventListener('click', event =>{
            this.removeHighlight();
            event.target.classList.add("highlighted");
            handler(event.target.id)
        }));

    }

    removeHighlight(){
        document.querySelectorAll('.category ul li').forEach(element => {
            element.classList.remove("highlighted");
        })
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
      }
    
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

}

class Controller{
    constructor(model,view) {
        this.model=model;
        this.view=view;
        this.model.bindCategoryChanged(this.displayMenu)
        this.view.displayCategories(this.model.categoryInfo);
        this.model.createInitialMenu();
        this.view.displayCart(this.model.cartInfo);
        this.view.eventCategoryMenuChange(this.onCategoryChange);
        
    }

    displayMenu=(menu,menuHeader)=>{
       this.view.displayMenu(menu,menuHeader);
    }

    onCategoryChange= (id) =>{
        this.model.editMenuFromCategory(id)
    }

}

const app = new Controller(new Model(), new View());
