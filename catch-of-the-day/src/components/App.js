import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
    //state is defined on load
    state = {
        fishes:{},
        order:{}
    };

    addFish = (fish) => {
        //1. Take a copy of the existing state
        const fishes = { ...this.state.fishes};

        //2. Add our new fish to the fishes variable 
        fishes[`fish${Date.now()}`] = fish;

        //3. Set new fishes object to state
        this.setState({fishes});

    };

    loadFishes = () => {
        this.setState({ fishes:sampleFishes })
    };
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Da Kine Best Seafood Laddat" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadFishes={this.loadFishes} />
            </div>
        )
    }
}

export default App;