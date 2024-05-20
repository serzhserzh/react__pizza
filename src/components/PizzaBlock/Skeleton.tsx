import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#a3a3a3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="127" r="118" />
    <rect x="0" y="272" rx="0" ry="0" width="280" height="27" />
    <rect x="0" y="323" rx="0" ry="0" width="280" height="90" />
    <rect x="0" y="443" rx="8" ry="8" width="90" height="30" />
    <rect x="130" y="431" rx="16" ry="16" width="150" height="50" />
  </ContentLoader>
);

export default MyLoader;
