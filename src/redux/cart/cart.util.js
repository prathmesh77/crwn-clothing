export const addItemToCart = (cartItems, cartItemToAdd) => {
    const checkExistingItem = cartItems.find(
        item => item.id === cartItemToAdd.id
    );

    //if item exist increment their count
    if (checkExistingItem) {
        return cartItems.map(
            item => item.id === cartItemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }

    //otherwise add item to cartItem 
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItem, cartItemToRemove) => {
    const checkExistingItem = cartItem.find(
        item => item.id === cartItemToRemove.id
    );

    if (checkExistingItem.quantity === 1) {
        return cartItem.filter(item => item.id !== cartItemToRemove.id);
    }
    return cartItem.map(
        item => item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
}