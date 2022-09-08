import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products.pop();
            if(state.quantity>0){
                state.total *= state.quantity
            }
            else{
                state.total = 0
                state.quantity = 0
            }
                        
        }
    }
});

export const {addProduct, removeProduct} = cartSlice.actions
export default cartSlice.reducer