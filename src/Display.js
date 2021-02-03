import React from "react"
import { Route, Link, Switch } from "react-router-dom";
import Profile from "./Profile"

const Display = (props) => {

    const { names } = props

    //load all names
    const loaded = () => {
        return (
            <div>
                {names.map((name) => {
                    return (
                        <article key={name._id}>
                            <button onClick={()=> {
                                props.chooseName(name)
                                props.history.push("/profile")
                            }}>{name.name}</button>
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