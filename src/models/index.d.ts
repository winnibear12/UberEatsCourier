import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum TransportationModes {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING"
}

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PCIKED_UP = "PCIKED_UP",
  COMPLETED = "COMPLETED"
}

















export declare class Courier {
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly TransporationsMode: TransportationModes | keyof typeof TransportationModes;
  constructor(init: ModelInit<Courier>);
  static copyOf(source: Courier, mutator: (draft: MutableModel<Courier>) => MutableModel<Courier> | void): Courier;
}

export declare class Basket {
  readonly id: string;
  readonly BasketDishes?: (BasketDish | null)[] | null;
  readonly userID: string;
  readonly restaurantID: string;
  constructor(init: ModelInit<Basket>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

export declare class BasketDish {
  readonly id: string;
  readonly quantity: number;
  readonly Dish?: Dish | null;
  readonly basketID: string;
  readonly basketDishDishId?: string | null;
  constructor(init: ModelInit<BasketDish>);
  static copyOf(source: BasketDish, mutator: (draft: MutableModel<BasketDish>) => MutableModel<BasketDish> | void): BasketDish;
}

export declare class Dish {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantID: string;
  constructor(init: ModelInit<Dish>);
  static copyOf(source: Dish, mutator: (draft: MutableModel<Dish>) => MutableModel<Dish> | void): Dish;
}

export declare class OrderDish {
  readonly id: string;
  readonly quantity: number;
  readonly Dish?: Dish | null;
  readonly orderID: string;
  readonly orderDishDishId?: string | null;
  constructor(init: ModelInit<OrderDish>);
  static copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish>) => MutableModel<OrderDish> | void): OrderDish;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly Restaurant?: Restaurant | null;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderDish?: (OrderDish | null)[] | null;
  readonly Courier?: Courier | null;
  readonly orderRestaurantId?: string | null;
  readonly orderCourierId?: string | null;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes?: (Dish | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  constructor(init: ModelInit<Restaurant>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly sub: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}