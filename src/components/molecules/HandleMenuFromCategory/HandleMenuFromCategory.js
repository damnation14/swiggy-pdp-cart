import React, {useEffect, useState} from 'react';
import categoryMenuMap from '../helper/mapCategoriesMenu';
import Menu from '../Menu/Menu.js'
import Categories from '../Categories/Categories.js'
import styles from './handleMenuFromCategpry.module.css'
function CategoryMenu() {
    const [category,setCategory]=useState(Object.keys(categoryMenuMap())[0])
    
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
        highlightCategory("recommended")
  ),[])
    
   
    return (
        <>
        <div className={styles.category}>
        
            <Categories handleMenuFromCategory={handleMenuFromCategory}/>
            
        </div>
        <div className={styles.menu}>
            <Menu categoryID={category} />
        </div>
        </>
    );
}

 
export default CategoryMenu;