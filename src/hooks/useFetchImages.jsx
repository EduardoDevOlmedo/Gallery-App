import  {useState, useEffect, useCallback} from 'react'


export const useFetchImages = () => {
    const [image, setImage] = useState([])
    const [input, setInput] = useState("")        
    const [loading, setLoading] = useState(true)

   const getData = useCallback(
       async() => {

        const KEY = "client_id=g3fxC7bC0Qysmfi3C2oum5-oaTdwS1w1oCizmmhoXaE"
        let route = `https://api.unsplash.com/photos?${KEY}`

        if(input !== ""){
            route = `https://api.unsplash.com/search/photos/?query=${input}&per_page=10&${KEY}`
        }

        setLoading(true)
        let res = await fetch(route)
        const data = await(res.json())

        if(data.results){
            setImage(data.results)
        } else {
            setImage(data)
        }
        setLoading(false)

    }, [input])

    useEffect(() => {      
         getData()
        return () => {
        }
    }, [getData])

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = e.target[0].value
        setInput(text)
        setTimeout(() => {
            e.target.reset()
        }, 200)
    }

    return [image, loading, handleSubmit, input]
}

