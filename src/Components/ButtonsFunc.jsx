import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRefresh } from '@fortawesome/free-solid-svg-icons'



function ButtonsFunc({play, reset}) {

  return (
    <section className='buttons-func'>
      <FontAwesomeIcon icon={faPlay} className='play' onClick={play} />
      <FontAwesomeIcon icon={faPause} className='pause' onClick={play}/>
      <FontAwesomeIcon icon={faRefresh} className='refresh' onClick={reset}/>
    </section>
  )
}

export default ButtonsFunc