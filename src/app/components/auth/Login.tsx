"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

type Props = {
  callbackUrl?: string;
  error?: string;
};

const Login = (props: Props) => {
  const userName = useRef("");
  const pass = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: props.callbackUrl ?? "http://localhost:3000",
    });
  };
  return (
    <div className="container my-5">
      <div className="row text-light my-5 gap-4">
      <h1 className="text-center">Access Data Hub</h1>
      <form onSubmit={onSubmit} className="border border-2 rounded-4 p-5 shadow-lg bg-black bg-gradient text-light">
      {!!props.error && (
        <p className="text-danger text-center p-2">
          *Authentication Failed
        </p>
      )}
      <div className="my-4">
      <label htmlFor="exampleInputEmail1" className="form-label fs-4">
        Username
      </label>
      <input
        type="username"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(e) => (userName.current = e.target.value)}
        required
        
        />
      <small id="emailHelp" className="form-text text-secondary">
        Enter your username
      </small>
      <div className="invalid-feedback">No username entered</div>
      </div>
      <div className="my-5">
        <label htmlFor="exampleInputPassword1" className="form-label fs-4 ">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => (pass.current = e.target.value)}
          required
        />
        <div className="invalid-feedback">Enter a password</div>
      </div>
      <div className="text-center pt-3">
          <button type="submit" className="btn btn-lg btn-purple m-4">
          Sign In
        </button>
        <Link
            href="/"
            className="btn btn-lg btn-dark w-5 m-4 text-light border-secondary"
            role="button"
          >
            Cancel
          </Link>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;