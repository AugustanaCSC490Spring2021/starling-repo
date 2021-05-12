import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Modal } from 'react-bootstrap';
import { signin } from '../../../Action/userAction';
import './SignIn.css';
import { CommonButton } from '../../Common/CommonButton';

function SignInPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const info = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { loading, error } = info;

    const handleSignin = (e) => {
        e.preventDefault();
        // console.log(email);
        dispatch(signin(email, password));
    }

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSignin}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(event) => { setEmail(event.target.value) }} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(event) => { setPassword(event.target.value) }} required></Form.Control>
                    </Form.Group>
                    {loading ? <div>Loading...</div> : error ? <div>Wrong in email or password</div> : null}
                    <CommonButton className='w-100' type='submit' >Sign in</CommonButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignInPage;