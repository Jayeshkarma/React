import React, { Component } from 'react'

  class RefsDemo extends Component {
      constructor(props) {
          super(props)
      
           this.inputRef = React.createRef()
           this.cbRef= null
           this.setCbRef = element =>{
               this.cbRef =element
           }
               
          }

          componentDidMount(){
               if(this.cbRef)
               {
                   this.cbRef.focus()
               }
            //     this.inputRef.current.focus()
            //   console.log(this.inputRef);
          }
       handler=()=>{
           alert(this.inputRef.current.value)
       }
      
    render() {
        return (
            <div>
            <label>Input Field</label>
              <input type="text"   ref={this.inputRef} />
              <input type="text"   ref={this.setCbRef} />
              <button onClick={this.handler}>Click here</button>
            </div>
        )
    }
}
  
export default RefsDemo
 