import classes from './Form.module.css';
import Input from './Input';
import Button from './Button';
import FormHeader from './FormHeader';

const Form = () => {

    const submitHandler = event => {
        event.preventDefault();
    };

    return (
        <div>
            <FormHeader />
            <form
                className={classes.form}
                onSubmit={submitHandler}
            >
                <Input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                />
                <Input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                />
                <Input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                />

                <Button type='submit'>
                    Claim your free trial
                </Button>

                <p className={classes['form-paragraph']}>
                    By clicking the button, you are agreeing to our <span>Terms and Services</span>
                </p>
            </form>
        </div>
    );
};

export default Form;