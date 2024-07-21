/* "use client"
// pages/login.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', data.token);
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    ); 
}*/



import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const Notifications = () => {
  return (
    <>
    <Navbar/>
    <p className='text-4xl font-semibold font-sans m-3'>Notifications🔔</p>
    <Footer/>
    </>
  )
}

export default Notifications 