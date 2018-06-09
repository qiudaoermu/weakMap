
import React, { Component } from 'react';


class Child extends Component{

		constructor(){
			super()
			this.state = {
				name:''
			}
		}
		componentWillReceiveProps(props){
				console.log(this.props)
				console.log(props)
				console.log('子组件接受props改变')
				this.setState({name:5})
		}
		render(){
			console.log('子组件render')
			return (<div>
				<div>{this.state.name}</div>
				{this.props.name}
			</div>)
		}
}

class Compontunmount extends Component{
	constructor(){
		super()
			this.state = {
				star:'star'
			}
	}
	componentWillUnmount(){
			this.setState({star:'moon'}) //无效
	}
	render(){
		return(
			<div>{this.state.star}</div>
			)
	}
}

export default class Cirlce extends Component {
		constructor(){
			super()
				this.state = {
					one:1
				}
		}
		componentWillMount(){
			this.setState({
				one:2
			})
		}

		componentDidMount(){
			console.log('componentDidMount')
			this.setState({
				one:3
			})
		}

		shouldComponentUpdate(){
			console.log('shouldComponentUpdate')
			this.setState({one:10})
			return true
		}
		componentWillUpdate(){
			//不能设置setState
			console.log('componentWillUpdate')
		}
		componentDidUpdate(){
			console.log('componentDidUpdate')
			//不能设置setState
		}
		onclick=()=>{
			this.setState({one:4})
		}
		render(){
			return(
					<div>	{this.state.one>5?"":<Compontunmount />}
							<div onClick={this.onclick}>{this.state.one}</div>
							<Child name = {this.state.one}/>
					</div>
				)
		}
}
