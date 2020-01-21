import React, { Component } from 'react';
import Contacts from './components/contacts';
import { adalApiFetch  } from './adalConfig';

    class App extends Component {

      state = {
        contacts: []
      }

      componentDidMount() {
        adalApiFetch(fetch, 'https://localhost:44391/manasymbols', {})
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

      render() {
        return (
          <Contacts contacts={this.state.contacts} />
        );
      }
    }

    export default App;