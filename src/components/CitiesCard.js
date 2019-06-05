import React, { Component } from 'react';
import axios from 'axios';
import styles from './CitiesCard.module.css';
  
class CitiesCard extends Component {
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
    const { city } = this.props;
    const { imgURL, author} = this.state;

    return (
      <article className={styles.card}>
        <img src={imgURL}/>
        <section className={styles.cardText}>
          <h3>{city.title.rendered}</h3>
          <h4 className={styles.author}>{author} <span>{city.date.replace(/[T](\S*)$/, '')}</span></h4>
          <div dangerouslySetInnerHTML={{__html: city.content.rendered}}></div>
        </section>
      </article>
    )
  }
}

export default CitiesCard;