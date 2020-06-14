import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
      <div>
          <Link to="/about/">About</Link>
          <Header headerText="Home" />
          <p>welcome</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
  )
}