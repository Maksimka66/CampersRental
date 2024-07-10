export const selectCampers = (state) => state.campers.items;

export const selectOneCamper = (state) => state.campers.current;

export const selectFavorites = (state) => state.campers.favorites;

export const selectModal = (state) => state.campers.modal;

export const selectLoadingCampers = (state) => state.campers.loading;

export const selectErrorCampers = (state) => state.campers.error;
