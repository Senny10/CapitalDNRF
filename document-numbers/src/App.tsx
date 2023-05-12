import React, { useState } from 'react';
import './App.css';
import Form, { FormState } from './Components/Form';
import { FormContext } from './FormContext';

export type Project = {
  number: string;
  name: string;
  email: string;
}
type Props = {
  projects: Project[];
}
function App({ projects }: Props) {
  // this is global state so you should set it up in outside of your application.
  // make your app "stateless" (receive props and render, or use a provider/consumer pattern)
  window.localStorage.setItem('formConfig', JSON.stringify({
    project: {
      options: projects.map(p => ({ label: p.name, value: p.number }))
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
    assetClass: {
      options: [{ label: 'Asset Class not Applicable', value: 'Asset Class not Applicable' }]
    },
    infotype: {
      options: [{ label: 'DOC: Document', value: 'Document' }]
    },
    discipline: {
      options: [{ label: 'TEST', value: 'TEST' }]
    },
    suitability: {
      options: [{ label: 'A: Authorised and Accepted', value: 'A' }]
    },
    securityClass: {
      options: [{ label: 'TfL Confidential', value: 'Confidential' }]
    },
    projectStage: {
      options: [{ label: 'Stage 0: Initial Proposition', value: '0' }]
    },
    handoverInformation: {
      options: [{ label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      ],
    },
    hsf: {
      options: [{ label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      ],
    },
  }));

  const formConfig = JSON.parse(window.localStorage.getItem('formConfig') || '{}');
  if (!window.localStorage.getItem('formInitialState')) {
    window.localStorage.setItem('formInitialState', JSON.stringify({
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
    }));

  }
  const initialState = JSON.parse(window.localStorage.getItem('formInitialState') || '{}');

  const [formState, setFormState] = useState<FormState>(initialState);

  const onUpdate = (data: any) => {
    setFormState(data);
    window.localStorage.setItem('formInitialState', JSON.stringify(data));
  }

  return (
    <div className="App">
      <FormContext.Provider value={formConfig}>
        <Form formState={formState} setFormState={onUpdate} />
      </FormContext.Provider>
    </div>
  );
}

export default App;
