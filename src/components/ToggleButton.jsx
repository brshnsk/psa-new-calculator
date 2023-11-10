
import "./style.css"
export const ToggleButton = (props) => {

  return (

    <label className="switch">
      <input type="checkbox" onClick={props.onClick}/>
      <span className="slider"></span>
  </label>
  );
}
