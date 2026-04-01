addItemToCart(state, action) =>{
  const { product } = action.payload;

  const existing = state.items.find(
    (i) => i.productId === product.id
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    state.items.push(product);
  }
}