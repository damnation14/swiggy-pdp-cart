import { combineReducers } from "redux";
import cartReducer from './cart/cartReducer'
import promotionReducer from './promotion/promotionReducer'
import changeCategoryReducer from './changeCategory/changeCategoryReducer'
const rootReducer = combineReducers({
    cart:cartReducer,
    offer:promotionReducer,
    categoryID:changeCategoryReducer
})

export default rootReducer;
