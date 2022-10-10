import { useRef, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import "react-native-gesture-handler";
import orders from "../../../assets/data/orders.json";
import OrderItem from "../../components/OrderItem";
import MapView, { Marker } from "react-native-maps";
import {Entypo} from "@expo/vector-icons"

const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView
        style={{
          height,
          width,
        }}
       showsUserLocation
       followsUserLocation
      >
        {orders.map((order)=>(
           <Marker
          
           title={order.Restaurant.name}
           description={"order.Restaurant.address"}
           coordinate={{ latitude: order.Restaurant.lat, longitude: order.Restaurant.lng }}
         >
           <View style={{backgroundColor:'green', padding:5, borderRadius:20}}>
          <Entypo name="shop" size={24} color="white" />
          </View>
        </Marker>
        ))}
       
         
      </MapView>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "grey" }}>
            {" "}
            Available Orders:{orders.length}
          </Text>
        </View>
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </BottomSheet>
    </View>
  );
};

export default OrdersScreen;
