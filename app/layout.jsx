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
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('webnique-theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`,
                    }}
                />
            </head>
            <body className={`${epilogue.variable} antialiased`}>
                <TransitionProvider>
                    {children}
                </TransitionProvider>
            </body>
        </html>
    );
}
