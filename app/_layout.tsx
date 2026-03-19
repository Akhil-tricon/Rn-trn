import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import "../global.css"


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
     <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack/>
    </ClerkProvider>
  );
}
