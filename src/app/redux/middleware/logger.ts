export const Logger = (state) => (next) => (action) => {
  console.log("🚀 ~ Logger ~ state:", state.getState());
  console.log("🚀 ~ Logger ~ action:", action);
  next(action);
  console.log("🚀 ~ Logger ~ state:", state.getState());
};
