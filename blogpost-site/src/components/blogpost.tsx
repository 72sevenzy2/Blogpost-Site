import React, { type JSX } from 'react';


export const Blogpost = (): JSX.Element => {

    return (
        <div>
            <div className='nav1_wrapper'>
                <h1 className='nav1_header'>Blog Template</h1>
                <button className='adminButton'>Admin Login</button>
            </div>
            <div className='headers_container'>
                <h1 className='main_header'>A platform where your voices<br></br>
                    deserve to be heard.</h1>
                <h3 className='second_header'>This is your space to think out loud, to share what
                    matters, and to write without filters. Whether<br></br> it's one word or a thousand,
                    your story starts right here.</h3>
            </div>
            <form className='form_wrapper'>
                <input type="text" placeholder='Search a post' className='input_field' />
                <button type='submit' className='input_button'>Search</button>
            </form>
        </div>
    )
}

export default Blogpost