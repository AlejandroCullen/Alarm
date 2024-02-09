import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Interval({left, upLeft, minLeft}) {





  return (
    <section className="interval">
      <h2>Interval</h2>
      <section className="interval-buttons">
        <FontAwesomeIcon
          icon={faArrowUp}
          className="arrowUp"
          id="interval-up"
          onClick={upLeft}
        />
        <span className="interval-count">{left}</span>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="arrowDown"
          id="interval-down"
          onClick={minLeft}
        />
      </section>
    </section>
  );
}

export default Interval;
