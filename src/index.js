import React from "react";
// Import ReactDOM dari module client dari package "react-dom"
import ReactDOM from "react-dom/client";
// Import komponen App dari file "./App"
import App from "./App";

// Mendapatkan elemen dengan id "root" dari DOM
const element = document.getElementById("root");

// Membuat root ReactDOM untuk merender elemen dengan id "root"
const root = ReactDOM.createRoot(element);

// Merender komponen App di dalam root ReactDOM yang telah dibuat sebelumnya
root.render(<App />);
