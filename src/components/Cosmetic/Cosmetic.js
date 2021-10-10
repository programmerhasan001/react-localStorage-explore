import React from 'react';
import { addToDb, deleteDb } from '../../utilities/fakeDb';

const Cosmetic = (props) => {
    const { name, id, price } = props.Cosmetic;
    const handlePurchase = id => {
        // set to local storage
        addToDb(id);
    }
    const handleRemove = id => {
        deleteDb(id);
    }
    return (
        <div style={{ border: '2px solid seagreen', padding: '0px 0px 20px 0px', borderRadius: '10px' }}>
            <h2>Name: {name}</h2>
            <p>id: {id}</p>
            <h4>Price: {price}</h4>
            <button style={{ marginRight: '5px' }} onClick={() => handlePurchase(id)}>Add</button>
            <button onClick={() => handleRemove(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;