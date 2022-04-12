import axios from 'axios'
export const fetchCartReuqest = () =>{

    return {
        type: "fetch-cart"
    }

}

export const fetchCartSucess = (fetchedData) =>{

    return {
        type: "fetch-cart-sucess",
        payload:{
            data: fetchedData
        }
    }
    
}

export const fetchCartError = (errorMessage) =>{

    return {
        type: "fetch-cart-error",
        payload:{
            error: errorMessage
        }

    }
    
}

export const fetchCartData = (url) =>{
    return (dispatch) =>{
        dispatch(fetchCartReuqest())
        axios.get(url)
        .then((response)=> {
            console.log(response.data)
            dispatch(fetchCartSucess(response.data))

        })
        .catch((error)=>{
            dispatch(fetchCartError(error))
        })
    }
}