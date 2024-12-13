import Principal from "./pages/Principal"
import 'primereact/resources/themes/lara-light-amber/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Principal />
      <Footer />
    </>
  )
}

export default App
