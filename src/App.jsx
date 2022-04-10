import { useState } from 'react';
import './App.css';
import FormInput from "./screens/FormInput";
import Button from "./components/Button";

const App = () => {
  const [values, setValues] = useState({
    nama: "",
    email: "",
    noHandphone: "",
    latarBelakangPendidikan: "",
    kelasKoding: "",
    suratKesungguhan: "",
    harapanUntukKodingBootcamp: ""
  });
  const inputs = [
    {
      id: 1,
      name: "nama",
      placeholder: "Nama Lengkap",
      type: "text",
      errMsg: "Karakter minimal 4 huruf, tidak boleh menggunakan spesial karakter & angka",
      label: "Nama",
      pattern: "^[A-Za-z]{4,30}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "john@mail.com",
      errMsg: "Harus Menggunakan Email Valid",
      required: true,
    },
    {
      id: 3,
      name: "noHandphone",
      type: "text",
      label: "No Handphone",
      placeholder: "08xxxxxxx",
      pattern: "^[0-9]{12,13}$",
      errMsg: "Nomor Handphone 12 - 13 Angka",
      required: true,
    },
    {
      id: 4,
      name: "latarBelakangPendidikan",
      type: "radio",
      label: "Latar Belakang Pendidikan",
      required: true,
      options: ["IT", "Non-IT"],
    },
    {
      id: 5,
      name: "kelasKoding",
      type: "select",
      label: "Kelas Koding",
      required: true,
      options: ["1. Coding Backend with Golang", "2. Coding Frontend with ReactJS", "3. Fullstack Developer"],
    },
    {
      id: 6,
      name: "suratKesungguhan",
      type: "file",
      label: "Foto Surat Kesungguhan",
      required: true,
    },
    {
      id: 7,
      name: "harapanUntukKodingBootcamp",
      type: "textarea",
      label: "Harapan Untuk Koding Bootcamp Ini",
      required: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      nama: "",
      email: "",
      noHandphone: "",
      latarBelakangPendidikan: "",
      kelasKoding: "",
      suratKesungguhan: "",
      harapanUntukKodingBootcamp: ""
    });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="App">
      <div className="container__app">
        <h1 style={{ textAlign: "center" }}>Form Pendaftaran Bootcamp Coding</h1>
        <form className='form' onSubmit={handleSubmit}>
          {
            inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              ></FormInput>
            ))
          }
          <div style={{ marginTop: "0.5rem" }}>
            <Button type="Submit"></Button>
            <Button type="Reset"></Button>
          </div>
        </form>
      </div>
    </div >
  );
}

export default App;
