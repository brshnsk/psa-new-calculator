import { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";
import { CardSen } from "./CardSen";
import { ToggleButton } from "./components/ToggleButton";
import { VideoFrame } from "./components/VideoFrame";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";

export const App = () => {
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [senValue, setSenValue] = useState(null);

  const onSearchSubmit = (event) => {
    event.preventDefault();
    setSenValue(searchText);
  };

  

  return (
    <>
      <div className="container text-center mt-5">
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} title="PSA Calculator" path="/psa-new-calculator/sen" btnInfo="Convertir Sensibilidad"/>
        <div className="row justify-content-center">
          <form onSubmit={onSearchSubmit}>
            <div
              className="input-group input-group-lg mx-auto mt-3"
              style={{ width: "50%" }}
            >
              <input
                type="text"
                placeholder="Ingrese sensibilidad base"
                className={`form-control text-center ${
                  isDarkMode ? "dark-input" : ""
                }`}
                name="searchText"
                autoComplete="off"
                pattern="^[0-9]\d*(\.\d+)?$"
                value={searchText}
                onChange={onInputChange}
                disabled={!!senValue}
                title="Ingrese un número"
              />
              <p
                className={`mt-2 ${
                  isDarkMode ? "dark-text" : "text-body-secondary"
                }`}
              >
                Consiga una sensibilidad donde pueda dar una vuelta de 360°
                moviendo el mouse de punta a punta del mousepad.
              </p>
            </div>
            {!!senValue ? (
              ""
            ) : (
              <button
                className="btn btn-outline-primary btn-lg mt-3"
                disabled={!searchText}
              >
                Empezar
              </button>
            )}
          </form>
        </div>
        <div className="row mt-3">
          {!!senValue ? (
            <CardSen
              senValue={senValue}
              setSenValue={setSenValue}
              isDarkMode={isDarkMode}
            />
          ) : (
            ""
          )}
        </div>
        {!senValue ? (
          <div className="row mx-auto">
            <h3>Ejemplo</h3>
            <VideoFrame videoUrl="\videos\video.mp4" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
