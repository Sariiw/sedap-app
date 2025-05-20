import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import Fm from "./Fm";



createRoot(document.getElementById("root"))
    .render(
            <div>
            {/* <FrameworkListSearchFilter/>
            <ResponsiveDesign/> */}
            <Fm/>
            </div>
    )