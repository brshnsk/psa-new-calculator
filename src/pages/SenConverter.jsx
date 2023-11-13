import React, { useState } from 'react'
import { Header } from '../components/Header'
import Select from 'react-select';
import { useForm } from '../hooks/useForm';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import '@sweetalert2/theme-dark/dark.css';

export const SenConverter = () => {

  const options = [
    { value: 'cs', label: 'CS' },
    { value: 'valo', label: 'Valo' }
  ];

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const [senResult, setSenResult] = useState(null);

  const [selectedOption1, setSelectedOption1] = useState(options[0]);
  const [selectedOption2, setSelectedOption2] = useState(options[1]);

  const [isDarkMode, setIsDarkMode] = useState(true);


 
  const handleResult = () => {

    if (selectedOption1.value == selectedOption2.value ) {
  
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Deben ser juegos distintos",
          showConfirmButton: false,
          timer: 1500,
        });
        return;

    }
    
    const parsedSearchText = parseFloat(searchText);

    if (isNaN(parsedSearchText)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ingrese un número válido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (selectedOption1.value === 'cs') {
      setSenResult((parsedSearchText * 0.314).toFixed(3));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu sensibilidad fue transformada de Counter-Strike a Valorant con éxito. ",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (selectedOption1.value === 'valo'){
      setSenResult((parsedSearchText * 3.182).toFixed(3));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu sensibilidad fue transformada de Valorant a Counter-Strike con éxito. ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  
  const handleReset = () => {
    setSenResult(null)
    onResetForm()
  }

  const darkStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#1E1E1E',
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#1E1E1E' : 'black',
      color: 'FFFFFF',
    }),
  };


  const whiteStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'lightblue' : 'white',
      color: 'black',
    }),
  };
  


  return (

    <div className="container text-center mt-5">
      <Header
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        title="Sen Converter"
        path="/psa"
        btnInfo="PSA Calculator" />

      <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '75vh' }}>
        <div className="col-md-4">
          {selectedOption1.value === 'cs' ? (
            <img className='img-fluid' src="./icon/cs-icon.png" alt="CS Icon" />
          ) : (
            <img className='img-fluid' src="./icon/valo-icon.webp" alt="Valo Icon" />
          )}
          <Select
            options={options}
            value={selectedOption1}
            onChange={setSelectedOption1}
            styles={`${isDarkMode ? darkStyles : whiteStyles}`}
            className='mt-3'
          />
          <hr />

        </div>


        <div className="col-md-4">

          {!senResult ?
            <>
              <h1>Transformar a</h1>
              <input
                type="text"
                placeholder="Ingrese su sensibilidad"
                className={`form-control text-center ${isDarkMode ? "dark-input" : ""
                  }`}
                name="searchText"
                autoComplete="off"
                pattern="^[0-9]\d*(\.\d+)?$"
                value={searchText}
                onChange={onInputChange}
                title="Ingrese un número"
              />
            </>
            : ''
          }
          {
            senResult
              ? <div className={`card w-50 mx-auto ${isDarkMode ? "custom" : ""}`}>
                  <div className="card-body">
                    <h1 className="card-title">{senResult}</h1>
                    <p className="card-text fs-bold">Esta sería la sensibilidad resultante.</p>
                  </div>
                </div>
              : ''
          }

          {
            (!senResult && searchText) &&<button className='btn btn-outline-primary mt-3' onClick={handleResult}>Mostrar Resultado</button>
          }

          { 
            senResult && <button className='btn btn-outline-primary mt-3' onClick={handleReset}>Reiniciar</button>
          }
        </div>



        <div className="col-md-4">
          {selectedOption2.value === 'cs' ? (
            <img className='img-fluid' src=".\icon\cs-icon.png" alt="CS Icon" />
          ) : (
            <img className='img-fluid' src=".\icon\valo-icon.webp" alt="Valo Icon" />
          )}
          <Select
            options={options}
            value={selectedOption2}
            onChange={setSelectedOption2}
            className='mt-3'
            styles={`${isDarkMode ? darkStyles : whiteStyles}`}

          />
          <hr />
        </div>
      </div>
    </div>
  )
}