import React from "react"

const TextBlockWhite = ({ data }) => {

  return (
    <section class="text-block">
        <div class="max-width">
            <h2 dangerouslySetInnerHTML={{__html: data.title}}></h2>
            <p dangerouslySetInnerHTML={{__html: data.subtitle}}></p>
            <h3 class="ol-title">{data.list_title}</h3>
            <ol>
              {
                data.list.map(item => {
                  return (
                    <li>{item.list_item}</li>
                  )
                })
              }
            </ol>
            <div class="disclaimer">
                <p dangerouslySetInnerHTML={{__html: data.disclaimer}}>
                </p>
            </div>
        </div>
    </section>
  )
}

export default TextBlockWhite
