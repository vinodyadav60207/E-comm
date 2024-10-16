// // import React from 'react'
// import React,{useState} from 'react'
// import login from './login.css'
// import { useNavigate } from 'react-router-dom';

//  export const Login=()=> {
//   const navigate=useNavigate()
//   const[input,setInput]=useState({});
//    const[email,setEmail]=useState(' ');
//    const[password,setPassword]=useState('');
//   const [errors, setErrors] = useState({});


//  const validationPatterns={
//   email:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
//   password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//  }


//  const validateForm = () => {
//   const newErrors = {};

//   if (!validationPatterns.email.test(email)) {
//     newErrors.email = 'Enter correct email format';
//   }
//   if (!validationPatterns.password.test(password)) {
//     newErrors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters';
//   }
//  setErrors(newErrors)

//  }
//  function handleCreateAccount(event){
//   event.preventDefault();
//   validateForm();
//   localStorage.setItem("user", JSON.stringify({ email, password }));
//   navigate("/signup");
 
//  }




//   return (
//     <div>
    
//       <form>
//       <div className="container  bg-info  ml-5  p-5">
//       <div className="row">
//         <h2>Login Form</h2>
//         <div className="col-12 form">

//         <div className="col-12 mb-3">
//             <label htmlFor="email">Email :</label>
//             {errors.email && <p className="error">{errors.email}</p>}
//             <input type="text"className="form-control"placeholder="Email"onChange={(event) => setEmail(event.target.value)}
//             />
//           </div>


//           <div className="col-12 mb-3">
//             <label htmlFor="password">Password :</label>
//             {errors.password && <p className="error">{errors.password}</p>}
//             <input type="password" className="form-control"placeholder="Password"onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           <div className="col-12 mb-3">
//             <button className="btn btn-primary"onClick={(event) => handleCreateAccount(event)}>Login
//               </button>
//           </div>
//           </div>
//           </div>
//           </div>

// </form>

// </div>
    
//   )
// }
// export default Login


import React, { useState } from 'react';
import './login.css'; // Assuming you have some CSS styles
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [welcomeMessage, setWelcomeMessage] = useState(''); // To show welcome message

  const validationPatterns = {
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // Email pattern
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ // Password pattern
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validationPatterns.email.test(email)) {
      newErrors.email = 'Enter correct email format';
    }
    if (!validationPatterns.password.test(password)) {
      newErrors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Retrieve stored user data from localStorage
      var storedUser = JSON.parse(localStorage.setItemm('user'));
      
      var storedUser = JSON.parse(localStorage.getItem('user'));

      // Check if the entered email and password match the stored data
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        setWelcomeMessage(`Welcome, ${storedUser.name}!`);
        navigate('/home'); // Optionally navigate to a different page, e.g., home
      } else {
        setErrors({ ...errors, auth: 'Invalid email or password' });
      }
    }
  };

  const goToSignup = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div>
      <form>
        <div className="container bg-info ml-5 p-5">
          <div className="row">
            <h2>Login Form</h2>
            <div className="col-12 form">
              <div className="col-12 mb-3">
                <label htmlFor="email">Email :</label>
                {errors.email && <p className="error text-danger">{errors.email}</p>}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="password">Password :</label>
                {errors.password && <p className="error text-danger">{errors.password}</p>}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="col-12 mb-3">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>

              {errors.auth && <p className="error text-danger">{errors.auth}</p>}
              {welcomeMessage && <div className="alert alert-success">{welcomeMessage}</div>}

              {/* Signup Button */}
              <div className="col-12 mb-3">
                <p>
                  Don't have an account?{' '}
                  <button className="btn btn-link" onClick={goToSignup}>
                    Please Signup
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

