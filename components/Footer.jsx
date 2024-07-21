import React from 'react'
import {
  CircleFadingPlus,
  Home,
  Bell,
  Mail,
  Bookmark,
  Telescope,
} from "lucide-react";
import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex items-center justify-between">
        <Link href='/Home'><Home className="w-6 h-6 text-gray-900 hover:text-teal-700 cursor-pointer" /></Link>
        <Link href="/Notification"><Bell className="w-6 h-6 text-gray-900 hover:text-teal-700 cursor-pointer" /></Link>
        <Link href="/Upload"><CircleFadingPlus className="w-6 h-6 text-gray-900 hover:text-teal-700 cursor-pointer" /></Link>
        <Link href="Explore"><Telescope className="w-6 h-6 text-gray-900 hover:text-teal-700 cursor-pointer" /></Link>
        <Link href="Messages"><Mail className="w-6 h-6 text-gray-900 hover:text-teal-700 cursor-pointer"/></Link>
      </footer>
    </>
  )
}

export default Footer