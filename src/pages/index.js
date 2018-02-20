import React from 'react'
import Link from 'gatsby-link'
import clayman from "./clayman.png";

const IndexPage = () => (
  <div>
    {/* <h1>Claydates <small>Create and be social!</small></h1> */}

    <section class="intro">
      <h1>Claydates</h1>
      <p>Claydates is a social endeavour based around <em>ditching technology</em>, <em>hanging&nbsp;out</em> and <em>making things out of clay</em>. An extremely therapeutic passtime which we highly recommend you try with your friends, kids or even your enemies!</p>
      <img src={clayman} alt="Clayman" />
    </section>

  </div>
)

export default IndexPage
