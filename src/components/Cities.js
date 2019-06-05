import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CitiesCard from './CitiesCard';
import axios from 'axios';
import styles from './Cities.module.css';

class Cities extends Component {
  state = {
    imgURL: '',
    author: '',
  }

  state = {
    cities: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios.get('/wp-json/wp/v2/cities')
      .then(res => this.setState({
        cities: res.data,
        isLoaded: true,
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { cities, isLoaded } = this.state;

    const cards = !isLoaded ?
      null :
      <section className={styles.cardArea}>
        {cities.map(c => <CitiesCard key={c.id} city={c}/>)}
      </section>

    return (
      <Fragment>
        <Navbar />
        <main className={styles.main}>
          {cards}
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Cities;