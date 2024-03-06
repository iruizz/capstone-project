import React from 'react';
import CSTeam from '../components/general/CSTeam';
import EGRTeam from '../components/general/EGRTeam';
import Image from 'next/image';
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
      <div className="container-fluid bg-dark bg-gradient text-white py-5 ">
        {/* Dune Buggy Section */}
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-center" style={{ paddingTop: "2rem" }}>The Dune Buggy</h2>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <Image src="https://via.placeholder.com/400x300" width={400} height={300} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
                <div className="col-md-4 mb-3">
                  <Image src="https://via.placeholder.com/400x300" width={400} height={300} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
                <div className="col-md-4 mb-3">
                  <Image src="https://via.placeholder.com/400x300" width={400} height={300} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
              </div>
            </div>
          </div>

          {/* Arduino Sensor Section */}
          <div className="row mb-3">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-center">Data Telemetry System</h2>
              <div className="row">
                <div className="col-md-6 mx-auto mb-3">
                  <Image src="https://fakeimg.pl/300x200/f9f2fa/150317?text=Arduino&font=bebas" width={300} height={200} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
              </div>
              <h3 className="text-center">Sensors</h3>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <Image src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" width={200} height={200} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
                <div className="col-md-3 mb-3">
                  <Image src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" width={200} height={200} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
                <div className="col-md-3 mb-3">
                  <Image src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" width={200} height={200} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
                <div className="col-md-3 mb-3">
                  <Image src="https://fakeimg.pl/200x200/f9f2fa/150317?text=Sensor&font=bebas" width={200} height={200} className="img-fluid mx-auto d-block" alt="Placeholder Image" />
                </div>
              </div>
            </div>
          </div>

          {/* Computer Science Team Members */}
          <CSTeam/>
          
          {/* Engineering Team Members */}
          <EGRTeam/>
        </div>
      </div>
    </main>
  );
}
