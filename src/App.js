import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Utils/Auth/PrivateRoute";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CreateForm from "./Pages/CreateForm";
import DataManagement from "./Pages/DataManagement";
import Departments from "./Pages/Departments";
import Form from "./Pages/Form";
import FormFields from "./Pages/FormFields";
import Forms from "./Pages/Forms";
import Users from "./Pages/Users";
import SingleDepartment from "./Pages/SingleDepartment";
import CreateDepartment from "./Pages/CreateDepartment";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-form" element={<CreateForm />} />
          <Route path="/data-management" element={<DataManagement />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<SingleDepartment />} />
          <Route path="/departments/create" element={<CreateDepartment />} />
          <Route path="/form-fields" element={<FormFields />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/forms/:id" element={<Form />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
