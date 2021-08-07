import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Main  } from './screens'

const RootStack = createStackNavigator({
  Main: Main,
}, {
  mode: 'Modal',
  headerMode: 'none',
})

export default createAppContainer(RootStack)
