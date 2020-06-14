import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Header headerText="About" />
        <p>leave a message</p>
    </div>
  )
}