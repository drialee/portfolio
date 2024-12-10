import React from "react";
import "../../styles/projectPage.css";
import BonoCover from "../../utils/projects/Bono/BonoCover.png";
import ProjectNavBar from "../../components/ProjectNavBar";
import BonoBrand1 from "../../utils/projects/Bono/BonoBrand1.png";
import BonoBrand2 from "../../utils/projects/Bono/BonoBrand2.png";
import BonoBrand3 from "../../utils/projects/Bono/BonoBrand3.png";
import BonoBrand4 from "../../utils/projects/Bono/BonoBrand4.png";
import LofiChat from "../../utils/projects/Bono/ChatLofi.png";
import LofiDiscover from "../../utils/projects/Bono/DiscoverLofi.png";
import LofiSearch from "../../utils/projects/Bono/SearchLofi.png";
import LofiHome from "../../utils/projects/Bono/HomepageLofi.png";
import NinaVid from "../../utils/projects/Bono/ninaVideo.mp4";

const Bono = () => {
  return (
    <div>
      <ProjectNavBar
        sections={[
          "About",
          "Exploration",
          "Branding",
          "Prototyping",
          "Product",
        ]}
      />
      <div className="project-page">
        <div className="proj-header">
          <h1>Bono</h1>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col">
              <h5>Timeline</h5>
              <p>January - June 2024</p>
            </div>
            <div className="col">
              <h5>Team</h5>
              <p>5 people</p>
            </div>
            <div className="col">
              <h5>Role</h5>
              <p>Front-End Engineer</p>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
        <div className="cover-photo" style={{ backgroundColor: "#fbb9b3" }}>
          <img src={BonoCover} />
        </div>
        <div className="section" id="About">
          <h2>About</h2>
          <p>
            Bono is a platform designed to simplify the process of discovering
            trustworthy charities. We connect users with organizations that
            align with their values, passions, and personal stories, making it
            easier to give back in a meaningful way.
          </p>
        </div>
        <div className="section" id="Exploration">
          <h2>Exploration</h2>
          <p>
            My team conducted{" "}
            <span>42 user interviews and 44 quantitative surveys </span>
            with a diverse group of volunteers, financial literacy educators,
            college students, tax lawyers, angel investors, nonprofits, social
            impact leaders. Initially, we didn’t have a specific vision for our
            app beyond the goal of creating something that would make a positive
            impact. However, we ultimately decided to focus on college
            students—an audience we could personally relate to. We aimed to
            design an app that would resonate with both the 'average' and
            'highly engaged' students at our school.
          </p>
          <p>
            {" "}
            Through these interviews, we discovered that students across the
            spectrum were eager to make a positive difference, often through
            actions like donating. However, they frequently felt{" "}
            <span>overwhelmed and skeptical </span>
            about the vast number of nonprofit organizations. This uncertainty
            leads many to fall into a cycle of endless research, preventing them
            from taking action even when they’re inclined to contribute."
          </p>
        </div>
        <div className="section" id="Branding">
          <h2>Branding</h2>
          <p>
            To bring our vision to life, we established brand guidelines early
            on, selecting a palette of blues and yellows to evoke calmness and
            happiness. We carefully chose fonts and colors that would convey a
            sense of simplicity and fun, ensuring the platform felt approachable
            and inviting.
          </p>
          <div className="proj-image-grid">
            <img src={BonoBrand1} />
            <img src={BonoBrand2} />
            <img src={BonoBrand3} />
            <img src={BonoBrand4} />
          </div>
        </div>
        <div className="section" id="Prototyping">
          <h2>Prototyping</h2>
          <p>
            We began with brainstorming sessions using whiteboard exercises and
            plenty of sticky notes, exploring ideas like gamification,
            bite-sized lessons, AI storytelling, and a news website plug-in.
            Next, we moved into prototyping on Figma, creating several
            low-fidelity screens that outlined the main components of our
            application: a home screen, discover page, organization page, and an
            AI chatbox. To foster diverse ideas, each team member took on two
            features, allowing us to broaden our creative approach.
          </p>
          <div className="proj-image-grid">
            <div
              style={{
                height: "350px",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgb(0,0,0, 0.1)",
              }}
            >
              <img src={LofiHome} style={{ height: "100%" }} />
            </div>
            <div
              style={{
                height: "400px",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgb(0,0,0, 0.1)",
                overflow: "hidden", // Ensures rounded corners are visible on the image
              }}
            >
              <img
                src={LofiDiscover}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Fills the container
                }}
              />
            </div>
            <div
              style={{
                height: "400px",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgb(0,0,0, 0.1)",
                overflow: "hidden", // Ensures rounded corners are visible on the image
              }}
            >
              <img
                src={LofiSearch}
                style={{
                  height: "100%",
                  objectFit: "cover", // Fills the container
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                height: "350px",
                width: "150px",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgb(0,0,0, 0.1)",
                overflow: "hidden", // Ensures rounded corners are visible on the image
              }}
            >
              <img
                src={LofiChat}
                style={{
                  height: "100%",
                  objectFit: "cover", // Fills the container
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="section" id="Product">
          <h2>Final Product</h2>
          <p>
            As designers, we recognize the transformative power of storytelling.
            Our mission is to empower users to share their unique narratives,
            values, and passions through Bono, enabling them to contribute
            meaningfully to causes they care about. We stand apart by leveraging
            a curated AI algorithm that delivers personalized recommendations
            for charities and causes, along with a suite of other impactful
            features, such as:
          </p>
          <div className="row">
            <div className="col">
              <h4>1. AI Chatbox</h4>
              <p>
                Bono offers an AI-powered chatbox to help users discover
                organizations that align with their passions and values. Share a
                bit about yourself to save time and simplify your search.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>2. Comprehensive Organization Profiles</h4>
              <p>
                Bono provides detailed profiles of organizations, fostering
                trust and transparency for users.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>3. Impact Tracking</h4>
              <p>
                Bono keeps users informed by tracking the impact of their
                donations, showing exactly where their contributions go.
              </p>
            </div>
          </div>
          <p>
            To showcase our product in action, here is a short demonstration
            featuring Nina's experience with our solution.
          </p>
          <div
            className="cover-photo"
            style={{ backgroundColor: "#fbb9b3", justifyContent: "center" }}
          >
            <video controls height="100%" src={NinaVid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bono;
