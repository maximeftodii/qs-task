import dotenv from 'dotenv';

dotenv.config();

console.log('EMAIL from config:', process.env.EMAIL);
console.log('PASSWORD from config:', process.env.PASSWORD);

export const config = {
    baseUrl: process.env.BASE_URL || '',
    credentials: {
        email: process.env.EMAIL || '',
        password: process.env.PASSWORD || ''
    }
};