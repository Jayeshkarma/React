import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
    render() {
        console.log("=====pure");
        return (
            <div>
               pure   {this.props.name}
            </div>
        )
    }
}

export default PureComp
