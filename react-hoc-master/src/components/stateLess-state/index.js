//Stateful Component
import React from 'react';
class StatefulLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  handleClick=()=> {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return <a 
          style={{ color: this.state.active ? 'red' : 'black' }}
          onClick={this.handleClick}
         >
           Stateful Link
         </a>
  }
}


// Stateless Component
class Nav extends React.Component {
  constructor() {
    super()
    this.state={activeRouter: 'home'}
  }
  handleSwitch(router) {
    this.setState({activeRouter: router})
  }
  render() {
    return (
    <ul>
        <StatelessLink activeRouter={this.state.activeRouter} router='home' handleClick={this.handleSwitch.bind(this)} />
        <StatelessLink activeRouter={this.state.activeRouter} router='blog' handleClick={this.handleSwitch.bind(this)} />
        <StatelessLink activeRouter={this.state.activeRouter} router='about' handleClick={this.handleSwitch.bind(this)} />
    </ul>
    )
  }
}

class StatelessLink extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick =()=> {
    this.props.handleClick(this.props.router)
  }
  render() {
    const active = this.props.activeRouter===this.props.router
    return (
        <li>
            <a 
              style={{ color: active ? 'red' : 'black' }}
              onClick={this.handleClick}
             >
                Stateless Link
            </a>
    </li>
    )
  }
}

export default class FullAndLess extends React.Component {
      render(){

        return(
            <div>
                <StatefulLink/>
                <Nav/>
            </div>
          )
      }
}

