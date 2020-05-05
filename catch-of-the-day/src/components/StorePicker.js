import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        // stop the dom from refreshing
        event.preventDefault();

        // capture the input
        const storeName = this.myInput.current.value;

        // pass the value to Router
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Welcome to Bryan Lee's Kitchen</h2>
                <input 
                    type="text"
                    ref={this.myInput} 
                    required 
                    placeholder="Who You?" 
                    defaultValue={getFunName()}
                />
                <button type="submit">Enter da Kitchen</button>
            </form>
        )
    }    
}

export default StorePicker;