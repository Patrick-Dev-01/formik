import './App.css';
import { Formik } from 'formik'
import { useCallback, useState } from 'react';
import { mask as masker, unMask } from 'remask';
import { removeMask } from './removeMask'; 


const InputMask = ({ mask, onChange, value, ...props }) => {
  const handleChange = ev => {
    const originalValue = unMask(ev.target.value);
    // const maskedValue = masker(originalValue, mask);
    onChange(originalValue);
  };

  const handleValue = masker(value, mask);

  return <input {...props} onChange={handleChange} value={handleValue} />;
};

function App() {
  const [array, setArray] = useState([
      {
        faixaInicial: 30,
        faixaFinal: 90,
        value: ''
      },
      {
        faixaInicial: 30,
        faixaFinal: 90,
        value: ''
      },
      {
        faixaInicial: 30,
        faixaFinal: 90,
        value: ''
      },
  ])

  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if(!values.email){
            errors.email = 'Required'
          }
          else if(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ){
            errors.email = 'Invalid email adress';
          }
          return errors
        }}
        onSubmit={(values, setSubmiting ) => {     
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            console.log(JSON.stringify(values, null, 2))
          }, 400);
        }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSumitting
          }) => (
            <form onSubmit={handleSubmit}>
              <input 
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password} 
              />
              {errors.password && touched.password}

              {/* <input type="text" 
                placeholder="CPF"
                onChange={onChange}
                value={teste}
              /> */}

                <InputMask 
                  type="text"
                  name="doc"
                  mask={["999.999.999-99", "99.999.999/9999-99"]}
                  placeholder="Digite o CPF ou CNPJ"
                  onChange={setValue}
                  value={value}
                />
           

              <button type="submit" disabled={isSumitting}>
                  Submit
              </button>
            </form>
          )}
      </Formik>
    </div>
  );
}

export default App;
