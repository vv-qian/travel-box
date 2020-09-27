import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      console.log("location change");
      setCurrentPath(window.location.pathname);
      // though this appears redundant, using the state forces the
      // component to track the pathname and rerender itself everytime
      // the pathname changes
    };
    window.addEventListener("popstate", onLocationChange);

    // in case we remove the Route component, this is cleanup.
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
