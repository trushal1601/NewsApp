// import React from 'react';
// import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
// import FlatListExample from './src/FlatListExample';
// import NewsApiDemo from './src/NewsApiDemo';
// import ZoomImageExample from './src/ZoomImageExample';
// // import ZoomImageExample from './src/ZoomImageExample';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './src/Login';
// import Signup from './src/Signup';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const App = () => {
//   // const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();

//   return (
//     // <View>
//     //   <StatusBar backgroundColor={"green"}/>
//     //   <Text style={styles.textStyle}>hello world</Text>
//     // </View>
//     // <ZoomImageExample />
//     // <FlatListExample />
//     // <NewsApiDemo />
//     // <NavigationContainer>
//     //   <Stack.Navigator initialRouteName="Login">
//     //     <Stack.Screen name="Login" component={Login} />
//     //     <Stack.Screen name="Signup" component={Signup} />
//     //     <Stack.Screen name="NewsApiDemo" component={NewsApiDemo} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Login"
//           component={Login}
//           options={{
//             tabBarIcon: ({focused}) => (
//               <View
//                 style={{
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   top: 1,
//                 }}>
//                 <Image
//                   source={require('./IMG/home1.png')}
//                   resizeMode="contain"
//                   style={{
//                     width: 20,
//                     height: 20,
//                     tintColor: focused ? '#e32f45' : '#748c94',
//                   }}
//                 />
//                 <Text
//                   style={{
//                     color: focused ? '#e32f45' : '#748c94',
//                     fontSize: 12,
//                   }}>
//                   Home
//                 </Text>
//               </View>
//             ),
//           }}
//         />
//         <Tab.Screen name="NewsApiDemo" component={NewsApiDemo} />
//         {/* <Tab.Screen name="Signup" component={Signup} /> */}
//         <Tab.Screen
//           name="Signup"
//           component={Signup}
//           options={{tabBarBadge: 6}}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   textStyle: {
//     color: 'red',
//   },
// });

// export default App;
