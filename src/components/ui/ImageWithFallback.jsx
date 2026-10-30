import { useState } from "react";

// Shows `fallback` when there is no src or the file is missing from /public
const ImageWithFallback = ({ src, alt, className, fallback }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return fallback;

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
};

export default ImageWithFallback;
