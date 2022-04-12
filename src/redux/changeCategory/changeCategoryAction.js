 const changeCategpry = (categoryID) =>{

    return {
        type: "change-category",
        payload:{
            id:categoryID
        }
    }

}

export default changeCategpry