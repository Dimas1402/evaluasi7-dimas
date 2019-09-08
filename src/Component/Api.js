import React from "react";

import axios from "axios";

export default class Api extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get(`https://api.rss2json.com/v1/api.json?rss_url=http://rss.detik.com/`)
      .then(res => {
        const { items } = res.data;
        this.setState({ items });
        console.log(items);
      });
  }

  render() {
    return (
      <ul>
        {this.state.items.map(items => (
          <div>
            <hr></hr>
            <h1>{items.title}</h1>
            <img src={items.thumbnail} />
            <p>{items.description}</p>
          </div>
        ))}
      </ul>
    );
  }
}
