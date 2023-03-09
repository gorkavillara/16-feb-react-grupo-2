import React from "react"
import { useParams, useSearchParams } from "react-router-dom"

const UserDetails = () => {
    const { id } = useParams<{ id: string }>()
    const [searchParams] = useSearchParams()
    console.log(id)
    console.log(searchParams.get("edad"))
    return <div>Detalles del usuario {id}</div>
}

export default UserDetails
