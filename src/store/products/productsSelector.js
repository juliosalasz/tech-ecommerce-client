import { createSelector } from "reselect";

export const selectProduct = (state) => state.products.products;

export const selectProductsIsLoading = createSelector(
  [selectProduct],
  (productSlice) => productSlice.isLoading
);
