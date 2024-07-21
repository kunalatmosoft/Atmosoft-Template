// app/api/users/me/route.js
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import authMiddleware from '@/middleware/auth';
import { NextResponse } from 'next/server';

// Apply middleware to handle authentication
export async function GET(request) {
    // Attach the middleware to ensure user authentication
    const { userId } = await authMiddleware(request);

    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    await dbConnect();

    try {
        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse('User not found', { status: 404 });
        }
        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
