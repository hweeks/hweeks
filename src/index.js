import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import App from './composite/App';
import * as theme from './themes';

const ThemeSelect = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
`;

const ThemeSelectWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;

class AppWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    const themes = ['dark', 'light', 'mirage'];
    this.handleThemeSelect = this.handleThemeSelect.bind(this);
    this.toggleThemer = this.toggleThemer.bind(this);
    this.state = {
      theme: theme[themes[Math.floor(Math.random() * 3) % 3]],
      menuShown: false,
    };
  }
  handleThemeSelect({ target }) {
    if (theme[target.value]) {
      this.setState({
        theme: theme[target.value],
        menuShown: false,
      });
    }
  }
  toggleThemer() {
    this.setState({
      menuShown: !this.state.menuShown,
    });
  }
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={this.state.theme}>
          <React.Fragment>
            <App />
            <ThemeSelectWrapper>
              <button onClick={this.toggleThemer}>
                theme
              </button>
              <ThemeSelect display={this.state.menuShown}>
                <button onClick={this.handleThemeSelect} value="light">light</button>
                <button onClick={this.handleThemeSelect} value="dark">dark</button>
                <button onClick={this.handleThemeSelect} value="mirage">mirage</button>
              </ThemeSelect>
            </ThemeSelectWrapper>
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

const load = () => {
  ReactDOM.render(
    <AppWrapper />,
    document.querySelector('#home'),
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
