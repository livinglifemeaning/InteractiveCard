import { createSlice, configureStore } from "@reduxjs/toolkit";

const inputValueSlice = createSlice({
  name: "inputValues",
  initialState: {
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    securityCode: "",
  },
  reducers: {
    updateCardName(state, action) {
      state.cardName = action.payload;
    },
    updateCardNumber(state, action) {
      state.cardNumber = action.payload.replace(/\s/g, '');
    },
    updateMonth(state, action) {
      state.month = action.payload.replace(/\s/g, '');
    },
    updateYear(state, action) {
      state.year = action.payload.replace(/\s/g, '');
    },
    updateSecurityCode(state, action) {
      state.securityCode = action.payload.replace(/\s/g, '');
    },
  },
});

const validitySlice = createSlice({
  name: "validity",
  initialState: {
    nameValid: false,
    numberValid: false,
    monthValid: false,
    yearValid: false,
    codeValid: false,
    formValid: "undefined",
  },
  reducers: {
    invalidateName(state) {
      state.nameValid = false;
      console.log("nameValidity", state.nameValid);
    },
    validateName(state) {
      state.nameValid = true;
      console.log("nameValidity", state.nameValid);
    },
    invalidateNumber(state) {
      state.numberValid = false;
    },
    validateNumber(state) {
      state.numberValid = true;
    },
    invalidateMonth(state) {
      state.monthValid = false;
    },
    validateMonth(state) {
      state.monthValid = true;
    },
    invalidateYear(state) {
      state.yearValid = false;
    },
    validateYear(state) {
      state.yearValid = true;
    },
    invalidateCode(state) {
      state.codeValid = false;
    },
    validateCode(state) {
      state.codeValid = true;
    },
    invalidateForm(state) {
      state.formValid = "invalid";
    },
    validateForm(state) {
      state.formValid = "valid";
    },
    hideFormErrors(state) {
      state.formValid = "undefined";
    },
  },
});
const store = configureStore({
  reducer: {
    inputs: inputValueSlice.reducer,
    validity: validitySlice.reducer,
  },
});

export const inputActions = inputValueSlice.actions;
export const validityActions = validitySlice.actions;
export default store;
