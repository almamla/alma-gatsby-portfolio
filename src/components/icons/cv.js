import React from "react"
import PropTypes from "prop-types"

const Cv = ({ color }) => {
  return (
        // <svg 
        // role="img"
        // fill={color}
        // x="0px"
        // y="0px"
        // viewBox="0 0 24 24"
        // xmlns="http://www.w3.org/2000/svg" >
        //    <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/>
        // </svg>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-down" class="svg-inline--fa fa-arrow-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={color} d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path></svg>

  )
}

Cv.propTypes = {
  color: PropTypes.string,
}

Cv.defaultProps = {
  color: "#000000",
}

export default Cv