import { Form, Label, LabelName, Input, Button } from "components/RegisterForm/RegisterForm.styled";

export const RegisterForm = () => { 
    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <LabelName>
                    Name  
                </LabelName>
                <Input
                    type="text"
                    name="name"
                    required
                />
            </Label>
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
                Register
            </Button>
        </Form>
    ); 
};