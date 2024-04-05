import Auth from "./components/Auth/Auth.js";
import Headers from "./components/Headers.js";
import HomePage from "./components/HomePage.js";
import Movies from "./components/Movies/Movies.js";
import Admin from "./components/Admins/Admins.js";
import Booking from "./components/Bookings/Booking.js";
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, [dispatch]);
  return (
    <div>
      <Headers/>
      <section>
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/movies" element={<Movies />} />
          <Route  path="/admin" element={<Admin />} />
          <Route  path="/auth" element={<Auth />} />
          <Route path="/booking/:id" element={<Booking />} />


        </Routes>
      </section>
    </div>
  );
}

export default App;
