import React from 'react';
class Loading extends React.Component{
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default Loading;