import { Component } from 'react';
import FragmentOne from './FragmentOne';
import FragmentTwo from './FragmentTwo';

export default class App extends Component {
  render() {
    return (
      <div>
        <FragmentOne />
        <FragmentTwo />
      </div>
    );
  }
}
