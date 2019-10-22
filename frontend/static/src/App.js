import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  handleChange() {

  }

  handleImageChange() {

  }

  render() {
    return (
      <form>
        <input type="text" name='title' value= {this.state.title} onChange={this.handleChange} />
        <input type="file" name='image'  onChange={this.handleImageChange} />
        <button>Upload</button>
      </form>
    )
  }
}

export default App;
