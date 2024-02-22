import React from 'react';
import CSTeam from '../components/general/CSTeam';
import EGRTeam from '../components/general/EGRTeam';
// Replace with your team member data
const CSMembers = [
  {
    name: 'John Doe',
    major: 'Computer Science',
    graduationYear: 2025,
    image: 'https://via.placeholder.com/150', // Placeholder image for John Doe
  },
  {
    name: 'Jane Smith',
    major: 'Software Engineering',
    graduationYear: 2024,
    image: 'https://via.placeholder.com/150', // Placeholder image for Jane Smith
  },
  {
    name: 'John Doe',
    major: 'Computer Science',
    graduationYear: 2025,
    image: 'https://via.placeholder.com/150', // Placeholder image for John Doe
  },
  {
    name: 'Jane Smith',
    major: 'Software Engineering',
    graduationYear: 2024,
    image: 'https://via.placeholder.com/150', // Placeholder image for Jane Smith
  },
  // ...
];

const EngMembers = [
  {
    name: 'Alice Johnson',
    major: 'Mechanical Engineering',
    graduationYear: 2026,
    image: 'https://via.placeholder.com/150', // Placeholder image for Alice Johnson
  },
  {
    name: 'Bob Smith',
    major: 'Electrical Engineering',
    graduationYear: 2025,
    image: 'https://via.placeholder.com/150', // Placeholder image for Bob Smith
  },
  {
    name: 'Alice Johnson',
    major: 'Mechanical Engineering',
    graduationYear: 2026,
    image: 'https://via.placeholder.com/150', // Placeholder image for Alice Johnson
  },
  {
    name: 'Bob Smith',
    major: 'Electrical Engineering',
    graduationYear: 2025,
    image: 'https://via.placeholder.com/150', // Placeholder image for Bob Smith
  },
  // ...
];

export default function About() {
  return (
    <main className="mx-5 mb-3">
   <div className="container-fluid bg-dark bg-gradient text-white py-5">
      {/* Dune Buggy Section (Placeholder) */}
        <div className="row mb-3">
          <div className="col-lg-10 mx-auto">
            <h2 className="text-center">The Dune Buggy</h2>
            <div className="row">
              <div className="col-md-4 mb-3">
                <img src="https://via.placeholder.com/400x300" className="img-fluid" alt="Placeholder Image" />
              </div>
              <div className="col-md-4 mb-3">
                <img src="https://via.placeholder.com/400x300" className="img-fluid" alt="Placeholder Image" />
              </div>
              <div className="col-md-4 mb-3">
                <img src="https://via.placeholder.com/400x300" className="img-fluid" alt="Placeholder Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Data Telemetry Section (Placeholder) */}
      <div className="row mb-3">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center">Data Telemetry System</h2>
            <div className="d-flex justify-content-center">
            <img src="https://fakeimg.pl/300x200/f9f2fa/150317?text=Arduino&font=bebas" className="mx-3" alt="Placeholder Image" />
            </div>
          </div>
        </div>
      
        <div className="row mb-3">
        <div className="col-lg-10 mx-auto">
          <h3 className="text-center">Sensors</h3>
          <div className="d-flex justify-content-center">
          <img src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" className="mx-3" alt="Placeholder Image" />
          <img src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" className="mx-3" alt="Placeholder Image" />
          <img src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" className="mx-3" alt="Placeholder Image" />
          <img src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" className="mx-3" alt="Placeholder Image" />
          
          </div>
        </div>
      </div>

      {/* Computer Science Team Members 
      <div className="row mb-3">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center">Computer Science Team</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {CSMembers.map((member, index) => (
              <div key={index} className="card m-3" style={{ maxWidth: '300px' }}>
                <img src={member.image} alt={member.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.major}</p>
                  <p className="card-text text-muted">Graduation Year: {member.graduationYear}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}
      <CSTeam/>
      {/* Engineering Team Members */}
      <EGRTeam/>
    </div>
    </main>
  );
}
