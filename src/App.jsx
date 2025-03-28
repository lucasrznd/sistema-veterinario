import 'primeflex/primeflex.css'; // flex
import 'primeicons/primeicons.css'; //icons
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-amber/theme.css'; //theme
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
