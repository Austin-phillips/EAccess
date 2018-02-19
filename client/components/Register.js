import React from 'react';
import { Form, Item, Label, Input, Button } from 'native-base';
import { Text } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { register } from '../actions/user';

class Register extends React.Component {
  state = { name: '', email: '', password: '', passwordConfirmation: '' }

  register = () => {
    let { name, email, password, passwordConfirmation } = this.state
    let { history, dispatch } = this.props;
    if (this.passwordsMatch()) {
      dispatch(register( name, email, password, passwordConfirmation, history));
    }
  }

  passwordsMatch = () => {
    let { password, passwordConfirmation } = this.state;
    return password === passwordConfirmation
  }

  handleChange = (type, val) => {
    this.setState({ [type]: val });
  }

  showButton = () => {
    let { name, email, password, passwordConfirmation } = this.state;
    let show = false;
    if (name.length && email.length && password.length && passwordConfirmation.length && this.passwordsMatch())
      show = true;
    return show;
  }

  render() {
    let { name, email, password, passwordConfirmation } = this.state;
    return (
      <Form>
        {this.passwordsMatch() ? null : <Text>Passwords Do Not Match</Text>}
        <Item floatingLabel>
          <Label>Full Name</Label>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(val) => this.handleChange('name', val)}
          />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(val) => this.handleChange('email', val)}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            onChangeText={(val) => this.handleChange('password', val)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password Confirmation</Label>
          <Input
            onChangeText={(val) => this.handleChange('passwordConfirmation', val)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </Item>
        {this.showButton() ?
          <Button primary block onPress={this.register}>
            <Text style={styles.loginButton}>Register</Text>
          </Button> : null
        }
        <Link to="/login">
          <Text style={styles.link}>Already have an account?</Text>
        </Link>
      </Form>
    )
  }
}

const styles = {
  link: {
    textAlign: 'center',
    paddingTop: 40,
  },
  loginButton: {
    color: 'white'
  }
}

export default connect()(Register);
