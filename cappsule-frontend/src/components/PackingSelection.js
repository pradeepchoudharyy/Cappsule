import React from 'react';
import './Selection.css';

const PackingSelection = ({ packings, selectedPacking, onSelectPacking, lowestPrice }) => {
    return (
        <div className="dynamic-selection">
            <h4>Packing</h4>
            <div>
                {packings.map((packing, index) => (
                    <button 
                        key={index} 
                        onClick={() => onSelectPacking(packing)}
                        className={selectedPacking === packing ? 'selected' : ''}
                    >
                        {packing}
                    </button>
                ))}
            </div>
            <h5 className="price-display">
                {lowestPrice ? `From ₹${lowestPrice}` : 'No stores selling this product near you'}
            </h5>
        </div>
    );
};

export default PackingSelection;
