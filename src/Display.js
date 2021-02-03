import React from "react"

const Display = (props) => {

    const { names } = props

    //load all names
    const loaded = () => {
        return (
            <div>
                {names.map((name) => {
                    return (
                        <article key={name._id}>
                            <h3>{name.name}</h3>
                            <h4>{name.sign}</h4>
                        </article>
                    )
                })}
            </div>
        )
    }
    const loading = <h3>Loading...</h3>
    return names.length > 0 ? loaded() : loading; 
}

export default Display