import React, { Fragment, useEffect, useRef, useState } from "react"
import { jsx, css } from "@emotion/core"
import LinksHeader from "./links-header"

const stickyStyles = css`
  position: sticky;
  top: 0;
  z-index: 100;

  .sticky-wrapper {
    position: relative;
    height: 3rem; /* We need to change this value */
  }

  .sticky .sticky-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`

const MainHeader = () => {
  const [isSticky, setSticky] = useState(false)
  const stickyRef = useRef(null)
  const handleScroll = () => {
    setSticky(stickyRef.current.getBoundingClientRect().top <= 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])
  return (
    <Fragment>
      <div css={stickyStyles} ref={stickyRef}>
        <LinksHeader />
      </div>
    </Fragment>
  )
}

export default MainHeader
