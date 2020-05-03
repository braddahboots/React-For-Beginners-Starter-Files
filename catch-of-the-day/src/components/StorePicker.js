import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Welcome to Bryan Lee's Kitchen</h2>
                <input type="text" required placeholder="Your Name"/>
                <button type="submit">Enter the Kitchen -></button>
            </form>
        )
    }    
}

export default StorePicker;