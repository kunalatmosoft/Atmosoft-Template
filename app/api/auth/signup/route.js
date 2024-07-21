import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        await dbConnect();

        const { name, email, password } = await request.json();

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return new NextResponse('User already exists', { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name, email, password: hashedPassword });

        const token = jwt.sign({ userId: newUser._id }, process.env.NEXT_PUBLIC_JWT_SECRET, {
            expiresIn: '1h',
        });

        return new NextResponse(JSON.stringify({ token }), { status: 201 });
    } catch (error) {
        console.error('Sign-up error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
