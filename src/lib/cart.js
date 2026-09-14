/** Cart-Key: Kategorie + Name, damit gleiche Namen in zwei Kategorien getrennt bleiben. */
export function cartKey(cat, name) {
  return `${cat}|||${name}`;
}

export function cartReducer(cart, action) {
  switch (action.type) {
    case 'add': {
      const { cat, name, price } = action;
      const key = cartKey(cat, name);
      const existing = cart[key];
      return { ...cart, [key]: { cat, name, price, qty: (existing?.qty ?? 0) + 1 } };
    }
    case 'change': {
      const item = cart[action.key];
      if (!item) return cart;
      const qty = item.qty + action.delta;
      if (qty <= 0) {
        const { [action.key]: _removed, ...rest } = cart;
        return rest;
      }
      return { ...cart, [action.key]: { ...item, qty } };
    }
    default:
      return cart;
  }
}

export function cartTotal(cart) {
  return Object.values(cart).reduce((sum, i) => sum + i.price * i.qty, 0);
}

export function cartCount(cart) {
  return Object.values(cart).reduce((sum, i) => sum + i.qty, 0);
}
