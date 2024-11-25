import { Header } from "./components/Header";
import { Register } from "./components/Register";
import { Provider } from "./context/Provider";

export function App() {
  return (
    <>
      <Provider>
        <Header />
        <Register />
      </Provider>
    </>
  )
}