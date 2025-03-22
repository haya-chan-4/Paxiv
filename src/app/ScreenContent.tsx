import { View } from 'react-native'

import Header from '~/components/Header'

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Header />
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center bg-gray-600`,
  separator: `h-[1px] my-7 w-4/5 bg-green-500`,
  title: `text-xl font-bold`,
};
