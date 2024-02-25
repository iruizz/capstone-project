"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signIn} from "next-auth/react";

type Props = {
  callbackUrl?: string;
  error?: string;
};

const Login = (props:Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const res = await signIn("credentials", {
        username: username,
        password: password,
        redirect: true,
        callbackUrl: props.callbackUrl,
      });
  };

  return (
    <div className="container my-5">
      <div className="row text-light my-5 gap-4">
        <h1 className="text-center">Access Data Hub</h1>
        <form onSubmit={handleSubmit} className="border border-2 rounded-4 p-5 shadow-lg bg-black bg-gradient text-light">
          {props.error && (
            <p className="text-danger text-center p-2">*Authentication Failed</p>
          )}
          <div className="my-4">
            <label htmlFor="username" className="form-label fs-4">
              Username
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <small id="usernameHelp" className="form-text text-secondary">
              Enter your username
            </small>
          </div>
          <div className="my-5">
            <label htmlFor="password" className="form-label fs-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
