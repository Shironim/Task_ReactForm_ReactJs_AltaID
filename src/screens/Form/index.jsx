import React from 'react'
import styles from "./styles.module.css";

const Form = ({ inputs, setInputs }) => {

  const handleInputs = (value, index) => {
    const newInput = inputs.map((input, inputIdx) => {
      if (inputIdx === index) {
        return {
          ...input,
          value: value
        }
      }
      return input
    })
    setInputs(newInput);
  }

  return (
    <>
      <form className={styles.form} action="">
        {
          inputs.map((input, inputIdx) => {

            if (input.type !== "select" && input.type !== "radio" && input.type !== "file") {
              return (
                <div className={styles.form_input} key={inputIdx}>
                  <label>{input.label}</label>
                  <input
                    key={inputIdx}
                    name={input.name}
                    type={input.type}
                    value={input.value}
                    required
                    onChange={(e) => handleInputs(e.target.value, inputIdx)}
                  />
                </div>
              )
            }
            if (input.type === "radio") {
              return (
                <div className={styles.form_input} key={inputIdx}>
                  <label>{input.label}</label>
                  {
                    input.options.map((option) => {
                      return (
                        <div>
                          <input
                            key={inputIdx}
                            name={input.name}
                            type={input.type}
                            value={option}
                            onChange={(e) => handleInputs(e.target.value, inputIdx)}
                          />
                          <span> {option}</span>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }

            if (input.type === "select") {
              return (
                <div className={styles.form_input} key={inputIdx}>
                  <label>{input.label}</label>
                  <select
                    key={inputIdx}
                    name={input.name}
                    value={input.value}
                    onChange={(e) => handleInputs(e.target.value, inputIdx)}
                  >
                    <option value="">Pilih</option>
                    {
                      input.options.map((option) => {
                        return (
                          <option value={option}>{option}</option>
                        )
                      })
                    }
                  </select>
                </div>
              )
            }
            if (input.type === "file") {
              return (
                <div className={styles.form_input} key={inputIdx}>
                  <label>{input.label}</label>
                  <input
                    className={styles.custom_file_upload}
                    key={inputIdx}
                    type={input.type}
                  />
                </div>
              )
            }
            return false
          })
        }
        <div style={{ marginTop: "0.5rem" }}>
          <button className={styles.btnSubmit} type='submit'>Submit</button>
          <button className={styles.btnReset} type='reset'>Reset</button>
        </div>
      </form>
    </>
  )
}
export default Form;
