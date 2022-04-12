
const initialCartState ={
    loading:false,
    data:{},
    error:''
}
const cartReducer= (state=initialCartState, action) =>{
    if (action.type === 'fetch-cart')
    {
        return {
            ...state,
            loading:true
        }
    }
    else if (action.type === 'fetch-cart-sucess')
    {
        return {
            loading:false,
            data:action.payload.data,
            error:''
        }
    }
    else if (action.type === 'fetch-cart-error')
    {
        return {
            loading:false,
            data:[],
            error:action.payload.error
        }
    }
    return state
}

export default cartReducer;