import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  });

  return (
    <div className="App">
      <Form formState={formState} setFormState={setFormState} />

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Project</label>
          <input type='project' {...register('project', {
            required: true
          })} name='project' />
          {errors.project?.type === "required" && (
            <p className="errorMsg">Project number is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Document Revision</label>
          <input type='docrev' {...register('docrev', {
            required: true
          })} name='docrev' />
          {errors.docrev?.type === "required" && (
            <p className="errorMsg">Document revision is required.</p>
          )}
        </div>
        <div className="form-\control">
          <label>Document Title</label>
          <input type='doctitle' {...register('doctitle', {
            required: true
          })} name='doctitle' />
          {errors.doctitle?.type === "required" && (
            <p className="errorMsg">Document title is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Purpose of Issue</label>
          <input type='purpOfIssue' {...register('purpOfIssue', {
            required: true
          })} name='purpOfIssue' />
          {errors.purpOfIssue?.type === "required" && (
            <p className="errorMsg">Document purpose of issue is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Asset Class</label>
          <input type='assetclass' {...register('assetclass', {
            required: true
          })} name='assetclass' />
          {errors.assetclass?.type === "required" && (
            <p className="errorMsg">Document asset case required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Information Type</label>
          <input type='infotype' {...register('infotype', {
            required: true
          })} name='infotype' />
          {errors.infotype?.type === "required" && (
            <p className="errorMsg">Document type is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Discipline</label>
          <input type='discipline' {...register('discipline', {
            required: true
          })} name='discipline' />
          {errors.discipline?.type === "required" && (
            <p className="errorMsg">Document discipline of issue is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Suitability</label>
          <input type='suitability' {...register('suitability', {
            required: true
          })} name='suitability' />
          {errors.suitability?.type === "required" && (
            <p className="errorMsg">Suitability code is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>TfL Security Classification</label>
          <input type='securityclass' {...register('securityclass', {
            required: true
          })} name='securityclass' />
          {errors.securityclass?.type === "required" && (
            <p className="errorMsg">Security class is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Project Stage</label>
          <input type='projstage' {...register('projstage', {
            required: true
          })} name='projstage' />
          {errors.projstage?.type === "required" && (
            <p className="errorMsg">Project stage is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Handover Information</label>
          <input type='handoverinfo' {...register('handoverinfo', {
            required: true
          })} name='handoverinfo' />
          {errors.handoverinfo?.type === "required" && (
            <p className="errorMsg">Handover information is required.</p>
          )}
        </div>
        <div className="form-control">
          <label>Health &amp; Safety File</label>
          <input type='hsf' {...register('hsf', {
            required: true
          })} name='hsf' />
          {errors.hsf?.type === "required" && (
            <p className="errorMsg">REQUIRED!!!</p>
          )}
        </div>
        <div className="form-control">
          <label>Requested by:</label>
          <input type='requested' {...register('requested', {
            required: true
          })} name='requested' />
          {errors.requested?.type === "required" && (
            <p className="errorMsg">REQUIRED!!! - Who needs to see this number??</p>
          )}
        </div>
        <div className="form-control">
          <label>Project Email Address</label>
          <input type='emailAddress' {...register('emailAddress', {
            required: true
          })} name='emailAddress' />
          {errors.emailAddress?.type === "required" && (
            <p className="errorMsg">Email address is required.</p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Send</button>
        </div>
      </form> */}

    </div>
  );
}

export default App;
