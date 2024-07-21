/* "use client"
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signup', { name, email, password });
            console.log('Signup successful:', response.data);
            // Handle successful signup (e.g., redirect to a different page)
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setError('User already exists');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Signup; */

 import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const Profile = () => {
  return (
    <>
    <Navbar/>
    <p className='text-3xl font-sans font-semibold m-3'>Profile🪴</p>
    <Footer/>
    </>
  )
}

export default Profile 