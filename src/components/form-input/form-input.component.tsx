import { ChangeEvent } from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles'

type FormInputProps = {
    label: string;
    type: string;
    required: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
    return (
        <Group>
            <Input { ...otherProps } /> 
            {label && (
            <FormInputLabel shrink={otherProps.value.length} >{label}</FormInputLabel>
            )}
        </Group>

    )
}

export default FormInput