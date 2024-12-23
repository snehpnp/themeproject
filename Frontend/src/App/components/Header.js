import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Themes/ThemeProvider';

const Header = ({ toggleSidebar }) => {
    
    const [activeTab, setActiveTab] = useState(0); // Track active tab

    const theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : { headerColor: '#ffffff' };

    console.log("theme",theme);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div style={{ backgroundColor: theme.headerColor, padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Tab buttons */}
                <div>
                    {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'].map((tab, index) => (
                        <button
                            key={index}
                            style={{
                                margin: '0 10px',
                                padding: '10px 20px',
                                backgroundColor: activeTab === index ? '#ccc' : '#fff',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Sidebar toggle button */}
                <button 
                    onClick={toggleSidebar} 
                    style={{
                        padding: '10px 20px', 
                        backgroundColor: '#f44336', 
                        color: '#fff', 
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Toggle Sidebar
                </button>
            </div>

            {/* Active tab content (optional, can be dynamic) */}
            <div style={{ marginTop: '1rem' }}>
                <h3>{`You have selected ${['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'][activeTab]}`}</h3>
            </div>
        </div>
    );
};

export default Header;
