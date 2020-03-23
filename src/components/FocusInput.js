import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {
     constructor(props) {
         super(props)
     
        this.componentRef= React.createRef()
     }

     handler=()=>{
         this.componentRef.current.infocus()
     }
     
    render() {
        return (
            <div>
              <Input ref={this.componentRef}/>
              <button onClick={this.handler}>foucus dalo</button>
            </div>
        )
    }
}

export default FocusInput
