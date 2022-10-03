import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GIfExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    // console.log(categories)

    const onAddCategory = ( newCategory ) => {
      if ( categories.includes(newCategory)) return;
      //console.log(newCategory);
      //categories.push(newCategory);
      //setCategories([ ...categories, 'Valorant' ]); //Una forma de agregar un items.
      //setCategories( cat => [...cat,'Valorant' ]); //Una forma de agregar un items.
      
      setCategories([ newCategory, ...categories ]); //Otra forma de agregar un items pero poniendolo en primer lugar.
    
    }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
          onNewCategory = { (value) => onAddCategory(value)}
        />

          {/* //MAP permite barrer cada uno de los elementos y regresar algo nuevo. */}
          { 
            categories.map( ( category ) => (
              <GifGrid 
                  key={ category } 
                  category={ category } />
            )) 
          } 
    </>
  )
}
