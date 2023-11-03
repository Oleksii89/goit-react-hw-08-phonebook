import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import { requestLogin, requestRegister } from 'services/api';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);
      console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);
      console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів

  extraReducers: builder => builder,
  // .addCase(fetchContacts.pending, (state, action) => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(fetchContacts.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.contactsData = action.payload;
  // })
  // .addCase(fetchContacts.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // })
  // .addCase(addContact.pending, (state, action) => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(addContact.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.contactsData = [...state.contactsData, action.payload];
  // })
  // .addCase(addContact.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // })
  // .addCase(deleteContact.pending, (state, action) => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(deleteContact.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.contactsData = state.contactsData.filter(
  //     contactData => contactData.id !== action.payload.id
  //   );
  // })
  // .addCase(deleteContact.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // }),
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
