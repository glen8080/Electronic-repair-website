import React from 'react'

function NewError(props) {
  return (
    <div>
        <div className="errorContainer">
           <div className="newsContainer">
           <img src="images/error.svg" alt="error" style={{height:300,width:300}} />
            <p className='errorSentence'>{props.errorText}</p>
           </div>
        </div>
    </div>
  )
}

export default NewError