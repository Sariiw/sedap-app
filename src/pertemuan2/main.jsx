import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Artikel from "./Artikel";
import './custom.css';
import QnA from "./QnA";
import ListProduct from "./ListProduct";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <HelloWorld/>
            <Artikel/>
            <QnA/>
            <ListProduct/>
        </div>
    )