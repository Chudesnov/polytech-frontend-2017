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
      <Header key='header' />,
      <PageComponent key='pageComponent'/>,
      <Footer key='footer' />
    ];
  }
}

export default App;
