import {GestureHandlerRootView} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import orders from "./assets/data/orders.json";
import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

const order = orders[0];

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex:1}}>
        <Navigation />
        </GestureHandlerRootView>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}


