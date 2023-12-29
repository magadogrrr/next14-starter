import { Inter } from 'next/font/google'

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';



import './globals.css'
import Footer from './ui/footer/Footer'
import Navbar from './ui/navbar/Navbar';



const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Collectors Blog',
  description: 'blog with next & approuter',
}

export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}