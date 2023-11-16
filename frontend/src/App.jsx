import { BrowserRouter, Routes, Route } from "react-router-dom"

import Accueil from "./pages/Accueil";
import TrouverUnProfessionnels from "./pages/TrouverUnProfessionnels";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import JeSuisPatient from "./pages/JeSuisPatient";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/je-suis-patient" element={<JeSuisPatient />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/je-suis-practicient" element={<JeSuisPatient />}></Route>
        <Route path="/trouver-un-professionnels" element={<TrouverUnProfessionnels />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
