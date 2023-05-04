import React, {ChangeEventHandler} from 'react';

import Input from './Input';

export interface FormState {
    project: string;
    documentTitle: string;
    documentRevision: string;
    purposeOfIssue: string;
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
                </div>
            </div>
        </form>
    );
};

export default Form;
