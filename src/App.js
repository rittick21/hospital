
import './App.css';
//Registration and login

// import Navbar from './components/Navbar';
// import Reg from './components/Reg';
// import Login from './components/Login';

//patient

// import Navp from './components/patient/Navp';
// import PatientHome from './components/patient/PatientHome';
// import Booking from './components/patient/Booking';
// import Appoinment_status from './components/patient/Appoinment_status';
// import Profile from './components/patient/Profile';

//doctor

// import NavD from './components/doctor/NavD';
// import Home from './components/doctor/Home';
// import Profile from './components/doctor/Profile';
// import Schedule from './components/doctor/Schedule';
// import Status from './components/doctor/Status';

//admin

import NavA from './components/admin/NavA';
import Home from './components/admin/Home';
import Profile from './components/admin/Profile';
import Ddetails from './components/admin/Ddetails';
import Pdetails from './components/admin/Pdetails';
import Appoinment_details from './components/admin/Appoinment_details';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Patient


function App() {
  return (
    <>
    <Router>
    {/* Login and Register */}

    {/* <Navbar title="Hospital"/>
    <Routes>
    <Route path='/' element={<Reg heading="Register your details"/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes> */}

    {/* Patient details */}

    {/* <Navp title="Hospital"/>
    <Routes>
      <Route path='/' element={<PatientHome/>}/>
      <Route path='/appoinment' element={<Booking/>}/>
      <Route path='/status' element={<Appoinment_status/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes> */}

    {/* doctor details */}

    {/* <NavD title="Hospital"/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/status' element={<Status/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>  */}

    {/* admin details */}

    <NavA title="Hospital"/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/appoinment_detail' element={<Appoinment_details/>}/>
      <Route path='/doctor' element={<Ddetails/>}/>
      <Route path='/patient' element={<Pdetails/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>

    </Router>
    </>
  );
}

export default App;
