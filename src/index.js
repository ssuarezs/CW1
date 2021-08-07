import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Main, AddSe, LookSe } from './screens'

const RootStack = createStackNavigator({
  Main: Main,
  AddSe: AddSe,
  LookSe: LookSe,
}, {
  mode: 'Modal',
  headerMode: 'none',
})

export default createAppContainer(RootStack)
