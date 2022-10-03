import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('');

  //Lo comentado es lo mismo pero de forma mas larga
    const onInputChange = ({ target }) => { // const onInputChange = (event) => {
        //console.log(target.value) //console.log(event.target.value)
        setInputValue( target.value ); //setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;

        // setCategories( categories =>[ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        // <form onSubmit={(event) => onSubmit(event) }> 
        <form onSubmit={ onSubmit }> 
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange } //onChange={ (event) => onInputChange(event) }
            />
        </form>   
    )
}
