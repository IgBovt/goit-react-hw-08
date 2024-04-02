import css from './Greeting.module.css';

export default function Greeting() {
  return (
    <div>
      <div className={css.tittleContainer}>
        <h1>Your phonebook</h1>
        <span role="img" aria-label="Greeting icon" className={css.icon}>
          💁‍♀️
        </span>
      </div>

      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        asperiores eius nobis saepe quis voluptatibus facere expedita tempora,
        hic similique natus minima fugit doloribus molestiae dolorum sed debitis
        tempore consectetur repellat, accusantium aspernatur incidunt
        doloremque. Quod doloribus beatae, molestiae voluptatibus, numquam
        recusandae accusamus voluptatem aliquam, sed vero consectetur esse
        harum?
      </p>
      <p className={css.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum et
        illo non vel rerum odit, maxime, vitae dolorem molestiae error
        cupiditate! Quasi eaque est provident voluptates adipisci? Cumque
        quisquam laboriosam ullam, inventore ipsa ducimus quaerat dolorum natus
        quasi amet ab earum vero, laborum cum quibusdam qui? Illo ab facere a
        dolore, labore quisquam modi voluptatum esse nisi accusantium architecto
        qui veritatis molestiae doloribus quas placeat, suscipit asperiores
        fugiat quam sint perspiciatis ducimus! Officiis quam vel inventore fuga
        dolorum, voluptatibus possimus.
      </p>
    </div>
  );
}
