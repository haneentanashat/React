import React from 'react'
import { useState } from 'react'

const UseForm = (Email, Password) => {
    const [email, setEmail] = useState('haneen@gmail.com');
    const [password, SetPassword] = useState('123456');
    const [data, setSataus] = useState('');
    const LoginCheck = () => {
        Email= email && Password== password ? setSataus('logged in successfully') : setSataus('login failed')

        // if (Email == email && Password == password) {
        //     setSataus('logged in successfully');
        //   }
        //   else {
        //     setSataus('login failed');
        //   }
        }
        return { data, LoginCheck };

    }
    export default UseForm
