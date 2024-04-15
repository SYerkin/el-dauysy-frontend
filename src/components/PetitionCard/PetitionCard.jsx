import React from 'react';
import Templateimage from '../../assets/images/temp-image.jpg';

function PetitionCard() {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '500px', margin: '20px auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <img src={Templateimage} alt="Petition" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            </div>

            <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: '0 0 10px 0' }}>Петиция аты</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>
                    Петицияның анықтамасы
                </p>
                <button style={{ background: '#007BFF', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                    Петицияға қол қою
                </button>
            </div>
        </div>
    );
}

export default PetitionCard;
