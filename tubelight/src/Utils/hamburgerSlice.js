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
    },
});
export default hamburgerSlice.reducer;
export const { toggleHamburger } = hamburgerSlice.actions;