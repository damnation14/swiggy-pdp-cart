import {  React } from 'react';
import styles from './menu.module.css'; 
import HeaderTags from '../../atoms/HeaderTags/HeaderTags.js'
import Text from '../../atoms/Text/Text.js'
import categoryMenuMap from '../helper/mapCategoriesMenu';
import MenuListItem from '../MenuListItem/MenuListItem.js'
function Menu ({menuInfo,categoriesInfo,categoryID}) {
   
    
    const categoryHeaderItems = categoryMenuMap(menuInfo,categoriesInfo)[categoryID];  
    const currentMenu= categoryHeaderItems.slice(1);
    const menuList = currentMenu.map( (menuItem)=> (
        <MenuListItem  key={menuItem.id} menuItem={menuItem}/>
    ));


        return (
            <div className={styles.menu_items}>
                    <HeaderTags Tag='h2' headerContent={categoryHeaderItems[0]} />
                    <Text textContent={`ITEMS ${menuList.length}`}/>
                    {menuList}
            </div>
        );
    }

 
export default Menu;