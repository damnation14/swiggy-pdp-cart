import axios from 'axios'
export const fetchOfferReuqest = () =>{

    return {
        type: "fetch-offer"
    }

}

export const fetchOfferSucess = (fetchedData) =>{

    return {
        type: "fetch-offer-sucess",
        payload:{
            data: fetchedData
        }
    }
    
}

export const fetchOfferError = (errorMessage) =>{

    return {
        type: "fetch-offer-error",
        payload:{
            error: errorMessage
        }

    }
    
}

export const fetchOffer = (url) =>{
    return (dispatch) =>{
        dispatch(fetchOfferReuqest())
        axios.get(url)
        .then((response)=> {
            dispatch(fetchOfferSucess(response.data))

        })
        .catch((error)=>{
            dispatch(fetchOfferError(error))
        })
    }
}