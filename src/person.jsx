
// import propTypes from 'prop-types';
// import React from 'react';
// function Person({name="khaled", age=30, email="N/A", phone="N/A", address="N/A", isActive=false}) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{age }</p>
//       <p>{email }</p>
//       <p>{phone }</p>
//       <p>{address }</p>
//       <p>{isActive  ?"yes":"no"}</p>

//     </div>
//   );
// } 

// Person.propTypes = {
//   name: propTypes.string.isRequired,
//   age: propTypes.number,
//   email: propTypes.string,
//   phone: propTypes.string,
//   address: propTypes.string,
//   isActive: propTypes.bool
// };



// طريقه قديمه لتحديد القيم الافتراضيه للخصائص
// Person.defaultProps = {
//   name: "khaled",
//   age: 30,   
//   email: 'N/A',
//   phone: 'N/A',
//   address: 'N/A',
//   isActive: false
// };



// conditional rendering


// function person()
// {if(IsActive)
//   {
//     return <p>Active</p>;
//   }
//   else
//   {
//     return <p>Inactive</p>;
//   }
// }


// function Person() {
//   return (
//     <div className="text-info text-center fs-1">
//       <p>Hello, I am a person.</p>
//     </div>
//   );
// }



import React from 'react';
import PropTypes from 'prop-types';

function Person({ userName="khaled", IsActive=true }) {
const welcome=<h1 className="text-info">  hi {userName} </h1>;
const IogIn=<h1 className="text-danger">  hi {userName} </h1>;
  return (
    IsActive ? welcome : IogIn
  );
}

export default Person;






















