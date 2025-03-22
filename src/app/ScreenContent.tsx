import { View } from 'react-native'

import Header from '~/components/Header'

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({  path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Header headerTitle="一覧" />
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center bg-gray-600`,
};
