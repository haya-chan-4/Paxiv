import { StatusBar } from 'expo-status-bar';

import { ScreenContent } from '~/app/ScreenContent';

import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
    </>
  );
}
