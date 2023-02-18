import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "http/http";
// import axios from "axios";

// axios.defaults.baseURL = "https://63e3b51865ae49317715841a.mockapi.io/api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await privateApi.get("/contacts");
            return data;
        } catch (e) { 
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact  = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { data } = await privateApi.post("/contacts", contact);
            return data;
        } catch (e) { 
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact  = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const { data } = await privateApi.delete(`/contacts/${id}`);
            return data;
        } catch (e) { 
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);