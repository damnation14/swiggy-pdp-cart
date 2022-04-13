import React, {useEffect, useState} from 'react';
import categoryMenuMap from '../helper/mapCategoriesMenu';
import Menu from '../Menu/Menu.js'
import Categories from '../Categories/Categories.js'
import styles from './menuFromCategpry.module.css'
import {INITIAL_CATEGORY} from './constants/initialCategory.js'
function MenuFromCategory({menuInfo,categoriesInfo}) {
    const [category,setCategory]=useState(Object.keys(categoryMenuMap(menuInfo,categoriesInfo))[0])
 
    const highlightCategory=(id)=>{

        document.querySelectorAll(`.${styles.category} ul li`).forEach(element => {
            element.classList.remove(styles.highlighted);
        })
        document.querySelectorAll(`.${styles.category} ul li`).forEach(element => {
            
            if (element.id===id) element.classList.add(styles.highlighted);
        })

    }
    const handleMenuFromCategory= (id) =>{
        setCategory(id);
        highlightCategory(id);
    }

    useEffect(()=>(
        highlightCategory(INITIAL_CATEGORY)
  ),[])
    
   
    return (
        <>
        <div className={styles.category}>
        
            <Categories handleMenuFromCategory={handleMenuFromCategory} categoriesInfo={categoriesInfo}/>
            
        </div>
        <div className={styles.menu}>
            <Menu menuInfo={menuInfo} categoriesInfo={categoriesInfo} categoryID={category} />
        </div>
        </>
    );
}

 
export default MenuFromCategory;