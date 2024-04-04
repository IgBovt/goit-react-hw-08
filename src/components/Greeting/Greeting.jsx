import css from './Greeting.module.css';
// import img from '../../img/img.jpg';
import { MdOutlineContactPhone } from 'react-icons/md';

export default function Greeting() {
  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.tittleContainer}>
          <h1>Your phonebook</h1>
          <span role="img" aria-label="Greeting icon" className={css.icon}>
            💁‍♀️
          </span>
        </div>
        <div>
          <p className={css.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            asperiores eius nobis saepe quis voluptatibus facere expedita
            tempora, hic similique natus minima fugit doloribus molestiae
            dolorum sed debitis
          </p>
          <p className={css.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            asperiores eius nobis saepe quis voluptatibus facere expedita
            tempora, hic similique natus minima fugit doloribus molestiae
            dolorum sed debitis tempore consectetur repellat, accusantium
            aspernatur incidunt doloremque.
          </p>
        </div>
      </div>
      <MdOutlineContactPhone className={css.img} />
    </div>
  );
}
