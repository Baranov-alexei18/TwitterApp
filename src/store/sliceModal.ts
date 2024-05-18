import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { isOpen: boolean, modalType: string | null; } = {
  isOpen: false,
  modalType: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen(state, action: PayloadAction<{ modalType: string }>) {
      if (!state.isOpen && !state.modalType) {
        state.isOpen = true;
        state.modalType = action.payload.modalType;
      }
    },
    modalClose(state) {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;
