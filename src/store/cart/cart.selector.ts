import { createSelector } from "reselect"
import { RootState } from "../store";
import { CartState } from "./cart.reducer";
import { CartItemType } from "./cart.types";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (newCartItems) => newCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (newCartItems) => newCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
)
