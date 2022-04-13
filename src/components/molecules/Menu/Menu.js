import {  React } from 'react';
import styles from './menu.module.css'; 
import MainHeader from '../../atoms/MainHeader/MainHeader.js'
import MainItemNumber from '../../atoms/MainItemNumber/MainItemNumber.js'
import categoryMenuMap from '../helper/mapCategoriesMenu';
import MenuListItem from '../../atoms/MenuListItem/MenuListItem.js'
function Header ({categoryID}) {
   
    
    const categoryHeaderItems = categoryMenuMap()[categoryID];  
    const currentMenu= categoryHeaderItems.slice(1);
    const menuList = currentMenu.map( (menuItem)=> (
        <MenuListItem  key={menuItem.id} menuItem={menuItem}/>
    ));


        return (
            <div className={styles.menu_items}>
                    <MainHeader header={categoryHeaderItems[0]} />
                    <MainItemNumber itemNumber={currentMenu.length}/>
                    {menuList}
            </div>
        );
    }

 
export default Header;