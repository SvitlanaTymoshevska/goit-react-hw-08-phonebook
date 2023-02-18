import { Form, Label, LabelName, Input, Button } from "components/LoginForm/LoginForm.styled";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authThunk";

export const LoginForm = () => { 
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <LabelName>
                    Email  
                </LabelName>
                <Input
                    type="email"
                    name="email"
                    required
                />
            </Label>
            <Label>
                <LabelName>
                    Password
                </LabelName>        
                <Input
                    type="password"
                    name="password"
                    required
                />
            </Label>
            <Button 
                type="submit">
                Log in
            </Button>
        </Form>
    ); 
};