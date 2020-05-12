import React from 'react'; //JSXを使うために読み込む

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Jiro" }
  ]
  return (
     <div>
       {
         profiles.map((profile,index) => {
           return <User name={profile.name} age={profile.age} key={index} />
         })
       }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I'm {props.name}, and {props.age} years old!</div>
}
User.defaultProps = {
  age: 1
}

export default App;