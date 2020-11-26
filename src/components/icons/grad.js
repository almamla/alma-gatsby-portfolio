import React from "react"
import PropTypes from "prop-types"

const Grad = ({ color }) => {
  return (
        <svg 
        role="img"
        fill={color}
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" >
           <path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"/>
        </svg>
  )
}

Grad.propTypes = {
  color: PropTypes.string,
}

Grad.defaultProps = {
  color: "#000000",
}

export default Grad