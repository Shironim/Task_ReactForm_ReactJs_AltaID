import { useState, useRef } from "react";
// import "./formInput.css";
import styles from "./styles.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errMsg, type, options, onChange, id, ...inputProps } = props;
  // console.log(props)
  const handleFocus = (e) => {
    setFocused(true);
  };

  const fileRef = useRef(null);

  return (
    <div className={styles.form_input}>
      <label>{label}</label>
      {
        type !== "radio" && type !== "file" && type !== "select" ? (
          <>
            <input
              className={styles.input_form}
              {...inputProps}
              type={type}
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
            />
            <span>{errMsg}</span>
          </>
        ) : (
          ""
        )
      }
      {
        type === "radio" ? (
          <>
            {
              options.map((option, optionIdx) => (
                <div key={optionIdx} style={{ display: "flex" }}>
                  <input
                    // className={styles.input_form}
                    {...inputProps}
                    type={type}
                    value={option}
                    onChange={onChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                  />
                  <div style={{ marginLeft: "1rem" }}>{option}</div>
                </div>
              ))
            }
          </>
        ) : (
          ""
        )
      }
      {
        type === "select" ? (
          <select
            {...inputProps}
            type={type}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          >
            <option value="">Pilih</option>
            {
              options.map((option, optionIdx) => (
                <option key={optionIdx} value={option}>{option}</option>

              ))
            }
          </select>
        ) : (
          ""
        )
      }
      {
        type === "file" ? (
          <input
            {...inputProps}
            type={type}
            onChange={onChange}
            ref={fileRef}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
        ) : (
          ""
        )
      }


    </div>
  );
};

export default FormInput;
