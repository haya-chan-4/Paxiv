/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native'

interface Props {

}

const Header = (props: Props): JSX.Element => {
  const {} = props

  const headerTitle = '一覧'
  return (
    <View className={styles.header}>
      <Text>{headerTitle}</Text>
    </View>
  )
}
const styles = {
  header: `rounded-md px-1 bg-green-500 `
}
export default Header
