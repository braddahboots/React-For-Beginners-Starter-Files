import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = event => {
        event.preventDefault();

        const fish = {
            fishName: this.nameRef.current.value,
            fishPrice: parseFloat(this.priceRef.current.value), 
            fishStatus: this.statusRef.current.value,
            fishDesc: this.descRef.current.value,
            fishImage: this.imageRef.current.value
        };

        this.props.addFish(fish);

        event.currentTarget.reset(); 
    };

    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Still Get!</option>
                    <option value="unavailable">No More</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
                <button type="submit"> + Add Fish!!!</button>
            </form>
        )
    }
}

export default AddFishForm; 