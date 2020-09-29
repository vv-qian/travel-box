import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault(); // prevents normal behavior which would cause a full page reload
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a style={{ textDecoration: "none" }} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
