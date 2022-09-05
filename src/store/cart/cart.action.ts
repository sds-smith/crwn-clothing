import { createAction, withMatcher, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES, CartItemType } from "./cart.types";
import { CategoryItemType } from '../categories/category.types';

const addCartItem = (cartItems: CartItemType[], productToAdd: CategoryItemType): CartItemType[] => {    
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity! + 1}
        : cartItem
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems: CartItemType[], cartItemToRemove: CartItemType): CartItemType[] => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )   
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) 
    }
    return cartItems.map((cartItem) => 
    cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity! - 1}
    : cartItem
    )
}

const clearCartItem = (cartItems: CartItemType[], cartItemToClear: CartItemType): CartItemType[] => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id) 
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItemType[]>

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
})

export const setCartItems = withMatcher((cartItems: CartItemType[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))


export const addItemToCart = (cartItems: CartItemType[], productToAdd: CategoryItemType) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return setCartItems(newCartItems)
}
export const removeItemFromCart = (cartItems: CartItemType[], cartItemToRemove: CartItemType) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return setCartItems(newCartItems)
}
export const clearItemFromCart = (cartItems: CartItemType[], cartItemToClear: CartItemType) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return setCartItems(newCartItems)
}

export const resetCart = () => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, [])
}