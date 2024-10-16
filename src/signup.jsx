
//  import signup from './signup.css';

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// export const Signup = () => {
//   const navigate=useNavigate()
//   const[input,setInput]=useState({});
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phonenumber, setPhonenumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmpassword] = useState('');
//   const [errors, setErrors] = useState({});


//   const validationPatterns = {
//     name: /^[A-Z][a-z]{3,5}$/, // Name should start with uppercase and 3-5 lowercase characters
//     email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // Email 
//     phonenumber: /^[0-9]{10}$/, // Phone number: exactly 10 digits
//     password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Password pattern
//     confirmpassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ // Confirm password
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!validationPatterns.name.test(name)) {
//       newErrors.name = 'Name should start with uppercase and 3-5 lowercase letters';
//     }
//     if (!validationPatterns.email.test(email)) {
//       newErrors.email = 'Enter correct email format';
//     }
//     if (!validationPatterns.phonenumber.test(phonenumber)) {
//       newErrors.phonenumber = 'Phone number must be exactly 10 digits';
//     }
//     if (!validationPatterns.password.test(password)) {
//       newErrors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters';
//     }
//     if (password !== confirmpassword) {
//       newErrors.confirmpassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//   };

//   function handleCreateAccount(event) {
//     event.preventDefault();
//     validateForm();
//     localStorage.setItem("user", JSON.stringify(Signup));
//     localStorage.setItem("user", JSON.stringify({ email, password }));
//   navigate("/signup");

//   }

//   return (
//     <div className="container border-success:Green bg-info border w-4 ">
//       <div className="row">
//         <h2>Signup Form</h2>
//         <div className="col-6 form">
          
//           <div className="col-12 mb-3">
//             <label htmlFor="name">Name :</label>
//             {errors.name && <p className="error">{errors.name}</p>}
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Name"
//               onChange={(event) => setName(event.target.value)}
//             />
//           </div>

//           <div className="col-12 mb-3">
//             <label htmlFor="email">Email :</label>
//             {errors.email && <p className="error">{errors.email}</p>}
//             <input type="text"className="form-control"placeholder="Email"onChange={(event) => setEmail(event.target.value)}
//             />
//           </div>

//           <div className="col-12 mb-3">
//             <label htmlFor="phonenumber">Phone number :</label>
//             {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Phone number"
//               onChange={(event) => setPhonenumber(event.target.value)}
//             />
//           </div>

//           <div className="col-12 mb-3">
//             <label htmlFor="password">Password :</label>
//             {errors.password && <p className="error">{errors.password}</p>}
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>

//           <div className="col-12 mb-3">
//             <label htmlFor="confirmpassword">Confirm Password :</label>
//             {errors.confirmpassword && (
//               <p className="error">{errors.confirmpassword}</p>
//             )}
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Confirm password"
//               onChange={(event) => setConfirmpassword(event.target.value)}
//             />
//           </div>

//           <div className="col-12 mb-3">
//             <button
//               className="btn btn-primary"
//               onClick={(event) => handleCreateAccount(event)}
//             >
//               Signup
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import './signup.css'; // Assuming you have some CSS styles
// import { useNavigate } from 'react-router-dom';

// export const Signup = () => {
//   const navigate = useNavigate();
  
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phonenumber, setPhonenumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmpassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validationPatterns = {
//     name: /^[A-Z][a-z]{3,5}$/, // Name should start with uppercase and 3-5 lowercase characters
//     email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // Email pattern
//     phonenumber: /^[0-9]{10}$/, // Phone number: exactly 10 digits
//     password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Password pattern
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!validationPatterns.name.test(name)) {
//       newErrors.name = 'Name should start with uppercase and 3-5 lowercase letters';
//     }
//     if (!validationPatterns.email.test(email)) {
//       newErrors.email = 'Enter correct email format';
//     }
//     if (!validationPatterns.phonenumber.test(phonenumber)) {
//       newErrors.phonenumber = 'Phone number must be exactly 10 digits';
//     }
//     if (!validationPatterns.password.test(password)) {
//       newErrors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters';
//     }
//     if (password !== confirmpassword) {
//       newErrors.confirmpassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleCreateAccount = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       // Store user data in localStorage
//       const user = {
//         name,
//         email,
//         phonenumber,
//         password,
//       };
//       localStorage.setItem('user', JSON.stringify(user));

//       // Redirect to login page after successful signup
//       navigate('/login');
//     }
//   };

//   return (
//     <div className="container border-success:Green bg-info border w-4">
//       <div className="row">
//         <h2>Signup Form</h2>
//         <div className="col-8 form">
          

           
//           {/* Name Field */}
//           <div className="col-12 mb-3">
//             <label htmlFor="name">Name :</label>
//             {errors.name && <p className="error">{errors.name}</p>}
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Name"
//               onChange={(event) => setName(event.target.value)}
//             />
//           </div>

//           {/* Email Field */}
//           <div className="col-12 mb-3">
//             <label htmlFor="email">Email :</label>
//             {errors.email && <p className="error">{errors.email}</p>}
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Email"
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </div>

//           {/* Phone Number Field */}
//           <div className="col-12 mb-3">
//             <label htmlFor="phonenumber">Phone number :</label>
//             {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Phone number"
//               onChange={(event) => setPhonenumber(event.target.value)}
//             />
//           </div>

//           {/* Password Field */}
//           <div className="col-12 mb-3">
//             <label htmlFor="password">Password :</label>
//             {errors.password && <p className="error">{errors.password}</p>}
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>

//           {/* Confirm Password Field */}
//           <div className="col-12 mb-3">
//             <label htmlFor="confirmpassword">Confirm Password :</label>
//             {errors.confirmpassword && (
//               <p className="error">{errors.confirmpassword}</p>
//             )}
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Confirm password"
//               onChange={(event) => setConfirmpassword(event.target.value)}
//             />
//           </div>

//           {/* Signup Button */}
//           <div className="col-12 mb-3">
//             <button
//               className="btn btn-primary"
//               onClick={(event) => handleCreateAccount(event)}
//             >
//               Signup
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
