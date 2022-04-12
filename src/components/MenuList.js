import {useSelector} from 'react-redux' 
function MenuList(props) {
    const offerInfo= useSelector(state => state.offer)
    const menuList = props.initialMenu.map( (menuItem)=> (
        <div key={menuItem.id}>
            <img src={ menuItem.vegetarian?"https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png":"https://freesvg.org/img/1531813245.png" } alt="veg/nonveg"></img>
            <p>{menuItem.displayName}</p>
            <p>₹{menuItem.price} <span className="offer-text">{offerInfo.data.offerText}</span></p>
        </div>));
    return ( 
        <>
        <p>ITEMS {menuList.length}</p>
        {menuList}
        </>
     );
}

export default MenuList;