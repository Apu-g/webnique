import { Epilogue } from 'next/font/google';
import './globals.css';
import { TransitionProvider } from '@/components/TransitionContext';

const epilogue = Epilogue({
    subsets: ['latin'],
    variable: '--font-epilogue',
});

export const metadata = {
    title: 'Web Application Development Services | Webnique Digital Solutions Private Limited',
    description: 'Get custom web application development services with Webnique Digital Solutions Private Limited. Scalable, secure, and user-friendly apps tailored to your business needs.',
    icons: {
        icon: '/images/logo/favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${epilogue.variable} antialiased`}>
                <TransitionProvider>
                    {children}
                </TransitionProvider>
            </body>
        </html>
    );
}
