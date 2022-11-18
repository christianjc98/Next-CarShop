import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadSpinner from "./components/LoadSpinner";
import SharedLayout from "./components/SharedLayout";
import Login from "./features/auth/Login";
import PersistLogin from "./features/auth/PersistLogin";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import Customers from "./features/clients/Customers";
import BasicInformation from "./features/customerProfile/BasicInformation";
import CustomerProfile from "./features/customerProfile/CustomerProfile";
import Dashboard from "./features/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customer/:id" element={<CustomerProfile />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
