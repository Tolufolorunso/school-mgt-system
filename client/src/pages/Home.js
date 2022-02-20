import React from "react";
import { useNavigate } from "react-router-dom";

import { AuthNav, Button, Center } from "../components";
import logo from "../assets/images/git.svg";
import '../theme/home.css'

const Home = () => {
    let navigate = useNavigate();
    const loginHandler = () => {
        navigate('/users/login');
    }

    const registerHandler = () => {
        navigate('/users/register');
    }

  return (
    <main className="home h-screen flex">
      <AuthNav />  
      <Center classes="container">
        <div className="home__content text-white">
          <img
            src={logo}
            width="160"
            height="130"
            alt="git logo"
            className="img"
          />
          <h1> Welcome to Student Management System. </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat debitis architecto nesciunt ipsum. Assumenda mollitia odio eligendi quae, impedit dicta recusandae a corrupti error voluptate, minima iste. Tempore, repellat.</p>
          <div className="home__content--btns flex mt-5">
              <Button w={195} h={45} r={3} primary onClick={loginHandler} text='Login'  />
              <Button w={195} h={45} r={3} onClick={registerHandler} text='Register'  />
          </div>
        </div>
      </Center>
    </main>
  );
};

export default Home;
