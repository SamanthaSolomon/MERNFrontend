import React from "react"

const Form = (props) => {

    const [formData, setFormData] = React.useState(props.person)
    // console.log("form state-", props.person)

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    // }

    return(
        <div>
            <form>
                <input type="text" name="name"/>
                <select>
                    <option selected value="Aquarious">Aquarious</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Virgo</option>
                    <option value="Scorpio">Sagittarius</option>
                    <option value="Pisces">Pisces</option>
                    <option value="Libra">Libra</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Scorpio">Scorpio</option>
                </select>
                <input type="submit" value={props.label}/>
            </form>
        </div>
    )
}

export default Form