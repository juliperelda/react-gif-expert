import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );
  
    return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> ) //if corto. si isloading esta en true lo hace sino no
        }
        

        <div className="card-grid">
          {
            images.map(( image ) => (
              <GifItem 
              key={ image.id }
              { ...image}
              />
            ))
          }
        </div>

    </>
  )
}