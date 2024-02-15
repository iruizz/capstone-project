"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  callbackUrl?: string;
  error?: string;
};

const Login = (props: Props) => {
  const router = useRouter();
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
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center my-5">
      <h3 className="text-center">Access Data Hub</h3>
      <form onSubmit={onSubmit} className="col-md-4 col-lg-4 border border-2 rounded p-5 shadow-lg">
      {!!props.error && (
        <p className="text-danger text-center p-2">
          *Authentication Failed
        </p>
      )}
      {/* Username Input */}
      <div className="mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Username
      </label>
      <input
        type="username"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Username"
        onChange={(e) => (userName.current = e.target.value)}
        
        />
      <small id="emailHelp" className="form-text text-muted">
        Enter your username
      </small>
      </div>
          
      {/* Password Input */}
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => (pass.current = e.target.value)}
        />
      </div>
      {/* Other form elements and submit button */}
      <div className="text-center pt-3">
          <button type="submit" className="btn btn-primary m-4">
          Sign In
        </button>
        <Link
        
            href="/"
            className="btn btn-danger w-5 m-4 text-light"
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