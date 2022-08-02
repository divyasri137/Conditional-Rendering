import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  //       If - Else Condition
  //       renderAuthButton = () => {
  //         const {isLoggedIn} = this.state
  //         if (isLoggedIn === true) {
  //           return <button>Logout</button>
  //         }
  //         return <button>Login</button>
  //       }

  //       render() {
  //         return (
  //           <div className="container">
  //             <Welcome greeting="Hello" name="User" />
  //             {this.renderAuthButton()}
  //           </div>
  //         )
  //       }
  //     Using Element variable

  //     render() {
  //       const {isLoggedIn} = this.state
  //       let authButton
  //       if (isLoggedIn === true) {
  //         authButton = <button>Logout</button>
  //       } else {
  //         authButton = <button>Login</button>
  //       }
  //       return (
  //         <div className="container">
  //           <Welcome greeting="Hello" name="User" />
  //           {authButton}
  //         </div>
  //       )
  //     }

  //   Using Ternary Operator
  //   render() {
  //     const {isLoggedIn} = this.state
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
  //       </div>
  //     )
  //   }

  //Using Adding Logic inside render()
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
