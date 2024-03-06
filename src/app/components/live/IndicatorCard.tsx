import React from 'react';

interface IndicatorCardProps {
  title: string;
  category: string;
  iconName: string;
  footer:string;
  bgColor:string;
  iconColor:string;
  onClick?: () => void;
}

const IndicatorCard : React.FC<IndicatorCardProps> = ({ title, category, iconName, iconColor, footer, bgColor, onClick}) => {
  return (
    <div className="col-md-6 col-lg-3 my-4">
      <div className={`card text-white ${bgColor} border-2 border-light rounded-4 `}>
        <div className={`card-stats card text-white ${bgColor} border-2 border-light rounded-4 `}>
          <div className="card-body">
            <div className="row shadow-lg">
              <div className="col-5">
                <div className="info-icon text-center icon-primary">
                  <i className={`bi bi-${iconName} icon-size-lg text-${iconColor}`} onClick={onClick}></i>
                </div>
              </div>
              <div className="col-7">
                <div className="numbers text-end">
                  <p className="card-category">{category}</p>
                  <h3 className="card-title">{title}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer shadow-lg">
            <hr />
            <div className="stats">
            <i className="bi bi-three-dots px-2 "></i>
             {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndicatorCard;
