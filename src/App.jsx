import 'primereact/resources/themes/lara-light-amber/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import ManutencaoPage from './pages/Manutencao';

function App() {
  return (
    <ManutencaoPage />
    // <Layout>
    //   <Home />
    // </Layout>
  )
}

export default App
