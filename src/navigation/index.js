import {createNativeStackNavigator} from "@react-navigation/native-stack"
import OrdersScreen from '../screens/OrdersScreen';
import OrdersDeliveryScreen from "../screens/OrderDelivery"
import { ScreenStackHeaderLeftView } from "react-native-screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = "OrderScreen" component={OrdersScreen} />
        <Stack.Screen name = "OrdersDeliveryScreen" component={OrdersDeliveryScreen}/>
    </Stack.Navigator>
    );
};

export default Navigation;