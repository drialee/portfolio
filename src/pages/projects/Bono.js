import React from "react";
import "../../styles/projectPage.css";
import BonoCover from "../../utils/projects/Bono/BonoCover.png";
import { hexWithOpacity } from "../../utils/utils";
import ProjectNavBar from "../../components/ProjectNavBar";
import BonoBrand1 from "../../utils/projects/Bono/BonoBrand1.png";
import BonoBrand2 from "../../utils/projects/Bono/BonoBrand2.png";
import BonoBrand3 from "../../utils/projects/Bono/BonoBrand3.png";
import BonoBrand4 from "../../utils/projects/Bono/BonoBrand4.png";
import LofiChat from "../../utils/projects/Bono/ChatLofi.png";
import LofiDiscover from "../../utils/projects/Bono/DiscoverLofi.png";
import LofiSearch from "../../utils/projects/Bono/SearchLofi.png";
import LofiHome from "../../utils/projects/Bono/HomepageLofi.png";

const Bono = () => {
  return (
    <div>
      <ProjectNavBar
        sections={[
          "About",
          "Exploration",
          "Branding",
          "Prototyping",
          "Reflections",
        ]}
      />
      <div className="project-page">
        <div className="proj-header">
          <h1>Bono</h1>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col">
              <h5>Timeline</h5>
              <p>January 2024 - June 2024</p>
            </div>
            <div className="col">
              <h5>Team</h5>
              <p>5 people</p>
            </div>
            <div className="col">
              <h5>Role</h5>
              <p>Front-end engineer</p>
            </div>
          </div>
        </div>
        <div className="cover-photo" style={{ backgroundColor: "#fbb9b3" }}>
          <img src={BonoCover} />
        </div>
        <div className="section" id="About" style={{ marginTop: "10vh" }}>
          <h2>About</h2>
          <p>
            Bono is a platform designed to simplify the process of discovering
            trustworthy charities. We connect users with organizations that
            align with their values, passions, and personal stories, making it
            easier to give back in a meaningful way.
          </p>
        </div>
        <div className="section" id="Exploration" style={{ marginTop: "10vh" }}>
          <h2>Exploration</h2>
          <p>
            My team conducted{" "}
            <span style={{ fontWeight: 600, color: "#FB7164" }}>
              42 user interviews and 44 quantitative surveys{" "}
            </span>
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
            <span style={{ fontWeight: 600, color: "#FB7164" }}>
              overwhelmed and skeptical{" "}
            </span>
            about the vast number of nonprofit organizations. This uncertainty
            leads many to fall into a cycle of endless research, preventing them
            from taking action even when they’re inclined to contribute."
          </p>
        </div>
        <div className="section" id="Branding" style={{ marginTop: "10vh" }}>
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
        <div className="section" id="Prototyping" style={{ marginTop: "10vh" }}>
          <h2>Prototyping</h2>
          <p>
            We began with brainstorming sessions using whiteboard exercises and
            plenty of sticky notes, exploring ideas like gamification,
            bite-sized lessons, AI storytelling, and a news website plug-in.
            Next, we moved into prototyping on Figma, creating several
            low-fidelity screens that outlined the main components of our
            application: a home screen, discover page, organization page, and an
            AI chatbox. To foster diverse ideas, each team member took on two
            features, allowing us to broaden our creative approach."
          </p>
          <div className="proj-image-grid">
            <img src={LofiHome} style={{ height: "370px" }} />
            <img
              src={LofiDiscover}
              style={{
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgb(0 0 0 / 10%)",
                height: "400px",
                width: "auto",
              }}
            />
            <img
              src={LofiSearch}
              style={{
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgb(0 0 0 / 10%)",
                maxHeight: "400px",
                width: "auto",
              }}
            />
            <img
              src={LofiChat}
              style={{
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgb(0 0 0 / 10%)",
                height: "350px",
                width: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bono;
