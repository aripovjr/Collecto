import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from "../styles/Form.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(submitHandler)}
      className={classes.Form}
      action="POST"
      method="POST"
    >
      <h1>Log In</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="text-danger">Please enter a valid email</span>
        )}
        <br />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-danger">
            Password must be at least 6 characters long
          </span>
        )}
      </Form.Group>
      <h6>
        <Link to="/register">Don't have an account?</Link>
      </h6>
      <div className="d-grid gap-2">
        <Button type="submit" variant="primary" size="lg">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default LoginPage;
