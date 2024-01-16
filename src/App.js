import Landing from "./landing";
import Login from "./login";
import StudentLogin from "./student/studentLogin";
import StudentDashboard from "./student/studentDashboard";
import BookingPortal from "./student/bookingPortal";
import ApprovedAppointments from "./student/ApprovedAppointments";
import Lecturerlogin from "./lecturer/lecturerlogin";
import LecturerDashboard from "./lecturer/lecturerDashboard";
import AppointmentView from "./lecturer/appointmentView";
import NotFound from "./NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/studentLogin" element={<StudentLogin/>}/>
        <Route path = "/lecturerLogin" element={<Lecturerlogin/>}/>
        <Route path = "/studentdashboard" element={<StudentDashboard/>}/>
        <Route path = "/lectuererdashboard" element={<LecturerDashboard/>}/>
        <Route path = "/bookingportal" element={<BookingPortal/>}/>
        <Route path = "/approvedappointments" element={<ApprovedAppointments/>}/>
        <Route path = "/appointmentview" element={<AppointmentView/>}/>
        <Route path = "*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;