import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddDoctors from './Pages/Dashboard/AddDoctors/AddDoctors';
import AdminRoute from './AdminRoute/AdminRoute';
import UPloadTestion from './UploadTesting/UPloadTestion';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home></Home>}/>
              <Route path="/image" element={<UPloadTestion></UPloadTestion>}/>
              <Route path="/appoinment" element={<PrivateRoute><Appoinment></Appoinment></PrivateRoute>}/>
              <Route path="/login" element={<Login></Login>}/>
              <Route path="/register" element={<Register></Register>}/>
              <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
                <Route path="dhome" element={<DashboardHome></DashboardHome>}/>
                <Route path="makeAdmin" element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}/>
                <Route path="addDoctors" element={<AdminRoute><AddDoctors></AddDoctors></AdminRoute>}/>
              </Route>
              
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
