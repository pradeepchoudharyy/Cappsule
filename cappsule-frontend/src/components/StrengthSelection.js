import React from 'react';
import './Selection.css';

const StrengthSelection = ({ strengths, selectedStrength, onSelectStrength }) => {
    return (
        <div className="dynamic-selection">
            <h4>Strength</h4>
            <div>
                {strengths.map((strength, index) => (
                    <button 
                        key={index} 
                        onClick={() => onSelectStrength(strength)}
                        className={selectedStrength === strength ? 'selected' : ''}
                    >
                        {strength}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StrengthSelection;
