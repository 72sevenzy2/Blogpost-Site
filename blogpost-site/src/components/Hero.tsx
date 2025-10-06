import React, { useState, type JSX } from 'react';

export const Blogpost = (): JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [blogs, setBlogs] = useState<{ header: string; desc: string }[]>([]);
    const newBlog = (cont_header: string, cont_desc: string) => {
        setBlogs(prev => [...prev, { header: cont_header, desc: cont_desc }]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newBlog(searchValue, 'asciacaicbe');
    };

    return (
        <div>
         

            <div className='headers_container'>
                <h1 className='main_header'>
                    A platform where your voices<br />
                    deserve to be heard.
                </h1>
                <h3 className='second_header'>
                    This is your space to think out loud, to share what matters, and to
                    write without filters. Whether<br />
                    it's one word or a thousand, your story starts right here.
                </h3>
            </div>

            <form className='form_wrapper' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Create a post'
                    className='input_field'
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button type='submit' className='input_button'>
                    Create
                </button>
            </form>

            <div className='blogs_container'>
                {blogs.map((blog, index) => (
                    <div key={index} className='blog'>
                        <h1>{blog.header}</h1>
                        <p>{blog.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogpost;