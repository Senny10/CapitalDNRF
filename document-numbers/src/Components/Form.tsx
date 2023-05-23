import React, { ChangeEventHandler, useContext } from 'react';
import {FormConfigurationContext} from '../FormContext';
import DropDown from './DropDown';
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
    const formConfiguration = useContext(FormConfigurationContext);

    const updateFormValue =
        (name: keyof FormState): ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =>
            (event) => {
                const newFormState = {...formState};
                const {value} = event.currentTarget;

                newFormState[name] = value;

                const updates = formConfiguration[name]?.options.find(o => o.value === value)?.updateFields || [];

                updates.forEach(update => {
                    newFormState[update.field as keyof FormState] = update.value;
                });

                setFormState(newFormState);
            }; // useCallback?

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log('You clicked submit.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <DropDown
                        label='Project'
                        name='project'
                        value={formState.project}
                        placeholder='Select the project this document belongs to'
                        updateValue={updateFormValue('project')}
                    />
                    <Input
                        type="text"
                        label='Document Title'
                        name='documentTitle'
                        value={formState.documentTitle}
                        placeholder='Give your document a title'
                        onChange={updateFormValue('documentTitle')}
                    />
                    <DropDown
                        label='Document Revision'
                        name='documentRevision'
                        value={formState.documentRevision}
                        placeholder='What revision stage is the document at?'
                        updateValue={updateFormValue('documentRevision')}
                    />
                    <DropDown
                        label='Purpose of Issue'
                        name='purposeOfIssue'
                        value={formState.purposeOfIssue}
                        updateValue={updateFormValue('purposeOfIssue')}
                    />
                    <DropDown
                        label='Asset Class'
                        name='assetClass'
                        value={formState.assetClass}
                        updateValue={updateFormValue('assetClass')}
                    />
                    <DropDown
                        label='Information Type'
                        name='infotype'
                        value={formState.infotype}
                        updateValue={updateFormValue('infotype')}
                    />
                    <DropDown
                        label='Discipline'
                        name='discipline'
                        value={formState.discipline}
                        updateValue={updateFormValue('discipline')}
                    />
                    <DropDown
                        label='Suitability'
                        name='suitability'
                        value={formState.suitability}
                        updateValue={updateFormValue('suitability')}
                    />
                    <DropDown
                        label='Security Class'
                        name='securityClass'
                        value={formState.securityClass}
                        updateValue={updateFormValue('securityClass')}
                    />
                    <DropDown
                        label='Project Stage'
                        name='projectStage'
                        value={formState.projectStage}
                        updateValue={updateFormValue('projectStage')}
                    />
                    <DropDown
                        label='Handover Information'
                        name='handoverInformation'
                        value={formState.handoverInformation}
                        updateValue={updateFormValue('handoverInformation')}
                    />
                    <DropDown
                        label='Health & Safety File'
                        name='hsf'
                        value={formState.hsf}
                        updateValue={updateFormValue('hsf')}
                    />
                    <Input
                        type="text"
                        label='Requested By:'
                        name='requested'
                        value={formState.requested}
                        onChange={updateFormValue('requested')}
                    />
                    <Input
                        type="email"
                        label='Email Address'
                        name='emailAddress'
                        required
                        value={formState.emailAddress}
                        onChange={updateFormValue('emailAddress')}
                    />
                </div>
                <div>
                    <button className="submit success button"> SEND </button>
                </div>
               
            </div>

        </form>
    );
};

export default Form;
