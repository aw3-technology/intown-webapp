import React from 'react';
import { Navbar } from '../components/custom/navbar';
import { useLocation } from 'react-router';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="h-svh w-full">
      <main className="w-full min-h-full">{children}</main>
      {/* Hide navbar on mobile for home page, always show on desktop */}
      <div className={cn(
        "fixed bottom-4 left-0 right-0 flex items-center justify-center lg:w-auto lg:h-full lg:left-4 lg:right-auto lg:justify-start z-50",
        isHomePage && "hidden lg:flex"
      )}>
        <Navbar />
      </div>
    </div>
  );
};
