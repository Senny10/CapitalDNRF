import React, { useState } from 'react';
import './App.css';
import Form, { FormState } from './Components/Form';
import { FormContext } from './FormContext';

function App() {
  window.localStorage.setItem('formConfig', JSON.stringify({
    project: {
      options: [{ value: 'TEST', label: 'TEST LABEL' }]
    },
    documentRevision: {
      options: [
        { label: 'P01 - Drawing Draft', value: 'P01' },
        { label: 'C01 - Technical Document Draft', value: 'C01' },
        { label: '01 - External Technical Document', value: '01' },
      ]
    },
    purposeOfIssue: {
      options: [
        { label: 'For Information', value: 'For Information' },
        { label: 'For Acceptance', value: 'For Acceptance' },
      ],
    },
    projectStage: {
      options: [{label: '', value: ''}]
    }
  }))

  const formConfig = JSON.parse(window.localStorage.getItem('formConfig') || '{}');

  const [formState, setFormState] = useState<FormState>({
    project: '',
    documentTitle: '',
    documentRevision: '',
    purposeOfIssue: '',
    assetClass: '',
    infotype: '',
    discipline: '',
    suitability: '',
    securityClass: '',
    projectStage: '',
    handoverInformation: '',
    hsf: '',
    requested: '',
    emailAddress: '',

  });

  return (
    <div className="App">
      <FormContext.Provider value={formConfig}>
        <Form formState={formState} setFormState={setFormState} />
      </FormContext.Provider>
    </div>
  );
}

export default App;
