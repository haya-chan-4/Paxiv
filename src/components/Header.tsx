/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'

interface Props {
  headerTitle: string
}

const Header = (props: Props): JSX.Element => {
  const { headerTitle } = props

  // const headerTitle = '一覧'
  return (
    <View className={styles.header}>
      <Text className={styles.headerTitle}>{headerTitle}</Text>
    </View>
  )
}
const styles = {
  header: `rounded-md px-1 bg-green-500`,
  headerTitle: `text-white text-3xl p-4 font-bold`
}
export default Header
