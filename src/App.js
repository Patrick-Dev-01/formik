import './App.css';
import { Formik } from 'formik'
import { useState } from 'react';

function App() {
  const [array, setArray] = useState([
      {
        faixaInicial: 30,
        faixaFinal: 90,
      },
      {
        faixaInicial: 30,
        faixaFinal: 90,
      },
      {
        faixaInicial: 30,
        faixaFinal: 90,
      },
  ])

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
