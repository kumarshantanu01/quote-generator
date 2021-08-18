import React from 'react';
//  { useEffect }
  
import axios from 'axios';
import './App.css'

class App extends React.Component{
    state = { advice: " "};

    componentDidMount() {
      this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get(`https://api.adviceslip.com/advice`)
        .then((response) => {

            const {advice} = response.data.slip;
            
            this.setState({advice});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        // const { advice } = this.state;
        return(
            <div className="app">
            <div className="card">
              <h1 className="heading">{this.state.advice}</h1>
              <button className="button" onClick={this.fetchAdvice}>
                <span>GIVE ME ADVICE!</span>
              </button>
            </div>
          </div>
    );
};
}

export default App;


// const App = () => {
//     useEffect(() => {
//         async function getData(){
//             const res = await axios.get(`https://api.adviceslip.com/advice`);
            
//             console.log(res.data.slip.advice);
//         }

//         getData();
//     }
//     )

//     return(
//         <>
//         <h1>hello</h1>
//         {/* <h3>{data.advice}</h3> */}
//         {/* <h3>{res.advice}</h3> */}
//         {/* <h2>{advice}</h2> */}
//         {/* <h2>{this.quote.data.slip.advice} </h2> */}
//         <h2>advice</h2>
//         {/* {App.res.data.slip.advice} */}
//         </>
//     )
// }

