import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Button, Pressable, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonActions, useNavigation } from '@react-navigation/native'

const Tabs = createBottomTabNavigator();

export default function Home() {
const navigation = useNavigation();

  const tabOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#FF6C00",
    tabBarInactiveTintColor: "#212121",
    tabBarStyle: { height: 83, backgroundColor: "#fff" },
    headerAlign:"center",
    headerTitleStyle: { fontSize: 17 },
    headerTitleAlign: "center",
  };

  return (
    <>
      <Tabs.Navigator initialRouteName="Posts">
        <Tabs.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            ...tabOptions,
            title: "Публікації",
            headerRight: () => (
              <TouchableOpacity>
                <Feather
                style={styles.logoutIcon}
                name={"log-out"}
                size={24}
                  color={"#BDBDBD"}
                  onPress={()=> {navigation.dispatch(CommonActions.navigate({  name: 'Login' }))}}
              ></Feather>
              </TouchableOpacity>
            ),
            tabBarIcon: ({ color, size }) => (
              <Feather name={"grid"} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          color={"#FFF"}
          options={{
            ...tabOptions,
            title: "Створити публікацію",
            headerLeft: () => (
              <TouchableOpacity onPress={() => { navigation.dispatch(CommonActions.navigate({  name: 'Posts' }))}}>
                <Feather
                style={styles.arrowLeftIcon}
                name={"arrow-left"}
                size={24}
                color={"#212121"}
              ></Feather>
              </TouchableOpacity>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <View style={styles.iconContainer}>
                <Ionicons name={"add"} size={24} color={"#fff"} />
              </View>
            ),
            tabBarStyle: { display: 'none' }
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            ...tabOptions,
            headerShown: false,
            
            tabBarIcon: ({ color, size }) => (
              <Feather name={"user"} size={24} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  logoutIcon: {
    marginRight: 10,
  },
  arrowLeftIcon: {
    marginLeft: 10
  }
});
