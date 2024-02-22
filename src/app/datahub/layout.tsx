import React from 'react';
import SideBar from '../components/datahub/SideBar';

export default function DatahubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="background-image-container container-fluid justify-content-center">
      <div className="row">
        <div className="col-12 col-md-3 my-2">
          <div className="sticky-top" style={{top:"3rem", height:"90vh"}}>
          <SideBar />
          </div>
        </div>
        <div className="col-12 col-md-9 mx-0">
          {children}
        </div>
      </div>
    </div>
  );
}
