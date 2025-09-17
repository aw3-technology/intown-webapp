import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ios.intown',
  appName: 'InTown',
  webDir: 'dist',
  server: {
    url: 'https://app.intown.guide',
    cleartext: false
  },
  ios: {
    contentInset: 'never',
    backgroundColor: '#000000'
  }
};

export default config;