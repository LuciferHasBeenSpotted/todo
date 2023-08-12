import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'TodoList',
    description: 'Gérer des tâches',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body 
                style = {{
                    padding: 0,
                    margin: 0,
                    overflow: 'hidden'
                }}
            >
                {children}
            </body>
    </html>
  );
};