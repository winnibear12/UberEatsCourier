/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourier = /* GraphQL */ `
  subscription OnCreateCourier {
    onCreateCourier {
      id
      name
      sub
      lat
      lng
      TransporationsMode
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourier = /* GraphQL */ `
  subscription OnUpdateCourier {
    onUpdateCourier {
      id
      name
      sub
      lat
      lng
      TransporationsMode
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourier = /* GraphQL */ `
  subscription OnDeleteCourier {
    onDeleteCourier {
      id
      name
      sub
      lat
      lng
      TransporationsMode
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket {
    onCreateBasket {
      id
      BasketDishes {
        items {
          id
          quantity
          basketID
          createdAt
          updatedAt
          basketDishDishId
        }
        nextToken
      }
      userID
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket {
    onUpdateBasket {
      id
      BasketDishes {
        items {
          id
          quantity
          basketID
          createdAt
          updatedAt
          basketDishDishId
        }
        nextToken
      }
      userID
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket {
    onDeleteBasket {
      id
      BasketDishes {
        items {
          id
          quantity
          basketID
          createdAt
          updatedAt
          basketDishDishId
        }
        nextToken
      }
      userID
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrderDish = /* GraphQL */ `
  subscription OnCreateOrderDish {
    onCreateOrderDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      orderID
      createdAt
      updatedAt
      orderDishDishId
    }
  }
`;
export const onUpdateOrderDish = /* GraphQL */ `
  subscription OnUpdateOrderDish {
    onUpdateOrderDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      orderID
      createdAt
      updatedAt
      orderDishDishId
    }
  }
`;
export const onDeleteOrderDish = /* GraphQL */ `
  subscription OnDeleteOrderDish {
    onDeleteOrderDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      orderID
      createdAt
      updatedAt
      orderDishDishId
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userID
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
        }
        Baskets {
          nextToken
        }
        createdAt
        updatedAt
      }
      total
      status
      OrderDish {
        items {
          id
          quantity
          orderID
          createdAt
          updatedAt
          orderDishDishId
        }
        nextToken
      }
      Courier {
        id
        name
        sub
        lat
        lng
        TransporationsMode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      orderRestaurantId
      orderCourierId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userID
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
        }
        Baskets {
          nextToken
        }
        createdAt
        updatedAt
      }
      total
      status
      OrderDish {
        items {
          id
          quantity
          orderID
          createdAt
          updatedAt
          orderDishDishId
        }
        nextToken
      }
      Courier {
        id
        name
        sub
        lat
        lng
        TransporationsMode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      orderRestaurantId
      orderCourierId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userID
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
        }
        Baskets {
          nextToken
        }
        createdAt
        updatedAt
      }
      total
      status
      OrderDish {
        items {
          id
          quantity
          orderID
          createdAt
          updatedAt
          orderDishDishId
        }
        nextToken
      }
      Courier {
        id
        name
        sub
        lat
        lng
        TransporationsMode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      orderRestaurantId
      orderCourierId
    }
  }
`;
export const onCreateBasketDish = /* GraphQL */ `
  subscription OnCreateBasketDish {
    onCreateBasketDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      basketID
      createdAt
      updatedAt
      basketDishDishId
    }
  }
`;
export const onUpdateBasketDish = /* GraphQL */ `
  subscription OnUpdateBasketDish {
    onUpdateBasketDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      basketID
      createdAt
      updatedAt
      basketDishDishId
    }
  }
`;
export const onDeleteBasketDish = /* GraphQL */ `
  subscription OnDeleteBasketDish {
    onDeleteBasketDish {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
      }
      basketID
      createdAt
      updatedAt
      basketDishDishId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      address
      lat
      lng
      Orders {
        items {
          id
          userID
          total
          status
          createdAt
          updatedAt
          orderRestaurantId
          orderCourierId
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      address
      lat
      lng
      Orders {
        items {
          id
          userID
          total
          status
          createdAt
          updatedAt
          orderRestaurantId
          orderCourierId
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      address
      lat
      lng
      Orders {
        items {
          id
          userID
          total
          status
          createdAt
          updatedAt
          orderRestaurantId
          orderCourierId
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        items {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        items {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        items {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
