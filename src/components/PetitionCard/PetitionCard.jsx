import React from 'react';
import Templateimage from '../../assets/images/temp-image.jpg';

function PetitionCard({petition}) {
    // description
    //     :
    //     "жол"
    // id
    //     :
    //     "LtG3rRlbZZTsVCqJJO1a"
    // signatureCount
    //     :
    //     5
    // title
    //     :
    //     "жол"
    console.log(petition)
    const { title, description, signatureCount, createdAt } = petition ? petition : [];

    const formattedDate = createdAt ? new Date(createdAt.seconds * 1000).toLocaleDateString("ru-RU") : "Неизвестная дата";


    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '500px', margin: '20px auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <img src={Templateimage} alt="Petition" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            </div>

            <div style={{textAlign: 'left'}}>
                <h3 style={{margin: '0 0 10px 0'}}>{title ? title : "Петиция аты"}  </h3>
                <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
                    {description ? description : "Петицияның анықтамасы"}
                </p>
                <p><strong>Қолдар саны:</strong> 0 / {signatureCount ? signatureCount : "петиция саны"}</p>
                {formattedDate && <p><strong>Уақыты:</strong> {formattedDate}</p>}

                <button style={{
                    background: '#007BFF',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Петицияға қол қою
                </button>
            </div>
        </div>
    );
}

export default PetitionCard;
