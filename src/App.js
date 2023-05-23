// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import InnerItem from './Component/InnerItem';
import logo from './Component/download.png';
import logo1 from './Component/main-service1.jpeg';
import logo2 from './Component/m1.webp' 
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/WebClone"element={<Home></Home>} />
      <Route path="/"element={<Home></Home>} />
      <Route path="/InnerItem1" element={<InnerItem logo={logo} title="AI + RPA = Enabling End-to-End Automation" des="Drive Efficiency, Automate and Monetize" para="Our team of professionals help you deliver measurable business outcomes by strategizing, designing and executing results driven AI + RPA automation. With Ekisu - our flagship AI automation product, we help you with end-to end automation for your workflows. Each automation helps you save time, reduce cost of human capital, and improve efficiency! Now that’s successful Digital Transformation!

"></InnerItem>}></Route>
      <Route path="/InnerItem2" element={<InnerItem logo={logo1} title="Cloud Native = Future Proof" des="Achieve Competitive Advantage with Agility, Reliability, Responsiveness and Speed." para="We know cloud. We help unlock real value by helping you transform your business by virtue of cloud transformation. Being Cloud-Native enables Rapid Responsiveness, Innovative Features, and Zero Downtime. We help you accelerate business velocity and growth by embracing rapid change, large scale and resilence. Our expertise and focus on the Twelve-Factor App and the API First principles allow us to build true cloud-native apps.

"></InnerItem>}></Route>
      <Route path="/InnerItem3" element={<InnerItem logo={logo1} title="DevOps with Azure" des="Greater Agility, Resilience and Portability by building and deploying apps rapidly." para="We help you get to market quicker by integrating DevOps Automation leveraging Containers, CICD and Microservices. Achieve business outcomes by adopting DevOps. Our unique capabilities allow us to help you build continuous delivery pipeline, enhance reliability & resilience, balance agility & consistency at scale.

"></InnerItem>}></Route>
      <Route path="/InnerItem4" element={<InnerItem logo={logo2} title="Cloud Transition = Business Outcomes" des="Rapidly - Rehost, Refactor, Rearchitect, Rebuild and Replace applications to transform and achieve business goals." para="Achieve business outcomes by transforming to cloud. Our unique capabilities allow us to help you, Discover New Revenue Streams, Reduce Cycle Time, Bring Scale and Reliability, Decrease Time to Market, Future Proof your Digital Estate. Why stop here? Go beyond with adopting cloud to integrate new forms of technologies to speed up, automate and improve your business. Cloud Computing integrates technologies such as Artificial Intelligence (AI), Machine Learning, Big Data Analytics, and the Internet of Things (IoT), helping you to achieve your business goals."></InnerItem>}></Route>
    
    </Routes>

    </BrowserRouter>
  );
}

export default App;
