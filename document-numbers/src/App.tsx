import React, { useState } from 'react';
import './App.css';
import Form, { FormState } from './Components/Form';
import { FormConfigurationContext, FormConfigurationContextInterface } from './FormContext';

type Props = {
  formConfiguration: FormConfigurationContextInterface;
}

function App({ formConfiguration }: Props) {
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
      <FormConfigurationContext.Provider value={formConfiguration}>
        <Form formState={formState} setFormState={setFormState} />
      </FormConfigurationContext.Provider>
    </div>
  );
}

export default App;
