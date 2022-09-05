import React , {useState} from 'react'
import axios from "axios";

const Signup = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })

    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value

    })

    }

//register function 
   const egister = ()=>{
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:8000/auth/signup",user )
    .then(res=>console.log(res))
   }
   else{
       alert("invalid input")
   };
    return (
        <>
            
<div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Create a new account
    </div>
    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?
        <a href="#" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
        </a>
    </span>
    <div class="p-6 mt-8">
        <form action="#">
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={handleChange} placeholder="FullName"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
                        </div>
                       
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="password" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={handleChange}    placeholder="password"/>
                                </div>
                            </div>
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={egister} >
                                    Register
                                </button>
                            </div>
                        </form>
                        
                                                           
                                                        </div>
                                                    </div>

        </>
    )
}
}

export default Signup;

/*import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post(`${process.env.REACT_APP_API_URI}api/user`, data)
      .then(res => {
        this.setState({
          username: '',
          password:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in SignUp!");
      })
  };

  render() {
    return (
      <div>
        <h1>User Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" placeholder="Username" name="username"
            value={this.state.username} onChange={this.onChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password"
            value={this.state.password} onChange={this.onChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Signup;*/