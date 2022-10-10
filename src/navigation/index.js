import {createNativeStackNavigator} from "@react-navigation/native-stack"
import OrdersScreen from '../screens/OrdersScreen';
import OrderDeliveryScreen from "../screens/OrderDelivery";
import { ScreenStackHeaderLeftView } from "react-native-screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = "OrderScreen" component={OrdersScreen} />
        <Stack.Screen name = "OrderDeliveryScreen" component={OrderDeliveryScreen}/>
    </Stack.Navigator>
    );
};

export default Navigation;