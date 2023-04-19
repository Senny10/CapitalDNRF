import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="App">
     <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Project</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Document Revision</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Document Title</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Purpose of Issue</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Asset Class</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Information Type</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Discipline</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Suitability</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>TfL Security Classification</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Project Stage</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Handover Information</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Health &amp; Safety File</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Requested by:</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label>Project Email Address</label>
          <input type="text" {...register("project")} name='project' />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Send</button>
        </div>
     </form>
      
    </div>
  );
}

export default App;
