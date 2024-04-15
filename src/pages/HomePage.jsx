import React, { useState } from 'react';
import Layout from "../components/Layout/Layout";
import Button from "@mui/material/Button";
import Petitions from "../components/Petitions/Petitions";
import HeroBlock from "../components/HeroBlock/HeroBlock";

function HomePage() {
    const [activeTab, setActiveTab] = useState('petiitions');

    return (
        <Layout>
            <HeroBlock />
            <div style={{padding: '20px'}}>
                <h1>Басты бет</h1>
                <nav style={{marginBottom: '20px', display: 'flex', gap: '10px'}}>
                    <Button
                        variant="outlined"
                        onClick={() => setActiveTab('petiitions')}
                        style={{textTransform: 'none', borderRadius: '20px'}}
                    >
                        Петициялар
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setActiveTab('feed')}
                        style={{textTransform: 'none', borderRadius: '20px'}}
                    >
                        Жаңалықтар
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setActiveTab('myprofile')}
                        style={{textTransform: 'none', borderRadius: '20px'}}
                    >
                        Менің профильім
                    </Button>
                </nav>
                <div>
                    {activeTab === 'petiitions' && <div>Петициялар</div>}
                    {activeTab === 'feed' && <Petitions /> }
                    {activeTab === 'myprofile' && <></>}
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
