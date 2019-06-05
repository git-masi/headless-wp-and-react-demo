import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import styles from './Cities.module.css';

class Cities extends Component {
  state = {
    imgURL: '',
    author: '',
  }

  componentDidMount() {
    const { featured_media, author } = this.props.city;
    const getImageURL = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

    Promise.all([getImageURL, getAuthor]).then(res => this.setState({
      imgURL: res[0].data.media_details.sizes.full.source_url,
      author: res[1].data.name,
    }));
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <main className={styles.main}>

        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Cities;