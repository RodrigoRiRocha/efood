import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface DeliveryData {
  receiver: string;
  address: {
    description: string;
    city: string;
    zipCode: string;
    number: number;
    complement?: string;
  };
}

export interface PaymentData {
  card: {
    name: string;
    number: string;
    code: number;
    expires: {
      month: number;
      year: number;
    };
  };
}

interface CheckoutState {
  delivery: DeliveryData | null;
  payment: PaymentData | null;
  orderId: string | null;
  isCheckoutOpen: boolean;
  currentStep: 'cart' | 'delivery' | 'payment' | 'confirmation';
}

const initialState: CheckoutState = {
  delivery: null,
  payment: null,
  orderId: null,
  isCheckoutOpen: false,
  currentStep: 'cart',
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.delivery = action.payload;
    },
    
    setPaymentData: (state, action: PayloadAction<PaymentData>) => {
      state.payment = action.payload;
    },
    
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },
    
    setCurrentStep: (state, action: PayloadAction<CheckoutState['currentStep']>) => {
      state.currentStep = action.payload;
    },
    
    openCheckout: (state) => {
      state.isCheckoutOpen = true;
      state.currentStep = 'delivery';
    },
    
    closeCheckout: (state) => {
      state.isCheckoutOpen = false;
      state.currentStep = 'cart';
    },
    
    resetCheckout: (state) => {
      state.delivery = null;
      state.payment = null;
      state.orderId = null;
      state.isCheckoutOpen = false;
      state.currentStep = 'cart';
    },
  },
});

export const {
  setDeliveryData,
  setPaymentData,
  setOrderId,
  setCurrentStep,
  openCheckout,
  closeCheckout,
  resetCheckout,
} = checkoutSlice.actions;

// Selectors
export const selectDelivery = (state: any) => state.checkout.delivery;
export const selectPayment = (state: any) => state.checkout.payment;
export const selectOrderId = (state: any) => state.checkout.orderId;
export const selectIsCheckoutOpen = (state: any) => state.checkout.isCheckoutOpen;
export const selectCurrentStep = (state: any) => state.checkout.currentStep;

export default checkoutSlice.reducer;
