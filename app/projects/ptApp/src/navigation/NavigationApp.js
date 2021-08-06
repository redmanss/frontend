import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { DirectionScreen } from '../screens/DirectionScreen'
import { SearchScreen } from '../screens/SearchScreen'
import { ProductScreen } from '../screens/ProductScreen'
import { CategoryScreen } from '../screens/CategoryScreen'
import { ProductsListScreen } from '../screens/ProductsListScreen'
import { SaleScreen } from '../screens/SaleScreen'

const MainStack = createStackNavigator()
const DirectionScreenStack = createStackNavigator()
const CategoryScreenStack = createStackNavigator()
const ProductsListScreenStack = createStackNavigator()
const SaleScreenStack = createStackNavigator()
const ProductScreenStack = createStackNavigator()
const SearchStack = createStackNavigator()
const TabNavigation = createBottomTabNavigator()

function MainStackScreen() {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerStatusBarHeight: 40,
                headerTransparent: true,
                headerTintColor: '#333',
                headerTitleStyle: { 
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 18,
                },
                headerTitleAlign: 'center',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <MainStack.Screen name='HomeStack' component={HomeScreen} options={{ title: 'Головна', headerShown: false}}/>
            <MainStack.Screen name='DirectionScreenStack' component={DirectionScreen} options={({ route }) => ({ title: route.params.item.name_ua })}/>
            <MainStack.Screen name='CategoryScreenStack' component={CategoryScreen} options={({ route }) => ({ title: route.params.item.name_ua })}/>
            <MainStack.Screen name='ProductsListScreenStack' component={ProductsListScreen} options={({ route }) => ({ title: route.params.item.name_ua })}/>
            <MainStack.Screen name='SaleScreenStack' component={SaleScreen} options={() => ({ title: 'Акційні позиції' })}/>
            <MainStack.Screen name='ProductScreenStack' component={ProductScreen} options={({ route }) => ({ title: route.params.item.name_ua })}/>
        </MainStack.Navigator>
    )
}

function SearchStackSreen() {
    return (
        <SearchStack.Navigator
        screenOptions={{
            headerStatusBarHeight: 40,
            headerTransparent: true,
            headerTintColor: '#333',
            headerTitleStyle: { 
                fontFamily: 'OpenSans-Bold',
                fontSize: 18
            },
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        >
            <SearchStack.Screen name='SearchStack' component={SearchScreen} options={{
                headerShown: false
            }}/>
            <SearchStack.Screen name='ProductScreenStack' component={ProductScreen} options={({ route }) => ({ title: route.params.item.name_ua })}/>
        </SearchStack.Navigator>
    )
}

export const NavigationApp = () => {
    return (
        <NavigationContainer>
            <TabNavigation.Navigator
                  tabBarOptions={{
                    activeTintColor: '#009fe3',
                    inactiveTintColor: '#737c8b',
                    labelStyle: {
                        fontFamily: 'OpenSans-Bold',
                        fontSize: 10,
                        marginBottom: 5,
                    },
                  }}
            >
                <TabNavigation.Screen name='Home' component={MainStackScreen} options={{ 
                    tabBarLabel: 'Головна',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={'home'} size={20} color={color} />
                      )
                    }}/>
                <TabNavigation.Screen name='Search' component={SearchStackSreen} options={{ 
                    tabBarLabel: 'Пошук',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={'md-search'} size={20} color={color} />
                      )
                    }}/>
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabMenu: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 15
    },
})
