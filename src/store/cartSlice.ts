import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number | string;
  nome: string;
  descricao?: string;
  foto?: string;
  preco: number;
  porcao?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    
    removeItem: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    decreaseQuantity: (state, action: PayloadAction<number | string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
    
    clearCart: (state) => {
      state.items = [];
    },
    
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    
    openCart: (state) => {
      state.isOpen = true;
    },
    
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

// Actions
export const { 
  addItem, 
  removeItem, 
  decreaseQuantity, 
  clearCart, 
  toggleCart, 
  openCart, 
  closeCart 
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state: any) => state.cart.items;
export const selectCartIsOpen = (state: any) => state.cart.isOpen;
export const selectCartTotal = (state: any) =>
  state.cart.items.reduce((total: number, item: CartItem) => total + item.preco * item.quantity, 0);
export const selectCartItemsCount = (state: any) =>
  state.cart.items.reduce((count: number, item: CartItem) => count + item.quantity, 0);

export default cartSlice.reducer;
