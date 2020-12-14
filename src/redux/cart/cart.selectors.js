import { createSelector } from 'reselect';

const selectCart = state=>state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    items =>
        items.reduce((accumlator, item) =>
            accumlator + item.quantity, 0
        )
);

export const cartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    items =>
        items.reduce((accumlator, item) =>
            accumlator + item.quantity * item.price, 0
        )
)