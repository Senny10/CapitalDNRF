import React, { useState } from 'react';
import './App.css';
import Form, { FormState } from './Components/Form';

function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };

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
      <Form formState={formState} setFormState={setFormState} />


    </div>
  );
}

export default App;
