import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-4xl font-bold">Home page</h1>}
        />
        <Route
          path="/login"
          element={<h1 className="text-4xl font-bold">Login page</h1>}
        />
        <Route
          path="/register"
          element={<h1 className="text-4xl font-bold">Register page</h1>}
        />
        <Route
          path="/task"
          element={<h1 className="text-4xl font-bold">Task page</h1>}
        />
        <Route
          path="/add-task"
          element={<h1 className="text-4xl font-bold">New task page</h1>}
        />
        <Route
          path="/task/:id"
          element={<h1 className="text-4xl font-bold">Update task page</h1>}
        />
        <Route
          path="/profile"
          element={<h1 className="text-4xl font-bold">Profile page</h1>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
