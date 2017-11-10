import React, { Component } from 'react';
import router from './core/decorators/router';
import Header from './core/ui/header/Header';
import Footer from './core/ui/footer/Footer';

const myRouter = router(undefined);

@myRouter
class App extends Component {
  render() {
    const PageComponent = this.props.component;
    return [
      <Header />,
      <PageComponent />,
      <Footer />
    ];
  }
}

export default App;
