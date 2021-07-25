import React, { Component } from 'react';
import './styles/Chips.css';
import './styles/News.css';
import Chips from './components/Chips';
import { connect } from 'react-redux';
import index from './reducer';
import * as chipsActions from './actions/ChipsActions';
import moment from 'moment';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  ViberShareButton,
  EmailShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  EmailIcon,
  ViberIcon,
} from 'react-share';

class App extends Component {
  constructor(props) {
    super(prompt);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    const url = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=03d5f8d6fe09449b8a30f8cfa4f701e9";
    fetch(url).then(response => {
      return response.json().then((jsonResp) => {
        if (jsonResp.articles !== null && jsonResp.articles !== undefined && jsonResp.articles.length > 0) {
          this.setState({ articles: jsonResp.articles })
        }
      })
    }
    );
  }

  getNewsDescription(data) {
    console.log('getNewsDescription', data.source)
  }


  getDateTime = (date) => {
    let dateTime = new Date(date);
    return moment(dateTime).startOf('hour').fromNow()
  }

  render() {
    console.log("articles", this.state.articles)
    return (
      <div className="news-feed-container">
        {
          this.state.articles.map((data, index) => {
            return (
              <div className="row news-list" onClick={this.getNewsDescription.bind(this, data)}>
                <div className="col-sm-2">
                  <img className="news-image" src={data.urlToImage} alt={index} />
                </div>
                <div className="col-sm-5">

                  <b> {data.title} </b> <br />
                  <p> {data.description} </p>
                </div>
                <div className="col-sm-12 share-buttons">
                  <div>
                    <WhatsappIcon size={32} round={true} />
                  </div>
                  <div>
                    <FacebookIcon size={32} round={true} />
                  </div>
                  <div>
                    <TelegramIcon size={32} round={true} />
                  </div>
                  <div>
                    <TwitterIcon size={32} round={true} />
                  </div>
                  <span>
                    {this.getDateTime(data.publishedAt)}
                  </span>
                </div>
              </div>
            )

          })
        }
      </div >
    );
  }
}

function convertStateToProps(state) {

  return {
    chipsList: state.chipsReducer.chipsList,
    chips: state.chipsReducer.chips,
    highLightList: state.chipsReducer.highLightList
  }
}

export default connect(convertStateToProps, { ...chipsActions })(App);




