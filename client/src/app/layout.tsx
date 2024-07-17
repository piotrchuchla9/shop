"use client";

import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import favicon from "../../public/favicon.ico";
import Header from './components/header';
import Footer from './components/footer';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Palatto - Meble z Palet</title>
        <link rel="shortcut icon" href={favicon.src} sizes="32x32" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
