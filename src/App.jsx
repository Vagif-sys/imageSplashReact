import { Galery } from "./components/Gallery";
import { SearchForm } from "./components/SearchForm";
import { ToggleTheme } from "./components/ToggleTheme";

const App = () => {
  return <main>
       <ToggleTheme/>
       <SearchForm/>
       <Galery/>
  </main>;
};
export default App;
