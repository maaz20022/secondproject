import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: ""

    });
    //handle input
    const handleChange = (event) => {
        let name = event.target.name;

        let value = event.target.value;
        setUser({ ...user, [name]: value })
    }
    //handle submit

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = user;
        try {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })


            })
            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("invalid credentials")
            } else {
                window.alert("Login Successfull!")
                window.location.reload();
                history.pust("/");
            }
        } catch (error) {
            console.log(error)
        }
    }









    return (
        <>
            <div className='container'>
                <form method='POST' onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                            name="email" value={user.email} onChange={handleChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                            name="password" value={user.password} onChange={handleChange} />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>

        </>
    )
}

export default Login;
