import React, { useEffect } from 'react'
import type { AppProps } from 'next/app';
import { Config } from '@/configuration/config.types';
import { useRouter } from "next/router";
import '../styles/globals.css';
import NavigationBar from '@/components/navBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FilterProvider } from '@/hooks/useFilter';

export default function App({Component,pageProps}:AppProps<Config>) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3b82f6', // Tailwind's blue-500
      },
      secondary: {
        main: '#f43f5e', // Tailwind's rose-500
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  })

  const router = useRouter();
  
  useEffect(() => {
    router.push("/portfolio");
  }, []);

  return (
    <>
    <FilterProvider>
    <ThemeProvider theme={theme} />
    <CssBaseline />
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen font-mono antialiased">
    <NavigationBar />
    <Component {...pageProps}/>
    </div>
    </FilterProvider>
    </>
  )
}
