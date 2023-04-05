import React from "react";

import "./style.scss";

type ContainerWrapperProps = {
    children:React.ReactNode
}

const ContentWrapper = ({ children }:ContainerWrapperProps) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;