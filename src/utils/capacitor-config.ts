import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

export const configureStatusBar = async () => {
  // Only run on native platforms
  if (!Capacitor.isNativePlatform()) {
    return;
  }

  try {
    // Set status bar to dark style (light text on dark background)
    await StatusBar.setStyle({ style: Style.Dark });

    // Set dark background color for status bar
    await StatusBar.setBackgroundColor({ color: '#0b0b0b' });

    // Optional: Hide status bar if needed
    // await StatusBar.hide();

    console.log('Status bar configured for dark mode');
  } catch (error) {
    console.error('Error configuring status bar:', error);
  }
};