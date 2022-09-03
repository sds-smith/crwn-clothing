import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google : 'google-sign-in',
    inverted : 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[buttonType])

type ButtonProps = {
    children: string;
    buttonType?: string;
    isLoading?: boolean;
    onClick?: () => void;
    type?: string;
}    


const Button = ({ children, buttonType, isLoading, type='', ...otherProps }: ButtonProps) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton disabled={isLoading} {...otherProps} >
            {isLoading ? <ButtonSpinner /> : children }
        </CustomButton>
    )
}

export default Button