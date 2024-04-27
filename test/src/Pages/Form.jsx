import { useState } from "react";

export default function MyFirstForm() {
  const [myData, setMyData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMyData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${myData.name}, Email: ${myData.email}, Message: ${myData.message}`
    );
};

  return (
    <div className="container">    
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" placeholder="Enter Your Name.." required value={myData.name} onChange={handleChange}/><br />

      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" placeholder="Enter Your Email.." required value={myData.email} onChange={handleChange}/><br />

      <label htmlFor="message">Message:</label><br />
      <textarea id="message" name="message" rows={3} cols={30} placeholder="Write Somthing.." value={myData.message} onChange={handleChange}/><br />

      <button type="submit" className="submitButton">Submit</button>
    </form>
    </div>
  );
}