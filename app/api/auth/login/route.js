// app/api/auth/login/route.js

import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request) {
    await dbConnect();

    const { email, password } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
        return new NextResponse('Invalid email or password', { status: 401 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return new NextResponse('Invalid email or password', { status: 401 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.NEXT_PUBLIC_JWT_SECRET, {
        expiresIn: '1h',
    });

    return new NextResponse(JSON.stringify({ token }), { status: 200 });
}
