import React from "react";
import { useLocation, Link } from "react-router-native";
import { StyledText } from "./StyledText";

export const AppBarTab = ({styles,children, to}) => {
    const { pathname } = useLocation();

    const active = pathname == to

    const textStyles = [
        styles.text,
        !active && styles.active
    ];

    return (

            <Link to={to}>
                <StyledText  fontWeight='bold' style={textStyles}>
                    {children}
                </StyledText>
            </Link>

    );
};