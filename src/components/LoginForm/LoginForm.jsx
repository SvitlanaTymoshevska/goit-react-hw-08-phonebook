import { Form, Label, LabelName, Input, Button } from "components/LoginForm/LoginForm.styled";

export const LoginForm = () => { 
    const handleSubmit = event => {
        event.preventDefault();
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