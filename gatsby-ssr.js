import React from 'react'

export function onRenderBody(
  { setHeadComponents,
    setPreBodyComponents,
  }
) {
 setHeadComponents([
   <link
    rel="stylesheet"
    type="text/css"
    charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
  />,
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
  />
  ])
}