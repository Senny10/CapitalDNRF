import React, {ChangeEventHandler} from 'react';

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

    return (
        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <Input
                        label='Project'
                        name='project'
                        value={formState.project}
                        placeholder='Select the project this document belongs to'
                        type='drop-down'
                        options={[{ label: 'test', value: 'test' }]}
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
                        options={[
                            { label: 'P01 - Drawing Draft', value: 'P01' },
                            { label: 'C01 - Technical Document Draft', value: 'C01' },
                            { label: '01 - External Technical Document', value: '01' },
                        ]}
                        updateValue={updateFormValue('documentRevision')}
                    />
                    <Input
                        label= 'Purpose of Issue'
                        name= 'purposeOfIssue' 
                        value= {formState.purposeOfIssue}
                        type= 'drop-down'
                        options={[
                            {label: 'For Information', value: 'For Information'},
                            {label: 'For Acceptance', value: 'For Acceptance'},
                    ]}
                        updateValue={updateFormValue('purposeOfIssue')}
                    />
                    <Input
                        label='Asset Class'
                        name='assetClass'
                        value= {formState.assetClass}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('assetClass')}
                    />
                    <Input
                        label='Information Type'
                        name='infotype'
                        value= {formState.infotype}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('infotype')}
                    />
                    <Input
                        label='Discipline'
                        name='discipline'
                        value= {formState.discipline}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('discipline')}
                    />
                    <Input
                        label='Suitability'
                        name='suitability'
                        value= {formState.suitability}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('suitability')}
                    />
                    <Input
                        label='Security Class'
                        name='securityClass'
                        value= {formState.securityClass}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('securityClass')}
                    />
                    <Input
                        label='Project Stage'
                        name='projectStage'
                        value= {formState.projectStage}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('projectStage')}
                    />
                    <Input
                        label='Handover Information'
                        name='handoverInformation'
                        value= {formState.handoverInformation}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('handoverInformation')}
                    />
                    <Input
                        label='Health & Safety File'
                        name='hsf'
                        value= {formState.hsf}
                        type='drop-down'
                        options={[]}
                        updateValue={updateFormValue('hsf')}
                    />
                    <Input
                        label='Requested By:'
                        name='requested'
                        value= {formState.requested}
                        updateValue={updateFormValue('requested')}
                    />
                    <Input
                        label='Email Address'
                        name='emailAddress'
                        value='emailAddress'
                        updateValue={updateFormValue('emailAddress')}
                    />
                </div>
            </div>
        </form>
    );
};

export default Form;
