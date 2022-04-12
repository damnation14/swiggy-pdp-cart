
const initialOfferState ={
    loading:false,
    data:{},
    error:''
}
const offerReducer= (state=initialOfferState, action) =>{
    if (action.type === 'fetch-offer')
    {
        return {
            ...state,
            loading:true
        }
    }
    else if (action.type === 'fetch-offer-sucess')
    {
        return {
            loading:false,
            data:action.payload.data,
            error:''
        }
    }
    else if (action.type === 'fetch-offer-error')
    {
        return {
            loading:false,
            data:[],
            error:action.payload.error
        }
    }
    return state
}

export default offerReducer;