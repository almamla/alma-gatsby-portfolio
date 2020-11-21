import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import config from "../../config"

const { siteShortTitle } = config

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.logo};
  // color: ${({ theme, color }) => theme.colors[color] || color };
  color: ${({ theme }) => theme.colors.background};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    {siteShortTitle}
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
