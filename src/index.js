import React from 'react'
import ReactDom from 'react-dom'
import SessionDisplay from './sessionDisplay'
import Loadings from './Loading'

class Weather extends React.Component{
  
 state={
     lat:null,
     long:null,
     errMessage:''
 }

 componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(pog=>this.setState({lat:pog.coords.latitude,long:pog.coords.longitude}),
    err=>this.setState({errMessage:err.message}))
 }
  
render(){
 
 
 
if(this.state.errMessage &&!this.state.lat && !this.state.long)
{
    return(

  <SessionDisplay   err={this.state.errMessage}  />

    )
}
  
if(!this.state.errMessage &&this.state.lat && this.state.long)
{
    return(

    <SessionDisplay Lat={this.state.lat} />
 
    )

}
  


return <Loadings message="please accept your location" />
}


}

ReactDom.render( <Weather />,document.querySelector('#root'))