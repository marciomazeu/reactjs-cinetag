import { BrowserRouter, Routes,Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Header />
        <Container>
        <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
        </Container>
        <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;