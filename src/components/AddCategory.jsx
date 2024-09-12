import { useState } from 'react'
import PropTypes from 'prop-types'


// Como mencioné, este componente unicamente es la barra de escritura

// La persona deberá escribir y una vez toque Enter (onSubmit), deberá devolver el valor cargado
// a la función OnNewCategory que está dentro del componente principal GifExpertApp
export const AddCategory = ( { onNewCategory} ) => {

    // 4- Se llama el useState y este le asigna un nuevo valor al inputValue, para
    // luego re-renderizar el compomente 
    // (Una vez renderizado inputValue tendrá un nuevo valor, este valor se asigna a "value"
    // dentro del form)
    const [ inputValue, setInputValue ] = useState('One punch')

    // 3- Recibimos los cambios del form, desestructuramos el target para conseguir el valor
    // COMPLETO del formulario (no la letra)
    const onInputChange = ({ target }) => {
        setInputValue( target.value )
        // Al conseguir su valor llamamos el useState
    }


    // 5- Cuando la perosna toca "enter", llama onSubmit
    // onSubmit devuelve la nueva categoria agregada hacia el componente prinicipal 
    // (por medio de onNewCategory)

    const onSubmit = (event) => {
        event.preventDefault();
        // Evita recargar la pagina
        if( inputValue.trim().length <= 1 ) return;
        // elimina espacios y verifica si hay caracteres suficientes

        // setCategories( categories => [ ...categories, inputValue ] )
        onNewCategory( inputValue.trim() )
        setInputValue('')
        // Pone el form en blanco una vez enviado
    }

    // 1- Lo primero es tener un form, (esto es lo unico que se muestra) 
    // Una vez tenemos el form enfocaremos la logica unicamente en pasar el valor al
    // tocar "Enter" (onSubmit)

  return (

    <form onSubmit={ onSubmit } aria-label="form">
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue } /* El valor que se mostrará en el form es inputValue, este es 
            enviado mediante el useState */

            //Proceso:
            /*
                - Al principio el valor del "form" y "value" es: 'a'
                - Al tocar una letra, ej 'b', el form se modifica
                    (onChange) 
                - Se llama onInputChange
                - Desestructuramos el target
                - Extraemos el texto COMPLETO del form
                - llamamos el useState y cargamos el nuevo inputValue(luego re-renderiza)
                - en esta nueva "inputValue" otorga un nuevo valor a value. 
                - Una vez cumplido todo esto podemos modificar el texto del form

            */

            // 2- Se le envia la informacion de los cambios en el form (letra por letra)
            onChange={ onInputChange } // Cuando hay un cambio en el form se llama onInputChange

    
        />
    </form>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}