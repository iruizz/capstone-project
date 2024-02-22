import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  date: string;
}


const Card: React.FC<CardProps> = ({ title, imageUrl, description, date }) => {
  return (
    <div className="col">
      <Link className="text-decoration-none" href="/news">
      <div className="card-content card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundSize: 'cover', backgroundImage: `url(${imageUrl})`, transition: 'transform 0.3s ease' }}>
        <div className="d-flex flex-column h-100 p-3 p-md-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-3 pt-md-5 mt-3 mt-md-5 mb-3 mb-md-4 display-6 lh-1 fw-bold">{title}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img src="/lorasCrest.png" alt="Loras Crest" width="32" height="32" className="rounded-circle bg-light border border-white" />
            </li>
            <li className="d-flex align-items-center mx-2 mx-md-3">
              <small>{description}</small>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-calendar3 mx-2"></i>
              <small>{date}</small>
            </li>
          </ul>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
