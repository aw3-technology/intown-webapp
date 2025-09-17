import { AppSidebar } from '@/components/custom/app-sidebar';
import { BackToApp } from '@/components/custom/back-to-app';
import React from 'react';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-settings-background">
      <AppSidebar />
      <div className="flex flex-col w-full">
        <BackToApp />
        <main className="flex flex-col max-w-[752px] mx-auto w-full px-4 py-14 lg:py-16">
          {children}
        </main>
      </div>
    </div>
  );
};
