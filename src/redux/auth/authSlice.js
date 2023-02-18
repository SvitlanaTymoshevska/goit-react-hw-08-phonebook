import { createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS } from "constants/constants";
import { register, logIn, logOut, refreshUser } from "redux/auth/authThunk";

export const authInitialState = {
    user: { name: null, email: null },
    token: null,
    status: AUTH_STATUS.logOut,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    extraReducers:
     builder => {
      builder
        .addCase(register.pending, state => {
            state.status = AUTH_STATUS.loading;
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.status = AUTH_STATUS.logIn;
            state.user = payload.user;
            state.token = payload.token;
            state.error = null;
        })
        .addCase(register.rejected, (state, { payload }) => {
            state.status = AUTH_STATUS.logOut;
            state.user = { name: null, email: null };
            state.token = null;
            state.error = payload;
        })
        .addCase(logIn.pending, state => {
            state.status = AUTH_STATUS.loading;
        })
        .addCase(logIn.fulfilled, (state, { payload }) => {
            state.status = AUTH_STATUS.logIn;
            state.user = payload.user;
            state.token = payload.token;
            state.error = null;
        })
          .addCase(logIn.rejected, (state, { payload }) => {
            state.status = AUTH_STATUS.logOut;
            state.user = { name: null, email: null };
            state.token = null;
            state.error = payload;
        })
        .addCase(logOut.pending, state => {
            state.status = AUTH_STATUS.loading;
        })
        .addCase(logOut.fulfilled, (state) => {
            state.status = AUTH_STATUS.logOut;
            state.user = { name: null, email: null };
            state.token = null;
            state.error = null;
        })
          .addCase(logOut.rejected, (state, { payload }) => {
            state.status = AUTH_STATUS.logOut;
            state.user = { name: null, email: null };
            state.token = null;
            state.error = payload;
        })
        .addCase(refreshUser.pending, state => {
            state.status = AUTH_STATUS.refreshing;
        })
        .addCase(refreshUser.fulfilled, (state, { payload }) => {
            state.status = AUTH_STATUS.logIn;
            state.user = payload;
            state.error = null;
        })
        .addCase(refreshUser.rejected, (state, { payload }) => {
            state.status = AUTH_STATUS.logOut;
            state.user = { name: null, email: null };
            state.token = null;
            state.error = payload;
        });
    }, 
});

export const authReducer = authSlice.reducer;
