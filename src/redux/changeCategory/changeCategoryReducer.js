
const initialCategoryIdState ="recommended"
const changeCategoryReducer= (state=initialCategoryIdState, action) =>{
    if (action.type === 'change-category')
    {
        return action.payload.id
    }
    return state
}

export default changeCategoryReducer;