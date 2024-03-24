import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {StoreProvider} from "@/app/providers/StoreProvider";
import '@/shared/config/i18n/i18n.ts'
import "./app/styles/index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>
);
