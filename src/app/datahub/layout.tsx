import React from 'react';
import SideBar from '../components/datahub/SideBar';

export default function DatahubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="background-image-container container-fluid justify-content-center">
      <div className="row mt-5 pt-5">
        <div className="col-12 col-md-3 mb-2">
          <div className="sticky-top" style={{top:"5rem"}}>
          <SideBar />
          </div>
        </div>
        <div className="col-12 col-md-9 mx-0">
          {children}
        </div>
      </div>
    </main>
  );
}
