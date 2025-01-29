import { createSlice } from '@reduxjs/toolkit';

const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState: {
        isHamburgerOpen: true,
    },
    reducers: {
        toggleHamburger: (state) => {
            state.isHamburgerOpen = !state.isHamburgerOpen;
        },
        hideHamburger: (state) => {
            state.isHamburgerOpen = false;
        },
    },
});
export default hamburgerSlice.reducer;
export const { toggleHamburger, hideHamburger } = hamburgerSlice.actions;