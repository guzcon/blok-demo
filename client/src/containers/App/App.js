import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PropertyList from '../../components/PropertyList/PropertyList';

class App extends Component {

  state = {
    list: []
  };

  componentDidMount = () => {
    this.loadProperties()
      .then(res => this.setState({list: res.payload}));
  }

  loadProperties = async () => {
    const response = await fetch('/properties');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const {list} = this.state;
    return (
      <div className="App">
        <Header title="Find your next home with Blok" />
        {this.state.list &&
          <PropertyList
            list={list}
          />
        }
      </div>
    );
  }
}

export default App;
