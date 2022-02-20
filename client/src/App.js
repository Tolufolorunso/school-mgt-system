import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AddStudent,
  StudentProfile,
  ShareLayout,
  Stats,
  Students,
} from "./pages/dashboard";
import { Home, Register, Login, NotFound, ProtectRoute } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <ShareLayout />
          }
        >
          <Route index element={<Stats />} />
          <Route path="students" element={<Students />} />
          <Route path="students/id" element={<StudentProfile />} />
          <Route path="students/add" element={<AddStudent />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <ProtectRoute>
<ShareLayout />
</ProtectRoute> */}