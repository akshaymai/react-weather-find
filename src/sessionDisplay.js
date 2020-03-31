import React from 'react'
import './sessionDisplay.css'

const checkSession=(lat,month)=>{
 if(month>2 && month <9)
 {
     return lat>0 ? 'summer':'winter'
 }
else{
    return lat<0 ?'winter':'summer'
}
}




const sessionConfig={

summer:{
text:'ITS TOO HOT',
iconName:'sun'
},
winter:{
    text:'ITS TOO COLD',
    iconName:'snowflake'
}

}

const SessionDisplay=(props)=>{

    
  const session=checkSession(props.Lat,new Date().getMonth())
 

const {text,iconName}=sessionConfig[session]

return(
<div className={`session-display ${session}`}>

    <i className={`icon-left massive ${iconName} icon`}></i>

<h1>{text}</h1>
  <i className={`icon-ritgh massive ${iconName} icon`} />
  </div>
)


}

export default SessionDisplay