// pages/settings.js
"use client"
/* import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Settings() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const router = useRouter();

    useEffect(() => {
      const fetchUser = async () => {
          const token = localStorage.getItem('token');
          if (!token) {
              router.push('/login');
              return;
          }
          try {
              const { data } = await axios.get('/api/users/me', {
                  headers: { Authorization: `Bearer ${token}` },
              });
  
              if (data) {
                  setName(data.name || ''); // Handle cases where data.name might be undefined
                  setEmail(data.email || ''); // Handle cases where data.email might be undefined
                  setUserId(data._id || ''); // Handle cases where data._id might be undefined
              } else {
                  console.error('No user data received');
                  router.push('/login');
              }
          } catch (error) {
              console.error('Error fetching user:', error);
              router.push('/login');
          }
      };
      fetchUser();
  }, [router]);
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.put(
                `/api/users/${userId}`, // Use the user ID from state
                { name, email, password },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            alert('Profile updated successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
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
                    placeholder="New Password"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
 */

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

import { Input } from "@/components/ui/input"


export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
<Navbar/>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Name</CardTitle>
                <CardDescription>
                  User Name
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Name" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
                <CardDescription>
                  The directory within your Environment, in which your plugins are
                  Hobbies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    placeholder="Project Name"
                    defaultValue="Hobbies"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Allow administrators to change the directory.
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button><Link href="/Home">Home</Link></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 

/* const Settings = () => {
  return (
    <>
    <Navbar/>
    <p className='text-2xl'>Settings</p>
    <ul className='mx-5 '>
      <li className='cursor-pointer hover:underline'>
        Account
      </li>
      <li className='cursor-pointer hover:underline'>
        hobbies
      </li>
      <li className='cursor-pointer hover:underline'>
        Mode
      </li>
      <Link href="/"><li className='cursor-pointer hover:underline'>
        Logout
      </li></Link>
    </ul>
    <br/><br/><br/>
    <Footer/>
    </>
  )
}

export default Settings */