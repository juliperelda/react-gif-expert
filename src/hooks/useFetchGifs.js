import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGIfs';

export const useFetchGifs = ( category ) => { //Un hooks en una funcion que devuelve algo
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }
  
    // USEEFFECT SE UTILIZA PARA QUE EL COMPONENETE SE RENDERICE UNA SOLA VEZ
    useEffect( () => { // para que no se dispare la peticion cada vez que resolvemos.
      getImages();
    }, []) // arreglo de dendencias .

    return{
        images,
        isLoading
    }
}
