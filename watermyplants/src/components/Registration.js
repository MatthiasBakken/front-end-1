import React, { useState } from 'react';

const Registration = () => {
    const [form, setForm] = useState({
        username: "",
        "phone number": "",
        password: "",
        "repeat password": ""
    });

    return (
        <>
            <form>
                <label>
                    <input  
                        name="username"
                        value={form.username}
                    />
                </label>
                <label>
                    <input 
                        name="phone number"
                        value={form["phone number"]}
                    />
                </label>
                <label>
                    <input 
                        name="password"
                        value={form.password}
                    />
                </label>
                <label>
                    <input 
                        name="repeat password"
                        value={form["repeat password"]}
                    />
                </label>
            </form>
        </>
    )
}

export default Registration;