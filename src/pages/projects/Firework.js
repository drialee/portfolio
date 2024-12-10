import React from "react";
import "../../styles/projectPage.css";
import ProjectNavBar from "../../components/ProjectNavBar";
import { hexToRgba } from "../../utils/utils";

import Cover from "../../utils/projects/MySite/PortfolioCover.png";
import Web from "../../utils/projects/MySite/Web.png";

const Firework = () => {
  return (
    <div>
      <ProjectNavBar sections={["About", "Product", "Engineering"]} />
      <div className="project-page">
        <div className="proj-header">
          <h1>Firework</h1>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col">
              <h5>Timeline</h5>
              <p>June 2023 - Present</p>
            </div>
            <div className="col">
              <h5>Tools</h5>
              <p>React</p>
              <p>Python</p>
              <p>Figma</p>
            </div>
            <div className="col">
              <h5>Role</h5>
              <p>Software Engineer</p>
              <p>UX Designer</p>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
        <div
          className="cover-photo"
          style={{
            backgroundColor: `rgba(${hexToRgba("#8338EC", 0.3)})`,
            paddingTop: "5vh",
          }}
        >
          <img src={Cover} />
        </div>
        <div className="section" id="About">
          <h2>About</h2>
          <p>
            Firework is a global leader in video commerce, partnering with
            renowned brands such as Vogue, Condé Nast, and Westfield. Their
            platform enhances online connection and authenticity by offering
            shoppable and interactive video experiences.
          </p>
        </div>
        <div className="section" id="Work">
          <h2>My Experience</h2>
          <p>
            My time at Firework allowed me to develop a broad range of skills
            across product and engineering disciplines while contributing to
            meaningful projects that impact customers globally.
          </p>
          <div className="section" id="Product" style={{ width: "100%" }}>
            <h3>Product</h3>
            <p>
              I began my journey at Firework as a Product Intern during the
              summer of 2023, where I honed skills in Product Design and Product
              Management within a fast-paced startup environment. Collaborating
              with five teams across the company, I designed 11 interfaces and
              managed the growth of five projects over the course of the
              internship.
            </p>
            <p>
              My work included personalizing their 1:1 Video Chat by introducing
              features such as chatbox avatars and camera invitations, designing
              the video uploading and editing workflows for their AIGC studio,
              and redesigning their Instagram Importer to improve usability and
              functionality.
            </p>
            <div
              className="col"
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div className="image-box-horizontal">
                <img src={Web} />
              </div>
              <p>Webpage to Video Flow</p>
            </div>
          </div>
          <div className="section" id="Engineering" style={{ width: "100%" }}>
            <h3>Backend</h3>
            <p>
              On the Data Team, I worked with two interns to develop a pipeline
              for Firework's Sales-Led Growth initiative, automating customer
              acquisition. The pipeline identified and qualified leads through
              stages like data enrichment, lead scoring, and actionable insights
              for the sales team. To enhance efficiency, we integrated OpenAI's
              embedding models for semantic analysis, employed multi-model
              approaches for diverse lead qualification perspectives, and
              optimized performance with batch processing, caching, and parallel
              API calls. These improvements streamlined the process, reducing
              qualification time and ensuring scalability for dynamic customer
              needs.
            </p>
            <h3>Frontend</h3>
            <p>
              Although I gained valuable experience in back-end development, my
              true passion lies at the intersection of design and code. This led
              me to transition to front-end development and join the Experience
              Platform Team. In this role, I focused on implementing new
              features to improve the user experience for Product-Led Growth
              (PLG) customers on the business portal. I developed an onboarding
              process and a seamless embedding flow for Shopify integration,
              prioritizing usability and accessibility to meet the needs of a
              diverse customer base while aligning with the platform's overall
              objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firework;
