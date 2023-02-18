import { useDispatch } from "react-redux";
import { register } from "redux/auth/authThunk";
import { Form, Label, LabelName, Input, Button } from "components/RegisterForm/RegisterForm.styled";

export const RegisterForm = () => { 
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
        register({
            name: form.elements.name.value,
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