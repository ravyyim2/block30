// import React from "react";
// import { getUser } from "../api/ajaxHelper";
// import { useState, useEffect } from "react";

// export default function Account({ token }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       const nextUser = await getUser(token);
//       setUser(nextUser);
//     }
//     if (!token) return;
//     fetchUser();
//   }, []);

//   return user ? (
//     <>
//       <div>
//         <h3>
//           {user.firstname} {user.lastname} - ({user.email}){" "}
//         </h3>
//       </div>
//     </>
//   ) : (
//     <div className="else-type">
//       <p>Register now to create an account!</p>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Account({ user }) {
  const navigate = useNavigate();

  return user ? (
    <>
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>
        {user.books.map((book) => {
          return <p>{book.title}</p>;
        })}
      </p>
    </>
  ) : (
    <>
      <div div className="else-type">
        <p>You must be logged in to view this page!</p>

        <button
          className="button"
          type="submit"
          onClick={() => {
            navigate("/register");
          }}
        >
          Signup Here!
        </button>
      </div>
    </>
  );
}
