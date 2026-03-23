import { Articles } from "./components/articles/Articles";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Articles visible={3}/>
    </>
  );
}

export default App;
