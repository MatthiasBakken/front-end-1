import React, { useState } from 'react';

const Registration = () => {
    const [form, setForm] = useState({
        username: "",
        "phone number": "",
        password: "",
        "repeat password": ""
    });

    return (
        <div>
            <p>Welcome to Water My Plants! <br /> Create your account here!</p>
            <form>
                <label>
                    Username
                    <input  
                        name="username"
                        value={form.username}
                    />
                </label>
                <label>
                    Phone Number
                    <input 
                        name="phone number"
                        value={form["phone number"]}
                    />
                </label>
                <label>
                    Password 
                    <input 
                        name="password"
                        value={form.password}
                    />
                </label>
                <label>
                    Repeat Password
                    <input 
                        name="repeat password"
                        value={form["repeat password"]}
                    />
                </label>
                <button>Complete</button>
            </form>
        </div>
    )
}

export default Registration;