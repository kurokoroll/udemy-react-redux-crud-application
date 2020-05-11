import React, { Component } from 'react'; //JSXを使うために読み込む

class App extends Component{
  render(){
    return(
      /* returnで返すものは、1つのタグでないといけない */
      /* 余計なHTMLが出力されないよう <React.Fragment> を使う */
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("Change!")}} />
      </React.Fragment>
    )
  }
}

export default App;