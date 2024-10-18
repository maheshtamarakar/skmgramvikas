import React from 'react'
import './style.css'

const page = () => {
  return (
    <>
    {/* <!-- contribute  --> */}
<section className="volunteer-section">
    <div className="container">
        <div className="row">
            <h1 className="text-center">Volunteer</h1>
            <div className="col-md-6">
                <p className="text-justify">At Swarajya Foundation, we believe in the power of volunteerism to create positive change and build stronger communities. Volunteering is a meaningful way to contribute your time, skills, and passion to support our mission. Whether you&apos;re an individual looking to make a difference or a group seeking opportunities for team building and community engagement, we welcome volunteers of all backgrounds and abilities.</p>

                <h2>Why Volunteer with Swarajya Foundation?</h2>
                <ul className="text-justify">
                    <li>
                        <strong>Make a Difference:</strong> As a volunteer with Swarajya Foundation, you&apos;ll directly impact the lives of those we serve. Whether you&apos;re volunteering at events, assisting with programs, or lending your expertise to special projects, your efforts play a crucial role in advancing our mission and creating positive change.
                    </li>
                    <li>
                        <strong>Gain Experience:</strong> Volunteering provides valuable opportunities for personal and professional growth. Whether you&apos;re looking to develop new skills, gain experience in a specific field, or explore your interests, volunteering with us offers hands-on learning experiences and opportunities for personal development.
                    </li>
                    <li>
                        <strong>Build Community:</strong> Volunteering is a great way to connect with like-minded individuals, build meaningful relationships, and foster a sense of belonging within your community. Whether you&apos;re volunteering as an individual or as part of a group, you&apos;ll join a supportive community of passionate individuals dedicated to making a difference.
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <h2>Fill the below form.</h2>
                <form>
                    <div className="form-group mb-3">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="date">Date:</label>
                        <input type="date" className="form-control" id="date"/>
                    </div>
                    <button type="submit" className="common-button">Book Now</button>
                </form>
            </div>
        </div>
    </div>
</section>

<div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://images.pexels.com/photos/3957054/pexels-photo-3957054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Donation" className="img-fluid"/>
      </div>
      <div className="col-md-6">
        <h1>Individual</h1>
        <p>At Swarajya Foundation, we believe in the power of collective action to drive positive change. Every contribution, no matter how big or small, has the potential to transform lives and communities. By donating to our cause, you become a vital part of our mission.</p>
        <h2>Why Donate to us?</h2>
        <p><strong>Impact:</strong> Your donation directly supports our programs and initiatives, making a tangible difference in the lives of those we serve. Whether it&apos;s providing essential resources, funding education initiatives, or supporting community development projects, your contribution goes where it&apos;s needed most.</p>
        <p><strong>Transparency:</strong> We are committed to transparency and accountability. When you donate to us, you can trust that your funds are being used efficiently and effectively to achieve our shared goals. We provide regular updates and reports on how your donation is making an impact.</p>
        <p><strong>Tax Benefits:</strong> Your donation to us may be tax-deductible, allowing you to maximize the impact of your contribution while also benefiting from potential tax advantages. Consult with your financial advisor for more information on the tax benefits of charitable giving.</p>
      </div>
    </div>
  </div></>
  )
}

export default page