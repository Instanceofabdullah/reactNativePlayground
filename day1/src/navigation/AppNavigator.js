import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Insight from "../screens/Insight";
import Profile from "../screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Dummy = () => null;

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name={"Insight"} component={Insight} />
        </Tab.Navigator>
    )
}

export default function AppNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="My App" component={MyTabs} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )

    
}

// export default function test(){
//     return null
// }