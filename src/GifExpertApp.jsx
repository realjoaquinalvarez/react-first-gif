import { useState } from "react";
import { AddCategory, GifGrid, SplineAnimation } from "./components";


export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState([ 'One Punch' ]);

    // 3- onAddCategory recibe el valor:newCategory por medio de OnNewCategory y lo usa para cargarlo
    // a traves de SetCategories  
    const onAddCategory = (newCategory) => {
        // valorant

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ])
        // (en este punto hemos terminado de cargar la nueva categoria dentro de las categorias)
    }


  return (
    <>
        <h1>GifExpertApp</h1>
                
        <AddCategory 
            // 1- AddCategory es la barra de texto en donde intruducimos 
            // la nueva categoria nueva para actualizar "categorias"

            onNewCategory={ (value) => onAddCategory(value) }    
            // 2- OnNewCategory es la referencia que usaremos dentro de AddCategory
            // Una vez el usuario carga la nueva categoria se llama la funcion onAddCategory
            // onAddCategory esta en el componente Principal
        />
        {
            // 5- Una vez que "categorias" está actualizada, toca recorrer las categorias que
            // hay dentro.

            categories.map( (category) => (
                // Recorremos "categorias" y pasamos cada categoria que hay dentro de "categorias"
                // como referencia del map, para añadirle una key e imprimir cada "category"
                <GifGrid 
                key={ category }
                category={ category }
                />
            ))
            
            // Proceso del componente principal
            /*
                - Renderiza el componente, aparece el titulo <h1>, la barra y las categorias 
                    (Al principio las categorias en total son 1, "One Punch") 
                    ('One Punch' terminó su trabajo al renderizarlo)

                - El usuario escribe una nueva category y toca "Enter" -> Esto devuelve un valor

                - El valor es utilizado para el setCategories. (instantaneamente se vuelve a
                    renderizar el componente al usar useState):
                    *<h1>
                    *Barra (Pero no realiza ninguna acción porque está esperando a que toques enter)
                    *Realiza el categories.map (Y para ese momento "categories" ya tendrá una
                        nueva "categoria")
                
                - categories.map vuelve a recorrer todo "categories" y cada elemento de pasa a
                    GifGrid, este le pone una key y lo agrega al <h3> (Con el nuevo elemento
                    que fue cargado por useState antes de que haga su renderización)
            */
        }           
        
    </>
  )
}



