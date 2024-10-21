import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App.js";
import Contact from "./contact/Contact.js";
import Hero from "./hero/Hero.js";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useParams,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
{
  /* kur ke children brenda mos e perdor elementin tek parent */
}
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/test",
        element: <h1>Hello there</h1>,
      },
      {
        path: "/test/:id",
        element: <h1>Hello there id person</h1>,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <Routes>
        <Route path="/" element={<App />} />{" "}
        {/* other attributes: errorElement loader */}
    {/* <Route path="/contact" element={<Contact />} /> */}
    {/* <Route path="/hero/:slug" element={<Hero />} /> */}
    {/* </Routes> */}
    <RouterProvider router={router} />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
