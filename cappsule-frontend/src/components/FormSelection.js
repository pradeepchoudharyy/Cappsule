import React from 'react';
import './Selection.css';

const FormSelection = ({ forms, selectedForm, onSelectForm }) => {
    return (
        <div className="dynamic-selection">
            <h4>Form</h4>
            <div>
                {forms.map((form, index) => (
                    <button 
                        key={index} 
                        onClick={() => onSelectForm(form)}
                        className={selectedForm === form ? 'selected' : ''}
                    >
                        {form}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FormSelection;
