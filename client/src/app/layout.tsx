"use client";

import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import favicon from "../../public/favicon.ico";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Paleteo - Meble z Palet</title>
        <link rel="shortcut icon" href={favicon.src} sizes="32x32" />
      </head>
      <body className="bg-shop-background bg-cover bg-center max-w-[1920px] mx-auto">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
