import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import PropertyList from '../PropertyList/PropertyList';
import styles from './App.module.css';

class App extends Component {

  state = {
    list: null,
    isLoading: true
  };

  componentDidMount = () => {
    this.loadProperties()
      .then(res => this.setState({list: res.payload, isLoading: false}) )
      .catch(err => console.log(err));
  }

  loadProperties = async () => {
    const response = await fetch('/properties');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const {list, isLoading} = this.state;
    return (
      <div className="App">
        <Header title="Find your next home with Blok" />
        {list &&
          <PropertyList
            list={list}
          />
        }
        {!list && isLoading &&
          <div style={{marginTop: '200px', textAlign: 'center'}}><Spinner /></div>

        }
        {!list && !isLoading &&
          <p className={styles.error_container}>Some error occurred. Try again by refreshing the page.</p>
        }
      </div>
    );
  }
}

export default App;
