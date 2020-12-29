import React from "react"

import IconXing from "./xing"
import IconLinkedIn from "./linkedin"
import IconMedium from "./medium"
import IconGitHub from "./github"
import IconBehance from "./behance"
import IconExternal from "./external"
import IconGrad from "./grad"
import IconCv from "./cv"
import IconTree from "./tree"

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "xing":
      return <IconXing color={color} />
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "medium":
      return <IconMedium color={color} />
    case "github":
      return <IconGitHub color={color} />
    case "behance":
      return <IconBehance color={color} />
    case "external":
      return <IconExternal color={color} />
    case "grad project":
      return <IconGrad color={color} />
    case "cv":
      return <IconCv color={color} />
    case "linktree":
      return <IconTree color={color} />
    default:
      return null
  }
}

export default Icon;