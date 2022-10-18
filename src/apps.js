import store from "./store/store";
const microApps = [
  {
    name: "react-app-qiankun-sub",
    entry: process.env.REACT_APP_SUB_REACT,
    activeRule: "/react",
    container: "#subapp-viewport"
  }
];

const apps = microApps.map((item) => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState
    }
  };
});

export default apps;
