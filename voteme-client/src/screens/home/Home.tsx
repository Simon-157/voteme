import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";
import * as React from "react";
import homeStyles from "./home-styles.module.scss";
import panky from "../../utils/images/panky.png";
import Button from "@/components/button/Button";

export interface IAppProps {}

const Home = (props: IAppProps) => {
  return (
    <div className={homeStyles.container}>
      <NavBar />
      <main className={homeStyles.wrapper}>
        <div className={homeStyles.slogan}>
          <h1>Secure, Cloud-based Elections </h1>
          <span>
            Create an election for your school or organization in seconds. Your
            voters can vote from any location on any device.
          </span>
          <Button text="view events" styles={{width:"13rem", height:"3rem"}} />
        </div>
        <div>
          <Image src={panky} width="800" height="500" alt=""></Image>
        </div>
      </main>
      <div className = {homeStyles.pollInfo}></div>
    </div>
  );
};

export default Home;
