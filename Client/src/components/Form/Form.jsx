import { useState } from "react"
import validateInputs from "./validation"
import styles from './Form.module.css'

export default function Form(props){

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;

        setUserData({...userData, [property]: value})
        setErrors(validateInputs(userData))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                <button>LOGIN</button>
            </form>
        </div>
    )
}