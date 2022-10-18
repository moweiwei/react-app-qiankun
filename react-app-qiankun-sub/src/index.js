import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function getSubRootContainer(container) {
  return container
    ? container.querySelector("#sub-react-root")
    : document.querySelector("#sub-react-root");
}

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <App store={{ ...props }} />
    </React.StrictMode>,
    getSubRootContainer(container)
  );
}

function storeTest(props) {
  props.onGlobalStateChange(
    (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true
  );
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name
    }
  });
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  console.log("props from main framework", props);
  storeTest(props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(getSubRootContainer(container));
}
