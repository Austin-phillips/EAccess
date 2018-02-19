import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Drawer,
} from 'native-base';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import FooterMenu from './components/FooterMenu';
import ProtectedRoute from './components/ProtectedRoute';

class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Container>
            <Header>
              <Body>
                <Title>EAccess</Title>
              </Body>
              <Right />
            </Header>
            <Content>
                <View>
                  <Switch>
                    <ProtectedRoute exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                  </Switch>
                </View>
            </Content>
            <FooterMenu />
          </Container>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
