import React, {Component} from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

  /* Header폴더에 index파일이 있기 때문에 
  Header/Header와 같이 사용하지 않아도 된다. */
class App extends Component {
  render() {
    
    return(
      <>
        <Router />
        <GlobalStyles />
      </> /* Fragments : 원하는 만큼 컴포넌트를 Return할 수 있게 해준다.*/
    );
  }
}

export default App;
