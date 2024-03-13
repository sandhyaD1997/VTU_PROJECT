import HomeScreen from "./Screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import {Outlet, Outletutlet} from 'react-router-dom';
function App() {
  return (
  <>
  <Header></Header>
  <Container>
    <main>
      <Outlet/>
      
    </main>
  </Container>
  <Footer/>
  
  </>
  );
}

export default App;
