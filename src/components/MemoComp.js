import React from 'react'

function MemoComp({name}) {
    console.log('rendering Memo component')
    return (
        <div>
          {name }     
        </div>
    )
}

export default React.memo(MemoComp)
