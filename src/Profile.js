import React from "react"
import Form from "./Form"

const Profile = (props) => {

const { selectName } = props

const url = "https://desolate-wave-73350.herokuapp.com/"
//Get data by sign
const [sign, setSign] = React.useState({})

//Get all function
const getSign = (props) => {
    console.log("selectName-", selectName)
  fetch(url + "sign/" + selectName.sign)
  .then((response) => response.json())
  .then((data) => {
      console.log('data-', data)
    setSign(data[0])
  })
}
//Get data once
React.useEffect(() => {
  getSign()
}, [])

console.log('props-', props)
// console.log('selectName-', selectName)

console.log ("sign-", sign)
    return(
        <div>
            <h2>{selectName.name}</h2>
            <h3>{sign.sign}</h3>
            <img src={sign.img} alt={sign.sign} />
            <p>{sign.traits}</p>
        </div>
    )
}

export default Profile