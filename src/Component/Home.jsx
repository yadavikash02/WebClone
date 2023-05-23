import React from 'react'
import Item from './Item'
import logo1 from './p2.jpg'
import logo2 from './p1.png'
import logo3 from './p3.jpg'
import logo4 from './rp2.jpg'
function Home() {
  return (
    <div className="container">
      <h1>Let's Collaborate </h1>
      <Item logo={logo4} title="AI + RPA is what we do" text="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" link="AI + RPA Automation" location="/InnerItem1"></Item>
      <Item logo={logo2} title="Make Bolder Choices" text="Digital focused strategies to realize market-changing ideas" link="Build Better Apps" location="/InnerItem2"></Item>
      <Item logo={logo1} title="Innovate with Speed" text="Create higher quality software, deliver on customer expectations and business goals"link="DevOps" location="/InnerItem3"></Item>
      <Item logo={logo3} title="Embrace Cloud" text="With Cloud-First accelerate innovation and optimize performance"link="Cloud Services" location="/InnerItem4"></Item>
    </div>
  )
}

export default Home
