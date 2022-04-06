import './App.css';
import { useState } from 'react';
import Form from "./screens/Form";
function App() {

  const [inputs, setInputs] = useState([
    {
      name: "nama",
      type: "text",
      label: "Nama",
      isRequire: true,
      value: "",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      isRequire: true,
      value: "",
    },
    {
      name: "noHandphone",
      type: "number",
      label: "No Handphone",
      isRequire: false,
      value: 0,
    },
    {
      name: "latarBelakangPendidikan",
      type: "radio",
      label: "Latar Belakang Pendidikan",
      isRequire: false,
      value: "",
      options: ["IT", "Non-IT"],
    },
    {
      name: "kelasKoding",
      type: "select",
      label: "Kelas Koding",
      isRequire: true,
      value: "",
      options: ["1. Coding Backend with Golang", "2. Coding Frontend with ReactJS", "3. Fullstack Developer"],
    },
    {
      name: "suratKesungguhan",
      type: "file",
      label: "Foto Surat Kesungguhan",
      require: true,
      value: "",
    },
  ])
  console.log(inputs);
  return (
    <div className="App">
      <div className="container__app">
        <h1>Form Pendaftaran Bootcamp Coding</h1>
        <Form inputs={inputs} setInputs={setInputs}></Form>
      </div>
    </div>
  );
}

export default App;
