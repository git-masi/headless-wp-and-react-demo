import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import HomeCard from './HomeCard';
import styles from './Home.module.css';
  
class Home extends Component {
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
        {cities.map(c => <HomeCard key={c.id} city={c}/>)}
      </section>

    return (
      <Fragment>
        <Navbar />
        <header className={styles.header}>
          <h1>Cycling Japan</h1>
        </header>
        <main>
          {cards}
          <section className={styles.about}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Hello, we’re cockneys old man in pub knavish rogue, rugged driving gloves wario theodore roosevelt knavish rogue hello, we’re cockneys old man in pub Sergeant major. Sterling casual style funny walk tricky sneezes will you do the fandango, funny walk et sodales cum will you do the fandango tom selleck des lynam tricky sneezes sterling quis iron tache dolor ipsum 118 118 casual style kris kristofferson.</p>
          </section>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Home;