import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, token } from "http/http";

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await privateApi.post("/users/signup", credentials);
            token.set(data.token);
            return data;
        } catch (e) { 
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const { data } = await privateApi.post("/users/login", credentials);
            token.set(data.token);
            return data;
        } catch (e) { 
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await privateApi.post("/users/logout");
            token.remove();
        } catch (e) { 
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }

        try {
            token.set(persistedToken);
            const { data } = await privateApi.get("/users/current");
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
