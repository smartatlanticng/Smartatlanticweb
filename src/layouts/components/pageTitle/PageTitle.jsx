import "./PageTitle.css";
import PropTypes from "prop-types";

function PageTitle({titleBg, title}) {
  return (
    <div
      style={{
        backgroundImage: `url(${titleBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="page-title"
    >
      <div className="container">
        <div className="title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

PageTitle.propType = {
  title: PropTypes.string,
  titleBg: PropTypes.string,
};

export default PageTitle;
