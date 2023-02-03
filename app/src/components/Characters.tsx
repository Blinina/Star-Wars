import { useEffect, useState } from "react"
import axios from "axios"
import e from "express"

export const Characters = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get("https://swapi.dev/api/people")
            const { data } = res
            if (!data) {
                setError(true)
                return
            }
            setItems(data.results)
            console.log(data.results)
        }
        getProduct()
    }, [])
    return (
        <div>
            <div></div>
            <div>
                <h2>60 Peoples for you to choose your favorite</h2>
            </div>
            <div>
                {items.map((el) => {
                    <div>{el.name}</div>
                })}
            </div>
        </div>
    )
}