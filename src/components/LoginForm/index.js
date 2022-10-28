import './index.css'
import {Component} from 'react'

class LoginForm extends Component {

  state = {username: '',password: '',showSubmitError: false,errorMessage: '',}

  onSubmitSuccess = () => {
    window.location.assign('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  displayUsernameDetails = () => {
    const {username} = this.state
    return (
      <>
        <label className="label-element" htmlFor="username">USERNAME</label>
        <input type="text" id="username" placeholder="Username" className="username-input-filed" value={username} onChange={this.onChangeUsername}/>
      </>
    )
  }

  displayPasswordDetails = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-element" htmlFor="password">PASSWORD</label>
        <input type="password" placeholder="Password" id="password" className="password-input-filed" value={password} onChange={this.onChangePassword}/>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    return (
        <div className='bg-login-container'>
            <div className="login-container">
            <img src="https://i.postimg.cc/cLxgCZhH/women-g70f24899a-1280.png" alt="website login" className="login-img"/>
            <div className="login-form-container">
            <div>
                <img src="https://i.postimg.cc/yN05tYyn/clipart882723.png" alt="website logo" className="login-website-logo"/>
                <form className="form-container" onSubmit={this.submitForm}>
                <div className="input-container">{this.displayUsernameDetails()}</div>
                <div className="input-container">{this.displayPasswordDetails()}</div>
                <button type="submit" className="login-button">Login</button>
                {showSubmitError && (
                    <p className="error-message">*{errorMessage}</p>
                )}
                </form>
            </div>
            </div>
        </div>
        </div>
    )
  }
}

export default LoginForm