import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/login';

import Dashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageTask from './pages/admin/ManageTask';
import CreateTask from './pages/admin/CreateTask';

import UserDashboard from './pages/User/UserDashboard';
import MyTasks from './pages/User/MyTasks';
import ViewTaskDetails from './pages/User/ViewTaskDetails';

import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp/>} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/manageTask' element={<ManageTask />} />
            <Route path='/admin/manageUsers' element={<ManageUsers />} />
            <Route path='/admin/createTask' element={<CreateTask />} />
          </Route>


          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={['user']} />}>
            <Route path='/user/UserDashboard' element={<UserDashboard />} />
            <Route path='/user/MyTasks' element={<MyTasks />} />
            <Route path='/user/Task-Details/:id' element={<ViewTaskDetails />} />
          </Route>

        </Routes>
      </Router>
    </div>  
  )
}

export default App 