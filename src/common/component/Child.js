import React, { useEffect } from 'react'

let checkCount = 0;
function Child() {
    useEffect(()=>{
        checkCount ++
    })
    
return <div>checkCount: {checkCount}</div>
}

export default Child;