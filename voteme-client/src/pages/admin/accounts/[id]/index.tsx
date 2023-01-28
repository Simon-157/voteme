import SideBar from "@/screens/admin/SideBar";
import React from "react";
import adminStyles from "./admin-page.module.scss";

const Account = () => {
  return (
    <main className={adminStyles.container}>
      <section>
        <SideBar />
      </section>
      <section className={adminStyles.wrapper}>
        <header>
         h3
        </header>
        <div className="line"></div>

        <footer></footer>
      </section>
    </main>
  );
};

export default Account;
