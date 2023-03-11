import './App.css';
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import AddUser from './components/AddStudents'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useState} from 'react'
import EditUser from './components/EditUser'
import AddTeacher from './components/AddTeacher';
import EditTeacher from './components/EditTeacher';

function App() {

let data = {
earningsMonthly: "3,00,000",
earningsAnnually: "48,00,000",
task:50,
pendingRequests: 50
}

let [users, setUsers] = useState([
  {
    name: "Kalai",
    email: "kalai@gmail.com",
    classes: "10 ",
    mobile: 9876543210,
  },
  {
    name: "Selvan",
    email: "selvan@gmail.com",
    classes: "12",
    mobile: 9876598765,
  },
  {
    name: "Selvi",
    email: "selvi@gmail.com",
    classes: "8",
    mobile: 9876788967,
  },
]);

let [teacher, setTeacher] = useState([
  {
    teacherName: "Ragav",
    email: "ragav@gmail.com",
    teachingClass: "12 ",
    mobile: 9876543210,
    subject: "Tamil",
  },
  {
    teacherName: "Kumar",
    email: "kumar@gmail.com",
    teachingClass: "8",
    mobile: 9876598765,
    subject: "English",
  },
  {
    teacherName: "Selvan",
    email: "selvan@gmail.com",
    teachingClass: "11",
    mobile: 9876788967,
    subject: "Maths",
  },
]);


// const [value, setValue] = useState("hi")
  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  data={{ data, users, setUsers, teacher, setTeacher }}
                />
              }
            />
            <Route
              path="/add-student"
              element={<AddUser data={{ users, setUsers }} />}
            />
            <Route
              path="/add-teacher"
              element={<AddTeacher data={{ teacher, setTeacher }} />}
            />
            <Route
              path="/edit-user/:id"
              element={<EditUser data={{ users, setUsers }} />}
            />
            <Route
              path="/edit-teacher/:id"
              element={<EditTeacher data={{ teacher, setTeacher }} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;