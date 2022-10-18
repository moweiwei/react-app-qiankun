import { initGlobalState } from "qiankun";

const initialState = {
  user: {
    name: "qiankun-main"
  }
};

const actions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {
  console.log("11111111", state, prev);
  for (const key in state) {
    initialState[key] = state[key];
  }
});

actions.getGlobalState = (key) => {
  return key ? initialState[key] : { ...initialState };
};

export default actions;
