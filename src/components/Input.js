import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()

    }

    infocus(){
      this.inputRef.current.focus() 
    }
    
    render() {
        return (
            <div> 
              <input type="text" ref={this.inputRef}/> 
             
            </div>
        )
    }
}

export default Input
