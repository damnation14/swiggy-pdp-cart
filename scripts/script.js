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

//Template
function categoryTemplate(categoriesList) {
  const unorderedList = document.createElement("ul");
  for (let category of categoriesList) {
      let listItem = document.createElement("li");
      listItem.innerText = category.displayName;
      listItem.id = category.id;
      unorderedList.appendChild(listItem);
  }

  return unorderedList;

}



function menuHeaderTemplate(categoryHeader, categoryItemsNo) {
  return `<h2>${categoryHeader}</h2>
      <p>ITEMS ${categoryItemsNo}</p>`;
}

function menuItemsTemplate(menuItems) {

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
  return menuItemsListDiv;
}


function cartHeaderTemplate(cartItemsNo) {
  return `<h2>Cart</h2>
      <p>ITEMS ${cartItemsNo}</p>`;
}


function cartItemsTemplate(cartItem) {

  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add('cart-item-quantity');
  const cartItemName = document.createElement("p");
  const cartItemQuantity = document.createElement("p")
  cartItemName.innerText = cartItem.name;
  cartItemQuantity.innerText = cartItem.quantity;
  cartItemDiv.appendChild(cartItemName);
  cartItemDiv.appendChild(cartItemQuantity);
  return cartItemDiv;
}

function cartPriceSubmitTemplate(subTotal) {
  return `<div class="total-price">
        <h3>Subtotal</h3>
        <p>₹${subTotal}</p>
      </div>
      <button class="button">Checkout</button>`;
}


let module = (function() {

  const menuInfo = getMenuInfo();
  const cartInfo = getCartInfo();
  const categoryInfo = getCategoryInfo();



  return {
      init: displaySections
  }



  function displaySections() {

      createCategorySection();
      createMenuSection();
      createCartSection();
  }




  function createCategorySection() {
      const categoriesList = categoryInfo.categories;
      const categoryContainer = document.querySelector(".category");
      const unorderedList = categoryTemplate(categoriesList);
      categoryContainer.appendChild(unorderedList);
      document.querySelectorAll('.category ul li').forEach(element => element.addEventListener('click', event => handleMenuFromCategory(event)));


  }

  function createMenuSection() {
      const CategoryItemsMap = mapItemsToCategory();
      document.querySelectorAll('.category ul li')[0].classList.add("highlighted");
      createMenuFromCategory(Object.keys(CategoryItemsMap)[0]);
  }


  function createCartSection() {

      const cartItems = cartInfo.lineItems;
      const cart = document.querySelector(".cart");
      cart.innerHTML = cartHeaderTemplate(cartItems.length);

      for (let cartItem of cartItems) {
          const cartItemDiv = cartItemsTemplate(cartItem);
          cart.appendChild(cartItemDiv);
      }
      cart.innerHTML += cartPriceSubmitTemplate(cartInfo.subTotal);

  }

  function createMenuFromCategory(category) {
      const CategoryItemsMap = mapItemsToCategory();
      const menuContainer = document.querySelector(".menu-items");
      const categoryHeaderItems = CategoryItemsMap[category];
      const categoryMenuItems = categoryHeaderItems.slice(1);

      menuContainer.innerHTML = menuHeaderTemplate(categoryHeaderItems[0], categoryMenuItems.length);
      const menuItemsListDiv = menuItemsTemplate(categoryMenuItems);
      menuContainer.appendChild(menuItemsListDiv);

  }

  function mapItemsToCategory() {
      const menuItems = menuInfo.menuItems;
      const categoriesList = categoryInfo.categories;
      let CategoryItemsMap = new Map();
      for (let category of categoriesList) {
          CategoryItemsMap[category.id] = [category.displayName];
      }
      for (let menu of menuItems) {
          let tempCategories = menu.categories;
          for (let tempCategory of tempCategories) {
              CategoryItemsMap[tempCategory].push(menu);
          }
      }
      return CategoryItemsMap;
  }

  function handleMenuFromCategory(category) {
      document.querySelectorAll('.category ul li').forEach(element => {
          element.classList.remove("highlighted");
      })
      category.target.classList.add("highlighted");
      createMenuFromCategory(category.target.id);
  }

})();

module.init();