import React, { Component } from 'react'

 class Form extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 userName :"",
                 comment :" ",
                 topic :""

            }
        }

        changeUser = event => {
            this.setState({
                userName : event.target.value,

                
            } )

            
        }

        changeComment = event => {
            this.setState({
                comment : event.target.value,

                
            } )

            
        }

        changeTopic = event => {
            this.setState({
               topic : event.target.value,

                
            } )

            
        }
        handleSubmit= event=>{
            alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
            event.preventDefult()
        }
cd
        
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
              <div>
              <label>userName</label>
               <input type="text" value={this.state.userName} onChange={this.changeUser}/>
               <label>comment</label>
               <textarea value={this.state.comment}  onChange={this.changeComment} ></textarea>
               <label>LanguAGE</label>
               <select value={this.state.topic} onChange={this.changeTopic} >
                   <option value="eng">English</option>
                   <option value="hin">hindi</option>
               </select>
               <input type="Submit" />
              </div>
           </form>
        )
    }
}

export default Form
