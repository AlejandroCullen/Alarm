import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";


function Minutes({minutes, upNum, minNum}) {


  return (
    <section className="minutes">
      <h2>Minutes left</h2>
      <section className="minutes-buttons">
        <FontAwesomeIcon 
				icon={faArrowUp} 
				className="arrowUp" 
				id="min-up" 
				onClick={upNum}  
				/>
        <span>{minutes}</span>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="arrowDown"
          id="min-down"
					onClick={minNum}
        />
      </section>
    </section>
  );
}

export default Minutes;
