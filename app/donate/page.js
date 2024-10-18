import React from 'react'
import './style.css'
import Image from 'next/image'

const donate = () => {
    return (
        <>
            <div className="donate-header">Donate</div>
            {/* <!-- donation  --> */}
            <div className="container col-xxl-11 px-4 py-5">
                <div className="row justify-content-center align-items-center g-5 py-5">
                    <div className="col-lg-7 ">
                        <p className="lead">
                            Every day, millions of people around the world struggle to meet their basic needs. From food and shelter to healthcare and education, many individuals and families face formidable challenges that hinder their ability to lead healthy, fulfilling lives. However, by coming together and lending a helping hand, we can make a real difference in the lives of those in need.
                        </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-5">
                        <Image
                            src="/imgs/donate2.jpg"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={500}
                            height={300}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4">
                        <Image src="/imgs/slide3.jpeg" alt="image" width={500} height={700} className="img-fluid" />
                    </div>
                    <div className="col-md-8 mt-4">
                        <p><b>Bank Details Acc. Name: </b>Swarajya Foundation</p>
                        <p><b>Acc. No.: </b>0000043276566506</p>
                        <p><b>Branch: </b>Goregaon (East) </p>
                        <p><b>IFS Code: </b>SBIN0001975</p>
                        <p><b>Swift Code: </b>SBININBB518</p>
                        <p><b>A/C.: </b>0539102000019451</p>
                        <p><b>UPI ID: </b>1000221201000456</p>
                        <p><b>IFSC CODE: </b>IBKL0000539</p>
                         
                    </div>
                </div>
                <div className="why-donate">
                    <div className="h2">Why Donate?</div>
                    <p>Meet Urgent Needs: Your donation can provide immediate relief to individuals and families facing hunger, homelessness, or medical emergencies. By contributing to organizations that provide essential services and support, you can help ensure that no one is left behind in times of crisis.</p>
                    <p>Empower Change: Donating isn&apos;t just about meeting immediate needs; it&apos;s also about creating lasting change. By supporting initiatives that address the root causes of poverty and inequality, you can empower individuals and communities to build better futures for themselves and future generations.</p>
                    <p>Spread Hope: Your generosity sends a powerful message of hope to those facing adversity. By showing solidarity and compassion, you can uplift spirits, restore dignity, and inspire others to join in the effort to create a more just and equitable world.</p>
                </div>

                <i className='text-center d-block'>Join us in extending a helping hand to those in need. Together, we can create a world where everyone has the opportunity to thrive and lead fulfilling lives. Let&apos;s donate to make a difference today.</i>
            </div>
        </>

    )
}

export default donate