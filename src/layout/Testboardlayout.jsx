import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Testboardlayout() {
    return(
        <>
            <Navbar />
            <main style={{ paddingTop: "80px" }}>
                < Outlet />
            </main>
        </>
    )
}