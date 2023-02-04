import { IsOpen } from "@/types/eventtype";
import Image from "next/image";
import React from "react";
import createStyles from "./create.module.scss";
const CreateEvent: React.FC<IsOpen> = ({ show }) => {
  return (
    <main className={createStyles.parent}>
      {show ? (
        <section className={createStyles.container}>
          <div className={createStyles.header}>
            <Image src={""} alt="logo" height="300" width="300" />
            <h2>Welcome Back</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <form name="form" id="form" className={createStyles.form}>
              <div className={createStyles.inputField}>
                <input
                  className={createStyles.emailInput}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <small></small>
              </div>
              <div className={createStyles.inputField}>
                <input
                  className={createStyles.passwordInput}
                  id="password"
                  type="text"
                  name="password"
                  placeholder="Password"
                />
                <small></small>
              </div>
              <small className={createStyles.forgotPassword}>
                forgot password?
              </small>
              <button className={createStyles.btn}>sign in</button>
              <p>
                Dont have an account? Sign up <a href="#"> here</a>
              </p>
            </form>
          </div>
        </section>
      ) : null}
    </main>
  );
};

export default CreateEvent;
