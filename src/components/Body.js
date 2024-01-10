// Body.js

import React, { useState } from 'react';
import '../index.css'; // Import the external CSS file

const Body = () => {
  const [formData, setFormData] = useState({
    sex: '',
    age: '',
    cancerType: '',
    supplements: '',
    cancerInformation: '', // New property for cancer information
  });
  const [storedFormData, setStoredFormData] = useState(null); // New state for storing form data
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setStoredFormData(formData);

    setShowSuggestions(true);

    setFormData({
      sex: '',
      age: '',
      cancerType: '',
      supplements: '',
      cancerInformation: '',
    });
  };

  return (
    <div className="bodyContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <label className="label">Sex:</label>
        <input
          type="text"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          className="input"
        />

        <label className="label">Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="input"
        />

        <label className="label">Type of Cancer:</label>
        <input
          type="text"
          name="cancerType"
          value={formData.cancerType}
          onChange={handleChange}
          className="input"
        />

        <label className="label">Information about Cancer:</label>
        <textarea
          name="cancerInformation"
          value={formData.cancerInformation}
          onChange={handleChange}
          className="textarea"
        />

        <label className="label">Uploaded Supplements:</label>
        <textarea
          name="supplements"
          value={formData.supplements}
          onChange={handleChange}
          className="textarea"
        />

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>

      {showSuggestions && (
        <div className="suggestions-container">
          <p>{`Eidolon's Suggestions:`}</p>
          <p>{`Based on the input provided, these are my suggestions:`}</p>
          <ul>
            <li>{`Introduce genetic sequences that encode proteins or peptides with high affinity for the EGFR mutation. This will ensure the virus selectively binds to and infects cancer cells exhibiting this mutation. Example: A fragment of cetuximab (an anti-EGFR antibody) engineered to be expressed on the surface of the virus.`}</li>
            <li>{`Incorporate genetic modifications that enable the virus to either produce PD-L1 inhibitor proteins or disrupt the PD-L1 expression mechanism in the cancer cells. This will enhance immune system detection and response to these cells. Example: A gene encoding for an anti-PD-L1 antibody fragment, similar to those used in immunotherapy drugs like atezolizumab or durvalumab.`}</li>
            <li>{`Modify the viral genome to include a selective replication mechanism, activating predominantly in cells with the identified EGFR mutation. This will minimize the impact on healthy cells. Example: Engineering the virus to enter cells through receptors that are overexpressed in NSCLC cells, such as certain EGFR mutations.`}</li>
            <li>{`Introduce a 'suicide gene' into the virus’s genetic structure, allowing for external control and deactivation of the virus if required. This adds an important safety layer to the therapy. Example: Engineering the virus to contain a caspase gene that can be activated by a safe, commonly used drug.`}</li>
          </ul>

<p>{`Form Data:`}</p>
      <p>{`Sex: ${storedFormData.sex}`}</p>
      <p>{`Type of Cancer: ${storedFormData.cancerType}`}</p>
      <p>{`Information about Cancer: ${storedFormData.cancerInformation}`}</p>
      <p>{`Uploaded Supplements: ${storedFormData.supplements}`}</p>
        </div>
      )}
      
    </div>
  );
};

export default Body;
