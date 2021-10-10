import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('../../Cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Shop Cosmetics!!</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px', width: '95%', margin: 'auto' }}>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        Cosmetic={cosmetic}></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;