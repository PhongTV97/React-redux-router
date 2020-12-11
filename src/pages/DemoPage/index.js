/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import Post from '../../component/post';
import './styles.css';

class DemoPage extends Component {
  render() {
    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: 5 }}>
          <div className="jumbotron text-center mb-0">
            <h1 className="title"> My Page </h1>
            <p>Resize this responsive page to see the effect!</p>
          </div>
          <Header />
        </div>
        <div className="container" style={{ position: 'relative', top: 350 }}>
          {/* <div className="quote"></div> */}
          <div className="row">
            <div className="col-md-4">
              <h2>About Me</h2>
              <h5>Photo of me:</h5>
              <div className="view-fake-image">
                <p>Fake Image</p>
              </div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
              <h2>Some Links</h2>
              <p>Lorem ipsum dolor sit ame.</p>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/abc">Active</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/abc">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/abc">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/abc">Disabled</a>
                </li>
              </ul>
              <hr class="d-sm-none"></hr>
            </div>
            <div className="col-md-8">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DemoPage;