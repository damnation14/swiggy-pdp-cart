



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

function getCartInfo() {
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



//Recommended map
// let tempMap= new Map();
// for (let recommendedCategory of recommendedCategories){
//   tempMap[recommendedCategory.id]=[];
// }
// for(let menu of menuItems){
//   let tempCategories= menu.categories;
//   for (let tempCategory of tempCategories){
//     tempMap[tempCategory].push(menu.displayName);
//   }
// }


//Template
function categoryTemplate(recommendedCategories){
  console.log(recommendedCategories);
  const unorderedList=document.createElement("ul");
      for(let recommendedCategory of recommendedCategories){
        let listItem=document.createElement("li");
        listItem.innerText=recommendedCategory.displayName;
        unorderedList.appendChild(listItem);
      }

  return unorderedList;
}

function menuTemplate(menuItems){

  const menuItemsListDiv= document.createElement("div");
      menuItemsListDiv.classList.add('items');
      for (let item of menuItems){
          const menuDiv=document.createElement("div");
          const itemImg=document.createElement("img");
          const itemName=document.createElement("p")
          const itemPrice=document.createElement("p")
          if (item.vegetarian)
            itemImg.src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png";
          else
            itemImg.src="https://freesvg.org/img/1531813245.png";
          itemName.innerText=item.displayName;
          itemPrice.innerText=`₹${item.price}`;
          menuDiv.append(itemImg,itemName,itemPrice);
          menuItemsListDiv.appendChild(menuDiv);
      }
    return menuItemsListDiv;
}

function cartTemplate(recommendedCategories){
  console.log(recommendedCategories);
  const unorderedList=document.createElement("ul");
      for(let recommendedCategory of recommendedCategories){
        let listItem=document.createElement("li");
        listItem.innerText=recommendedCategory.displayName;
        unorderedList.appendChild(listItem);
      }

  return unorderedList;
}





let module=(function()
{

  const menuInfo=getMenuInfo();
  const cartInfo=getCartInfo();
  const recommendedInfo=getCategoryInfo();
  
  const recommendedCategories= recommendedInfo.categories;

  return {
    init:displaySections
  }

  

  function displaySections()
  {
    
    createCategorySection();
    createMenuSection();
    createCartSection();
  }

  function createCategorySection(){
      const categoryContainer=document.querySelector(".recommended");
      const unorderedList=categoryTemplate(recommendedCategories);
      categoryContainer.appendChild(unorderedList);

  }

  function createMenuSection(){
      const menuItems=menuInfo.menuItems;
      const menuContainer= document.querySelector(".menu-items");
      const menuHeader=document.createElement("h2");
      menuHeader.innerText="Recommended";
      const menuItemNo=document.createElement("p");
      menuItemNo.innerText=`ITEMS ${2}`;
      menuContainer.appendChild(menuHeader);
      menuContainer.appendChild(menuItemNo);

      //Menu items
      const menuItemsListDiv=menuTemplate(menuItems);
      menuContainer.appendChild(menuItemsListDiv);

  }

  

  function createCartSection(){

        const cartItems=cartInfo.lineItems;
        const cart=document.querySelector(".cart");
        const cartHeader=document.createElement("h2");
        const cartItemNo=document.createElement("p");
        cartHeader.innerText="Cart";
        cartItemNo.innerText=`ITEMS ${2}`;
        cart.appendChild(cartHeader);
        cart.appendChild(cartItemNo);

        for (let cartItem of cartItems) {
        const cartItemDiv=document.createElement("div");
        cartItemDiv.classList.add('cart-item');
        const cartItemName=document.createElement("p");
        const cartItemQuantity=document.createElement("p")
        cartItemName.innerText=cartItem.name;
        cartItemQuantity.innerText=cartItem.quantity;
        cartItemDiv.appendChild(cartItemName);
        cartItemDiv.appendChild(cartItemQuantity);
        cart.appendChild(cartItemDiv);
        }

        const cartItemPriceDiv=document.createElement("div");
        cartItemPriceDiv.classList.add('total-price');
        const subtotalHeader=document.createElement("h3");
        const subtotalPrice=document.createElement("p");
        subtotalHeader.innerText="Subtotal";
        subtotalPrice.innerText=`₹${cartInfo.subTotal}`;
        cartItemPriceDiv.appendChild(subtotalHeader);
        cartItemPriceDiv.appendChild(subtotalPrice);
        cart.appendChild(cartItemPriceDiv);

        const cartButton=document.createElement('button')
        cartButton.classList.add('button');
        cartButton.innerHTML="Checkout";
        cart.appendChild(cartButton);

  }

  

})();

module.init();