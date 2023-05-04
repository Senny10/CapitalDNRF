import { createContext } from "react";

interface FormContextInterface {
    [name: string]: {
        options: Array<{
            value: string;
            label: string;
        }>
    };
}

export const FormContext = createContext<FormContextInterface>({});
