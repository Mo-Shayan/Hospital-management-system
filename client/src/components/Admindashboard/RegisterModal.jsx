import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterModal = () => {

    const genders = ["M","F"];
  // const [showModal, setShowModal] = useState(false);
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [sex,setSex] = useState(genders[0]);
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [DID,setDID] = useState("");
  const [password,setPassword] = useState("");


const register = () => {
  
    Axios.post("http://localhost:3001/Admin/createDoctor",{
        name: name,
        address: address,
        city: city,
        phone: phone,
        email: email,
        sex: sex,
        age: age,
        DID: DID,
        password: password,
        // history: history
    }).then((response) => {

      toast.success('Succesfully Created', {position: toast.POSITION.TOP_RIGHT});

      console.log(response);});
    
      toast.success('Succesfully Created', {position: toast.POSITION.TOP_RIGHT});

};

const display = () => {
    console.log(name+address+city+phone+email+sex+age+DID+password);
}



  return (
    <>
     
      
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white bg-opacity-40 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Register Doctor</h3>
                 
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={()=> register()} className="bg-gray-200 bg-opacity-80 shadow-md rounded px-8 pt-6 pb-8 w-full">
                   
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input type="text" required className="shadow appearance-none  border rounded w-full py-2 px-1 text-black" onChange={(e) => {setName(e.target.value)}}/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input type="text" required placeholder="Limit : 100 characters" maxLength={100} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e) => {setAddress(e.target.value)}}/>
                    <label for="city" className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input type="text" required city="city" pattern="[a-zA-Z]+" value={city} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e) => {setCity(e.target.value)}}/>
                    <label className="block text-black text-sm font-bold mb-1">
                     phone
                    </label>
                    <input type="tel" required placeholder="i.e XXXX-XXXXXXX" pattern="[0-9]{4}[0-9]{7}" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e) => {setPhone(e.target.value)}}/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    {/* <input type="email" required placeholder="e.g. xyz@gmail.com" className="shadow appearance-none border rounded w-full py-2 px-1 text-black"  onChange={(e) => {setEmail(e.target.value)}}/> */}
                    <input
  type="email"
  required
  placeholder="e.g. xyz@gmail.com"
  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
  onChange={(e) => {
    setEmail(e.target.value);
  }}
/>

                    <label className="block text-black text-sm font-bold mb-1">
                      Sex
                    </label>
                    {/* <input type="text" required placeholder="M or F" maxLength={1} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e) => {setSex(e.target.value)}}/> */}
                    <input
  type="text"
  required
  placeholder="M or F"
  maxLength={1}
  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
  pattern="[MFmf]"
  title="Please enter either 'M' or 'F'"
  onChange={(e) => {
    setSex(e.target.value.toUpperCase()); // Convert input to uppercase to handle lowercase input
  }}
/>


                    <label className="block text-black text-sm font-bold mb-1">
                      Age
                    </label>
                    <input type="number" required min="1" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e) => {setAge(e.target.value)}}/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Department ID
                    </label>
                    <input type="text" required placeholder="eg. De1 " className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={(e) => {setDID(e.target.value)}}/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Password
                    </label>
                    <input  required placeholder="Must be atleast 8 characters" minLength={8}  className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                
                <Link to="/admin/dashboard">  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    // onClick={() => setShowModal(false)}

                  >
                    Close
                  </button>
                  </Link>
                  <button
                  type="submit"
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    
                  
                  >
                    Submit
                  </button>
                </div>




                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </>
     
    </>
  );
};

export default RegisterModal;