const reducer = (state, action) => {
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((product) => product.id !== action.payload),
    };
  }

  if (action.type === "TOTAL_AMOUNT") {
    let { amount, total } = state.cart.reduce(
      (totalAmount, product) => {
        totalAmount.amount += product.amount;
        totalAmount.total += product.price * product.amount;
        return totalAmount;
      },
      {
        amount: 0,
        total: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }

  if (action.type === "INCREASE") {
    const productAmount = state.cart.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });
    return { ...state, cart: productAmount };
  }

  if (action.type === "DECREASE") {
    const productAmount = state.cart
      .map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: productAmount };
  }
  return state;
};

export default reducer;
