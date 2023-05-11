import React, { ChangeEventHandler } from 'react';
import Input from './Input';

export interface FormState {
    project: string;
    documentTitle: string;
    documentRevision: string;
    purposeOfIssue: string;
    assetClass: string;
    infotype: string;
    discipline: string;
    suitability: string;
    securityClass: string;
    projectStage: string;
    handoverInformation: string;
    hsf: string;
    requested: string;
    emailAddress: string;
}

interface FormProps {
    formState: FormState;
    setFormState: (newValue: FormState) => void;
}

const Form = ({ formState, setFormState }: FormProps) => {
    const updateFormValue =
        (name: string): ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =>
            (event) => {
                setFormState({
                    ...formState,
                    [name]: event.target.value,
                });
            };
    const handleSubmit = (e) => {
                e.preventDefault();
                console.log('You clicked submit.');
              };
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <Input
                        label='Project'
                        name='project'
                        value={formState.project}
                        placeholder='Select the project this document belongs to'
                        type='drop-down'
                        updateValue={updateFormValue('project')}
                    />
                    <Input
                        label='Document Title'
                        name='documentTitle'
                        value={formState.documentTitle}
                        placeholder='Give your document a title'
                        updateValue={updateFormValue('documentTitle')}
                    />
                    <Input
                        label='Document Revision'
                        name='documentRevision'
                        value={formState.documentRevision}
                        placeholder='What revision stage is the document at?'
                        type='drop-down'
                        updateValue={updateFormValue('documentRevision')}
                    />
                    <Input
                        label='Purpose of Issue'
                        name='purposeOfIssue'
                        value={formState.purposeOfIssue}
                        type='drop-down'
                        updateValue={updateFormValue('purposeOfIssue')}
                    />
                    <Input
                        label='Asset Class'
                        name='assetClass'
                        value={formState.assetClass}
                        type='drop-down'
                        updateValue={updateFormValue('assetClass')}
                    />
                    <Input
                        label='Information Type'
                        name='infotype'
                        value={formState.infotype}
                        type='drop-down'
                        updateValue={updateFormValue('infotype')}
                    />
                    <Input
                        label='Discipline'
                        name='discipline'
                        value={formState.discipline}
                        type='drop-down'
                        updateValue={updateFormValue('discipline')}
                    />
                    <Input
                        label='Suitability'
                        name='suitability'
                        value={formState.suitability}
                        type='drop-down'
                        updateValue={updateFormValue('suitability')}
                    />
                    <Input
                        label='Security Class'
                        name='securityClass'
                        value={formState.securityClass}
                        type='drop-down'
                        updateValue={updateFormValue('securityClass')}
                    />
                    <Input
                        label='Project Stage'
                        name='projectStage'
                        value={formState.projectStage}
                        type='drop-down'
                        updateValue={updateFormValue('projectStage')}
                    />
                    <Input
                        label='Handover Information'
                        name='handoverInformation'
                        value={formState.handoverInformation}
                        type='drop-down'
                        updateValue={updateFormValue('handoverInformation')}
                    />
                    <Input
                        label='Health & Safety File'
                        name='hsf'
                        value={formState.hsf}
                        type='drop-down'
                        updateValue={updateFormValue('hsf')}
                    />
                    <Input
                        label='Requested By:'
                        name='requested'
                        value={formState.requested}
                        updateValue={updateFormValue('requested')}
                    />
                    <Input
                        label='Email Address'
                        name='emailAddress'
                        required
                        value={formState.emailAddress}
                        updateValue={updateFormValue('emailAddress')}
                    />
                </div>
               
            </div>
          
        </form>
    );
};

export default Form;
