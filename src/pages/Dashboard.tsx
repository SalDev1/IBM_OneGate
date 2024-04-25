import { FC } from "react";
import DSideBar from "../components/DSideBar";
import DNavbar from "../components/DNavBar";

const DashBoard : FC<any> = () => {
    return (
        <>
          <DNavbar />
          <DSideBar />
        </>
    )
}

export default DashBoard;