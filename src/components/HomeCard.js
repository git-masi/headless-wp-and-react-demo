import React from 'react';
import styles from './HomeCard.module.css';

const HomeCard = props => {
  return (
    <article className={styles.card}>
      <img src="https://images.unsplash.com/photo-1548652857-5d6ca02aea68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"/>
      <section className={styles.cardText}>
        <h3>title</h3>
        <p>content snippet</p>
      </section>
    </article>
  )
}

export default HomeCard;