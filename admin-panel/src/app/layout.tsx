import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';

export const metadata = {
  title: 'Welcome to admin-panel',
  description: 'Generated by create-nx-workspace',
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
