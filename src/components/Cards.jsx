import { useFetchImages } from '../hooks/useFetchImages'
import Card from './Card'
import FormSearch from './FormSearch'
import Loading from './Loading'
import { useCallback, useEffect } from 'react'

const Cards = () => {
    
    const [image,  loading, handleSubmit, input] = useFetchImages()
    const GenerateImages = useCallback(
        () => {
            const images = image.map((image) => {
                return (
                 <div className='col'>
                    <Card key={image.id} alt={image.alt_description} img={image.urls.regular}/> 
                 </div>
                )
            })
            return images
        },
        [image],
    )

    const Error = () => {
        return (
            <h1>There are no matching results with "{input}"</h1>
        )
    }

    useEffect(() => {
        GenerateImages()
        return () => {
            
        }
    }, [GenerateImages, image])

    console.log(image.length)
    return (
        <div className='text-center'>
        <FormSearch handleSubmit={handleSubmit}/>
        {loading && <Loading />}
        <div className='row'>
        {
            image.length < 1 ? <Error /> : <GenerateImages />
        }
        </div>
        </div>
    )
}

export default Cards
