import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
 
  return (
    <main className="App">
     <form method="post" id="dnrf-form">
      <label htmlFor="project">
        Project
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </label>
      <label htmlFor='doc_rev'>
          Document Revision
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='doc_title'>
          Document Title
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='purpose_of_issue'>
          Purpose of Issue
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='asset'>
          Asset Class
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='information_type'>
          Information Type
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='discipline'>
          Discipline
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='suitability'>
          Suitability
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='security_class'>
          TfL Security Classificaton
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='project_stage'>
          Project Stage
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='handover'>
          Handover Information
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='hs_file'>
        Health &amp; Safety File
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='requested_by'>
          Requested by
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label htmlFor='project_email'>
          Project Email Address
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
     </form>
      
    </main>
  );
}

export default App;
