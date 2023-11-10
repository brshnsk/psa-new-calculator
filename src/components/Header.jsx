import { Link } from "react-router-dom";
import { ToggleButton } from "./ToggleButton";
import { useEffect } from "react";
import "./style.css"
export const Header = ({setIsDarkMode, isDarkMode, title, path, btnInfo}) => {

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
      };

     useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
          body.classList.add("dark-mode");
        } else {
          body.classList.remove("dark-mode");
        }
      }, [isDarkMode]);
      
      return (
        <div className="position-relative">
          <div className="position-absolute top-0 start-0">
            <ToggleButton onClick={handleToggle} />
          </div>
          <div className="position-absolute top-0 end-0">
            <Link to={path} className="btn btn-outline-info"> {/* Add btn-sm class */}
              {btnInfo}
            </Link>
          </div>
          <h1>{title}</h1>
          <hr />
        </div>
      );
}
