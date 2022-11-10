import React from 'react'
import Faq from './Blog';
const blogs = [
    {
        id: 1,
        que: 'What is the difference between SQL and NoSql database?',
        ans: 'Queries in NoSQL databases can be faster than SQL databases. Why? Data in SQL databases is typically normalized, so queries for a single object or entity require you to join data from multiple tables.SQL is primarily used to query and operate database systems, MySQL enables you to store, handle, delete, and modify data in an organized way. As for NoSQL, it is a non-relational database that does not use SQL.'
    },
    {
        id: 2,
        que: 'What is JWT, and how does it work?',
        ans: 'JWT stands for jsonwebtoken basically a npm package.s an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity ProviderWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasnt been tampered with.',
    },
    {
        id:3,
        que:'What is the difference between javascript and NodeJS? ',
        ans: 'NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. It is basically used on the client-side.'
    },
    {
        id:4,
        que: 'How does NodeJS handle multiple requests at the same time?',
        ans: 'Nodejs is a event driven runtime. it can perform multitask at a time although it is single threaded.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.'
    }

]

const Blogs = () => {
    return (
        <div className='bg-[#fef8f8] w-full dark:bg-[#00052b] text-white'>
            <div className='container flex items-center justify-center h-[89vh]'>
                <div className='md:w-1/2 p-5 bg-white dark:bg-[#00000083] shadow mx-auto rounded'>
                    {
                        blogs.map(blog => <Faq key={blog.id} {...blog} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs;