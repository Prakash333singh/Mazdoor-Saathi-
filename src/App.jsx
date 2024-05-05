import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Register from "./Components/registerForm/Register";
import { EmployerFormProvider } from "./contexts/EmployerFormDataProvider.jsx"; // Adjust the path accordingly
import { WorkerFormProvider } from "./contexts/WorkerFormDataProvider.jsx"; // Adjust the path accordingly
import Terms_and_services from "./Components/Testimonials/terms&conditions/terms_and_services.jsx";
import { Gallery } from "./Components/Gallery/Gallery.jsx";
import Disclaimer from "./Components/Testimonials/terms&conditions/Disclaimer.jsx";
import OtpLogin from "./Components/firebase/OtpLogin.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
  const [playState, setPlayState] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setPlayState={setPlayState} />} />
        <Route
          path="/register-user"
          element={
            <WorkerFormProvider>
              <EmployerFormProvider>
                <ProtectedRoute user={user}>
                  <Register />
                </ProtectedRoute>
              </EmployerFormProvider>
            </WorkerFormProvider>
          }
        />
        <Route path="/terms-of-services" element={<Terms_and_services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms-of-services" element={<Terms_and_services />} />
        <Route path="/des" element={<Disclaimer />} />
        <Route
          path="/otp-verify"
          element={
            <WorkerFormProvider>
              <EmployerFormProvider>
                <OtpLogin user={user} setUser={setUser} />
              </EmployerFormProvider>
            </WorkerFormProvider>
          }
        />
      </Routes>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
