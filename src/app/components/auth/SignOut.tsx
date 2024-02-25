'use client'
import { signOut } from "next-auth/react";
import Link from "next/link";

const Signout = () => {
  const handleLogout = async () => {
    try {
      await signOut();
      // Redirect to your desired post-logout page (e.g., home page)
      window.location.href = "/"; // Replace with your desired URL
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle logout error (e.g., display an error message)
    }
  };

  return (
    <div className="container w-50 my-5">
      <div className="row text-light my-5 gap-4">
        <form
          onSubmit={handleLogout} // Remove handleSubmit as it's not needed
          className="border border-2 rounded-4 py-5 shadow-lg bg-black bg-gradient text-light"
        >
          <div className="row text-light text-center lead m-5">
            <p>You are about to sign out.</p>
            <p>Confirming will revoke access to the Data Hub.</p>
            <p>Do you wish to confirm?</p>
          </div>
          {/* Removed error handling and form elements as they are not relevant for logout */}
          <div className="text-center pt-3">
            <button type="button" className="btn btn-lg btn-purple m-4" onClick={handleLogout}>
              Confirm
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

export default Signout;
