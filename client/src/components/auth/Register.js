import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Form } from 'react-bootstrap';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({email: "", password: "", name: "", })
}