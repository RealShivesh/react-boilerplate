import React from 'react'

const About = () => {
  return (
    <>
      <h1>About me</h1>
      <section>
        In this page, you can write a brief description about the project, or a
        better idea: you can paste the contact details on this page. For
        example, I can append the social media links and/or create a sample form
        page to allow the users to fill the form.
        <form action="">
          <label htmlFor="">
            Name:
            <input type="text" />
          </label>
          <label htmlFor="">
            Email ID:
            <input type="text" />
          </label>
          <label htmlFor="">
            Reason for contacting:
            <input type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default About
