import React, { useState } from "react";
import Image from "next/image";
import sideBarStyles from "./sidebar-styles.module.scss";
import Avartar from "@/utils/images/panky.png";
import { NavigationButtons } from "./NavButtons";
import Button from "@/components/button/Button";
import ElectionSvg from "@/components/svg-icons/ElectionSvg";
const SideBar: React.FC = () => {
  const [activePage, setActivePage] = useState("/");
  return (
    <main className={sideBarStyles.wrapper}>
      <header className={sideBarStyles.profile}>
        <Image
          className={sideBarStyles.profileImg}
          src={Avartar}
          alt="profile"
          width={20}
          height={20}
        />
        <span>
          University of Education
          <p style={{ color: "rgb(181, 207, 207)" }}>Organization</p>
        </span>
        <div className="line"></div>
      </header>

      <section className={sideBarStyles.content}>
        {NavigationButtons?.map((button) => {
          return (
            <Button
              icon={<ElectionSvg width="20" height="20" />}
              key={button.text}
              text={button.text}
              onClick={() => setActivePage(button.text)}
            />
          );
        })}
      </section>

      <footer></footer>
    </main>
  );
};

export default SideBar;
