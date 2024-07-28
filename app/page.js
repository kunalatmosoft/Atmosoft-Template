"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"

import BootAnimation from '@/components/BootAnimation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Signup from "@/components/Signup" // Adjust the path as necessary

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showBootAnimation,setShowAnimation]= useState(true);

  const handleAnimationEnd = () =>{
    setShowAnimation(false);
  };
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      {showBootAnimation ? (
        <BootAnimation OnAnimationEnd={handleAnimationEnd}/>
      ):(
      <><div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <p className='text-4xl text-blue-800 font-sans font-semibold '>Atmosoft&trade;👋</p>
              {showSignup ? (
                <Signup setShowSignup={setShowSignup} />
              ) : (
                <>
                  <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-balance text-muted-foreground">
                      Enter your email below to login to your account
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link
                          href="/forgot-password"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                    <Link href="/Home"><Button type="submit" className="w-full">
                      Login
                    </Button></Link>
                    <Button variant="outline" className="w-full">
                      Login with Google
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="underline" onClick={() => setShowSignup(true)}>
                      Sign up
                    </a>
                  </div>
                </>
              )}
            </div>
          </div><div className="hidden bg-muted lg:block">
              <Image
                src="/avatar.png"
                alt="Atmosoft-avatar"
                width="520"
                height="480"
                className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
            </div></>
      )}
    </div>
  )
}

export default Login
// pages/index.js
/* import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    return (
        <div>
            <h1>Welcome to the Main Page</h1>
            <button onClick={() => router.push('/Settings')}>Go to Settings</button>
        </div>
    );
}
 */