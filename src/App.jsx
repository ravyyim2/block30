import { useState, useEffect } from "react";

import {
  Account,
  Books,
  Login,
  Navigation,
  Register,
  SingleBook,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./api/ajaxHelper";

function App() {
  const [token, setToken] = useState(null);

  const [user, setUser] = useState(null);

  async function fetchUser() {
    if (!token) return;
    const nextUser = await getUser(token);
    console.log(nextUser);
    setUser(nextUser);
  }
  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/account" element={<Account token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route
          path="/books/:bookId"
          element={<SingleBook token={token} fetchUser={fetchUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
