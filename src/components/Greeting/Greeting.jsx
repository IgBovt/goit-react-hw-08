import css from './Greeting.module.css';
import img from '../../img/img.jpg';

export default function Greeting() {
  return (
    <div>
      <div className={css.tittleContainer}>
        <h1>Your phonebook</h1>
        <span role="img" aria-label="Greeting icon" className={css.icon}>
          💁‍♀️
        </span>
      </div>
      <div className={css.container}>
        <p className={css.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          asperiores eius nobis saepe quis voluptatibus facere expedita tempora,
          hic similique natus minima fugit doloribus molestiae dolorum sed
          debitis tempore consectetur repellat, accusantium aspernatur incidunt
          doloremque. Quod doloribus beatae, molestiae voluptatibus, numquam
          recusandae accusamus voluptatem aliquam, sed vero consectetur esse
          harum? Quod doloribus beatae, molestiae voluptatibus, numquam
          recusandae accusamus voluptatem aliquam, sed vero consectetur esse
          harum?
        </p>
        <img src={img} alt="Phonebook" width={500} height={400} />
      </div>
    </div>
  );
}
