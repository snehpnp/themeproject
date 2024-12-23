import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../Themes/ThemeProvider';
import { Formik, Form, Field } from 'formik';

const Settings = () => {
    const [isSidebar, setIsSidebar] = useState(true); // Toggle between sidebar and header
    const theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : { fontColor: '#ffffff' };

    // Load initial sidebar/header preference from localStorage
    useEffect(() => {
        const isSidebarLocal = localStorage.getItem('isSidebar');
        if (isSidebarLocal !== null) {
            setIsSidebar(JSON.parse(isSidebarLocal));
        }
    }, []);

    // Function to toggle sidebar/header view
    const toggleSidebarHeader = () => {
        setIsSidebar(prevState => {
            const newState = !prevState;
            localStorage.setItem('isSidebar', newState);
            return newState;
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Settings Page</h2>
            
            {/* Toggle Sidebar/Header Button */}
            <button onClick={toggleSidebarHeader} style={{ marginBottom: '20px' }}>
                Toggle {isSidebar ? 'Header' : 'Sidebar'}
            </button>

            {/* Theme Settings Form */}
            <Formik
                initialValues={{
                    sidebarColor: theme.sidebarColor || '#ffffff',
                    navbarColor: theme.navbarColor || '#ffffff',
                    headerColor: theme.fontColor || '#ffffff',
                }}
                onSubmit={(values) => {
                    localStorage.setItem('theme', JSON.stringify(values)); 
                    window.location.reload(); 
                }}
            >
                {({ values }) => (
                    <Form>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Sidebar Color: </label>
                            <Field name="sidebarColor" type="color" />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Navbar Color: </label>
                            <Field name="navbarColor" type="color" />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Font Color: </label>
                            <Field name="fontColor" type="color" />
                        </div>

                        <button type="submit" style={{ marginTop: '20px' }}>
                            Apply Changes
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Settings;
