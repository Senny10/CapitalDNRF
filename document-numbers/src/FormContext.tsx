import { createContext } from "react";

export interface FormConfigurationContextInterface {
    [name: string]: {
        options: Array<{
            value: string;
            label: string;
            updateFields?: Array<{
                field: string;
                value: string;
            }>;
        }>
    };
}

export const FormConfigurationContext = createContext<FormConfigurationContextInterface>({});
