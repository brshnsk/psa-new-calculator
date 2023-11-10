import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import '@sweetalert2/theme-dark/dark.css';
import { VideoFrame } from "./components/VideoFrame";


export const CardSen = ({ senValue, setSenValue, isDarkMode }) => {
  
  const [baseValue, setBaseValue] = useState(senValue);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);


  const [loop, setLoop] = useState(1);
  const [clicks, setClicks] = useState(0);

  const [minMultiplication, setMinMultiplication] = useState(0.5)
  const [maxMultiplication, setMaxMultiplication] = useState(1.5)
  

  const onMinValueClick = () => {
    setClicks(clicks + 1)
    const newValue = (+baseValue + minValue) / 2;
    setBaseValue(+newValue.toFixed(2));
    setLoop((loop) => loop + 1);
  };
  const onMaxValueClick = () => {
    setClicks(clicks + 1)
    const newValue = (+baseValue + maxValue)/2
    setBaseValue(+newValue.toFixed(2));
    setLoop((loop) => loop + 1);
  };

  const handleResetClick = () => {
    setBaseValue(0);
    setLoop(0);
    setSenValue(null);
    
  };
  
  useEffect(() => {
    if (clicks >= 1 && clicks <= 4) {
      setMinMultiplication((minMultiplication) => +(minMultiplication + 0.1).toFixed(2));
      setMaxMultiplication((maxMultiplication) => +(maxMultiplication - 0.1).toFixed(2));
    }else if (clicks >= 4){
      setMinMultiplication((minMultiplication) => +(minMultiplication + 0.05).toFixed(2))
      setMaxMultiplication((maxMultiplication) => +(maxMultiplication - 0.05).toFixed(2))
    }
  }, [clicks])


  useEffect(() => {
    
    setMinValue(parseFloat((baseValue * minMultiplication).toFixed(2)));
  }, [baseValue]);

  useEffect(() => {
    
    setMaxValue(parseFloat((baseValue * maxMultiplication).toFixed(2)));
  }, [baseValue]);

  if (loop == 7) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu sensibilidad esta lista",
      showConfirmButton: false,
      timer: 1500,
    });

    return (
      <div className={`card w-50 mx-auto ${isDarkMode ? "custom" : ""}`}>
        <div className="card-body">
          <h1 className="card-title">{baseValue}</h1>
          <p className="card-text fs-bold">Esta es tu sensibilidad más cercana a perfecta.</p>
          <button
            className={`btn btn-lg ${
              isDarkMode ? "btn-outline-primary" : "btn-secondary"
            }`}
            onClick={handleResetClick}
          >
            Reiniciar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h4>Bucle {loop} de 7</h4>
      <div className="card-group">
        <div className={`card ${isDarkMode ? "custom" : ""}`}>
          <div className="card-body">
            <h5 className="card-title">{minValue}</h5>
            <p className="card-text">Sensibilidad Baja</p>
            <a
              href="#min"
              className={`btn ${
                isDarkMode ? "btn-outline-primary" : "btn-secondary"
              }`}
              onClick={onMinValueClick}
            >
              Escoger
            </a>
          </div>
        </div>
        <div className={`card ${isDarkMode ? "custom" : ""}`}>
          <div className="card-body">
            <h5 className="card-title">{baseValue}</h5>
            <p className="card-text">Sensibilidad Base</p>
            <button
            className={`btn btn-sm ${
              isDarkMode ? "btn btn-outline-danger" : "btn-secondary"
            }`}
            onClick={handleResetClick}
          >
            Reiniciar
          </button>
          </div>
        </div>
        <div className={`card ${isDarkMode ? "custom" : ""}`}>
          <div className="card-body">
            <h5 className="card-title">{maxValue}</h5>
            <p className="card-text">Sensibilidad Alta</p>
            <a
              href="#max"
              className={`btn ${
                isDarkMode ? "btn-outline-primary" : "btn-secondary"
              }`}
              onClick={onMaxValueClick}
            >
              Escoger
            </a>
          </div>
        </div>
      </div>
      <h6 className={`py-3 ${isDarkMode ? "dark-text" : "text-body-secondary"}`}>
        Debe probar la sensibilidad baja y alta usando corta, media y larga distancia, de dos a tres minutos hasta terminar los bucles.
      </h6>

      <div className="row">
        <div className="col-md-4">
          <VideoFrame videoUrl="\videos\closeRange.mp4" />
          <h6>Corta distancia</h6>
        </div>
        <div className="col-md-4">
          <VideoFrame videoUrl="\videos\midRange.mp4" />
          <h6>Media distancia</h6>
        </div>
        <div className="col-md-4">
          <VideoFrame videoUrl="\videos\longRange.mp4" />
          <h6>Larga distancia</h6>
        </div>
      </div>
    </div>
  );
};
