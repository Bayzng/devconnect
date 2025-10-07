import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(<App />);
