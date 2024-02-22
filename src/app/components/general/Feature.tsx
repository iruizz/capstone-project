interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="col d-flex flex-column gap-2">
    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-white bg-purple-gradient fs-4 rounded-3 card-content" style={{ width: "2em", height: "2em" }}>
      <i className={`bi ${icon}`}></i>
    </div>
    <h4 className="fw-semibold mb-0">{title}</h4>
    <p className="text-body-light">{description}</p>
  </div>
);

export default Feature;