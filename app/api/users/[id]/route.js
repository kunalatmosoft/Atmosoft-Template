// app/api/users/[id]/route.js
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import authMiddleware from '@/middleware/auth';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    await dbConnect();

    const { id } = params;

    if (request.userId !== id) {
        return new NextResponse('Forbidden', { status: 403 });
    }

    const user = await User.findById(id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
}

export async function PUT(request, { params }) {
    await dbConnect();

    const { id } = params;
    const { name, email, password } = await request.json();
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

    const updatedUser = await User.findByIdAndUpdate(
        id,
        {
            name,
            email,
            ...(password && { password: hashedPassword }),
        },
        { new: true }
    );

    return new NextResponse(JSON.stringify(updatedUser), { status: 200 });
}

export const middleware = authMiddleware;
