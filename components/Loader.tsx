// DEPLOYMENT FIX
// components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <style jsx>{`
                .loader {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    width: 100vw;
                    background-color: white;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 9999;
                }
                .spinner {
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #3498db;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Loader;
