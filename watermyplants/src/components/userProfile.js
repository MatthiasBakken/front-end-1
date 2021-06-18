import React, { useState, useEffect } from 'react'

const userProfileComp = () => {
    return (
    <div>
        <div>
            <div className='userName'>
                <label>User name</label>
                <a>`${username}`</a>
            </div>
            <div className='password'>
                <label>password</label>
                <a>`${password}`</a>
            </div>
            <div className='phoneNumber'>
                <label>Phone number</label>
                <a>`${phoneNumber}`</a>
            </div>
        </div>
        <div>
            <button>complete</button>
            <button>cancel</button>
        </div>
    </div>
    )
}



export default userProfileComp;