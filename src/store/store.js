import { initGlobalState } from "qiankun";

const initialState = {
  user: {
    name: "qiankun"
  }
};

const actions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {
  for (const key in state) {
    initialState[key] = state[key];
  }
});

actions.getGlobalState = (key) => {
  return key ? initialState[key] : initialState;
};

actions.setGlobalState = (state) => {
  for (const key in state) {
    initialState[key] = state[key];
  }
};

export default actions;
