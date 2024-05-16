import React, { useState } from 'react';
import FormSelection from './FormSelection';
import StrengthSelection from './StrengthSelection';
import PackingSelection from './PackingSelection';
import './Results.css';

const Results = ({ data }) => {
    const [selectedForm, setSelectedForm] = useState(null);
    const [selectedStrength, setSelectedStrength] = useState(null);
    const [selectedPacking, setSelectedPacking] = useState(null);

    const handleFormSelect = (form) => {
        setSelectedForm(form);
        setSelectedStrength(null);
        setSelectedPacking(null);
    };

    const handleStrengthSelect = (strength) => {
        setSelectedStrength(strength);
        setSelectedPacking(null);
    };

    const handlePackingSelect = (packing) => {
        setSelectedPacking(packing);
    };

    const getStrengths = () => {
        if (!selectedForm) return [];
        return Object.keys(data[0].salt_forms_json[selectedForm] || {});
    };

    const getPackings = () => {
        if (!selectedForm || !selectedStrength) return [];
        return Object.keys(data[0].salt_forms_json[selectedForm][selectedStrength] || {});
    };

  
    

    const getLowestPrice = () => {
        if (!selectedForm || !selectedStrength || !selectedPacking) return null;
        const products = data[0].salt_forms_json[selectedForm][selectedStrength][selectedPacking];
        if (!products) return null;
        const prices = [products]
            ?.map((product) => product.selling_price)
            .filter((price) => price !== undefined);
        return prices.length ? Math.min(...prices) : null;
    };

    if (!data) return null;

    return (
        <div className="results-container">
            {data.map((salt, index) => (
                <div key={index} className="product-details">
                    <h3>{salt.salt}</h3>
                    <p>Most Common: {salt.most_common.Form} - {salt.most_common.Strength} - {salt.most_common.Packing}</p>
                    <FormSelection 
                        forms={salt.available_forms}
                        selectedForm={selectedForm}
                        onSelectForm={handleFormSelect}
                    />
                    <StrengthSelection 
                        strengths={getStrengths()}
                        selectedStrength={selectedStrength}
                        onSelectStrength={handleStrengthSelect}
                    />
                    <PackingSelection 
                        packings={getPackings()}
                        selectedPacking={selectedPacking}
                        onSelectPacking={handlePackingSelect}
                        lowestPrice={getLowestPrice()}
                    />
                </div>
            ))}
        </div>
    );
};

export default Results;
