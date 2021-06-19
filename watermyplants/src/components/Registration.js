import React, { useState } from 'react';
import styled from 'styled-components';

const Registration = () => {
    const [form, setForm] = useState({
        username: "",
        "phone number": "",
        password: "",
        "repeat password": ""
    });

    const StyledForm = styled.form`
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    `;

    const StyledButton = styled.button`
        width: 30%;
        height: 3rem;
        margin-top: 3rem;
        margin-left: 37%;
    `;

    return (
        <div>
            <p> 
                <strong>Welcome to Water My Plants!</strong> 
                <br /> 
                <i>Create your account here!</i> 
            </p>
            <StyledForm>
                    <label>
                        Username:
                        <input  
                            name="username"
                            value={form.username}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input 
                            name="phone number"
                            value={form["phone number"]}
                        />
                    </label>
                    <label>
                        Password: 
                        <input 
                            name="password"
                            value={form.password}
                        />
                    </label>
                    <label>
                        Repeat Password:
                        <input 
                            name="repeat password"
                            value={form["repeat password"]}
                        />
                    </label>
                    <StyledButton>Complete</StyledButton>
            </StyledForm>
           
        </div>
    )
}

export default Registration;