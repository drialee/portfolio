import React from "react";
import "../../styles/projectPage.css";
import ChillLaptop from "../../utils/projects/Chill/ChillLaptop.png";
import ProjectNavBar from "../../components/ProjectNavBar";
import { hexToRgba } from "../../utils/utils";
import CompetiveAnalysis from "../../utils/projects/Chill/Competive.png";
import SocialMedia from "../../utils/projects/Chill/SocialMedia.png";
import V10 from "../../utils/projects/Chill/V1.0.png";
import V11 from "../../utils/projects/Chill/V1.1.png";
import FinalHome from "../../utils/projects/Chill/FinalHome.png";
import FinalView from "../../utils/projects/Chill/FinalView1.png";
import FinalProfile from "../../utils/projects/Chill/FinalProfile.png";
import FinalWatch from "../../utils/projects/Chill/WatchFinal1.png";
import FinalText from "../../utils/projects/Chill/WatchFinal2.png";
import { isMobile } from "react-device-detect";

const Chill = () => {
  return (
    <div>
      <ProjectNavBar
        sections={[
          "About",
          "User Research",
          "Insights",
          "Prototyping",
          "Product",
        ]}
      />
      <div className="project-page">
        <div className="proj-header">
          <h1>&Chill</h1>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col">
              <h5>Timeline</h5>
              <p>January - June 2023</p>
            </div>
            <div className="col">
              <h5>Team</h5>
              <p>1 person</p>
            </div>
            <div className="col">
              <h5>Role</h5>
              <p>UX Designer</p>
              <p>User Researcher</p>
            </div>
          </div>
        </div>
        <div
          className="cover-photo"
          style={{
            backgroundColor: `rgba(${hexToRgba("#3986FF", 0.3)})`,
            paddingTop: "5vh",
          }}
        >
          <img src={ChillLaptop} />
        </div>
        <div className="section" id="About">
          <h2>About</h2>
          <p>
            &Chill transforms streaming into an engaging, shared experience,
            enabling users to socialize and watch TV together—bridging distances
            and fostering meaningful connections.
          </p>
          <p>
            While many streaming platforms offer plug-ins for co-viewing, these
            solutions often fall short in creating a seamless and inclusive
            experience. Through my research, I identified three key pain points
            that make social streaming unnecessarily difficult:
          </p>
          <div className="col">
            <h4> 1. Requirement for Plug-ins or Memberships</h4>
            <p>
              Existing solutions often demand additional installations or
              exclusive subscriptions, creating unnecessary barriers.
            </p>
          </div>
          <div className="col">
            <h4>2. Limited Accessibility</h4>
            <p>
              Co-viewing is often restricted to exclusive groups, limiting
              opportunities for broader participation.
            </p>
          </div>
          <div className="col">
            <h4>3. Communication Barriers</h4>
            <p>
              Existing platforms fail to provide intuitive and engaging tools
              for interaction during streams. With &Chill, I set out to address
              these challenges and redefine what it means to stream together.
            </p>
          </div>
        </div>
        <div className="section" id="User Research">
          <h2>User Research</h2>
          <p>
            My first step was to go talk to users about their experience using
            social streaming services. I focused on Netflix Party, asking my
            interviewees about their experience with the extension. Here was
            some of the feedback I received:
          </p>
          <div className={isMobile ? "col" : "row"} style={{ gap: "5vh" }}>
            <div className="cap">
              "I love Netflix Partying with my friends but it’s really difficult
              to set up and takes a while. Everyone has to download the
              extension and the link has to work properly for everyone to be on
              the same show. If it was easier to do we would use it more."
            </div>
            <div className="cap">
              “I like Netflix Party, but my biggest frustration is the lack of a
              video component. You have to put Facetime on a separate device in
              order to watch together"
            </div>
            <div className="cap">
              "The extension almost always crashed my browser or wouldn’t work
              at all. If anything, Zoom’s features felt more communal by
              allowing everyone in the party to see each other while watching
              their movie/show”
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={CompetiveAnalysis}
              height="300px"
              style={{ marginTop: "5vh", marginBottom: "5vh" }}
            />
          </div>
          <p>
            To understand the current landscape, I conducted a competitive
            analysis of major streaming platforms such as Netflix, Prime Video,
            HBO, and Hulu. I found that none of these platforms offered
            integrated video chat functionality. Additionally, they often
            required all users to share the same subscription plan, and sending
            a video link was necessary to initiate co-viewing sessions.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={SocialMedia}
              height="300px"
              style={{ marginTop: "5vh", marginBottom: "5vh" }}
            />
          </div>
          <p>
            I also analyzed three social media platforms—Snapchat, HouseParty,
            and Spotify—that have revolutionized how we form genuine connections
            through technology. I identified key features that successfully
            engage and connect their users. For example, Snapchat uses Snap
            Streaks and individual scores to gamify social interactions,
            fostering ongoing engagement. Spotify enables users to share their
            song history and active listening status, creating a sense of
            community around shared tastes. HouseParty offers virtual rooms
            where users can wave to invite others, fostering a welcoming and
            casual environment.
          </p>
          <p>
            Inspired by these insights, I designed my platform to incorporate
            similar elements to create an open, engaging, and inclusive
            experience for users.
          </p>
        </div>
        <div className="section" id="Insights">
          <h2>Insights</h2>
          <p>My research confirmed my hypothesis:</p>
          <h4>
            There is a strong desire for a communal digital viewing experience,
            yet its widespread adoption is hindered by substantial communication
            and technological barriers.
          </h4>
          <p>This led me to confront questions such as:</p>
          <p>
            How can we <span>simplify the process</span> of inviting friends and
            synchronizing playback across devices for a seamless social
            streaming experience?
          </p>
          <p>
            How might we enable users to transition from individual to group
            streaming experience, {""}
            <span>
              preserving personalization while enhancing social interaction
            </span>
            ?
          </p>
          <p>
            How can we replicate the
            <span>shared excitement and interactions</span> of an in-person
            movie night through an online platform?
          </p>
        </div>
        <div className="section" id="Prototyping">
          <h2>Prototyping</h2>
          <p>
            After brainstorming and sketching my ideas on paper, I created the
            V1 prototype using Figma. For the homepage, I drew inspiration from
            existing streaming platforms to understand how they structure their
            layouts. I opted for a dark theme, anticipating that most users
            would be streaming in low-light settings.
          </p>
          <div
            className="row"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5vh",
              marginBottom: "5vh",
            }}
          >
            <div className="image-box-horizontal">
              <img src={V10} />
            </div>
            <div className="image-box-horizontal">
              <img src={V11} />
            </div>
          </div>
          <p>
            To foster social interaction, I incorporated features inspired by
            Spotify and HouseParty. The design includes a right-hand activity
            panel where users can see their friends' streaming activity.
            Additionally, users can request to join active, public watch
            parties, encouraging a seamless and engaging social streaming
            experience.
          </p>
          <h3>User Testing</h3>
          <p>
            After developing the main components of my solution, I conducted
            user testing with students at my university. Here are the key
            insights I gathered:
          </p>
          <p>
            Privacy Concerns: Two-thirds of participants preferred to keep their
            watch parties private, noting that spontaneous streaming could feel
            chaotic or risk unwanted participants joining.
          </p>
          <p>
            Video Call Feature: While users liked the idea of a video call, some
            expressed concerns that it might become distracting in larger
            groups.
          </p>
          <p>
            Clarity on Invitations: The concept of "sending an invite" was
            unclear—participants wanted more detail about what happens on the
            recipient’s side when an invite is sent.
          </p>
        </div>
        <div className="section" id="Product">
          <h2>Final Product</h2>
          <div
            className="col"
            style={{ gap: "10vh", marginTop: isMobile ? "10px" : "10vh" }}
          >
            <div
              className={isMobile ? "col" : "row"}
              style={{ gap: "5vw", alignItems: "center" }}
            >
              <img
                src={FinalHome}
                style={{
                  borderRadius: "10px",
                  height: isMobile ? "150px" : "400px",
                  width: "auto",
                }}
              />

              <div
                className="col"
                style={{ justifyContent: "center", gap: "5vh" }}
              >
                <h4>Home Page</h4>
                <p>
                  The homepage prioritizes friend interactions while maintaining
                  party privacy. Users can view active friend activity in the
                  right sidebar and see friend recommendations prominently
                  displayed at the top of their screen, encouraging seamless
                  social engagement.
                </p>
              </div>
            </div>
            <div
              className={isMobile ? "col" : "row"}
              style={{ gap: "5vw", alignItems: "center" }}
            >
              <img
                src={FinalProfile}
                style={{
                  borderRadius: "10px",
                  height: isMobile ? "150px" : "400px",
                  width: "auto",
                }}
              />
              <div
                className="col"
                style={{ justifyContent: "center", gap: "5vh" }}
              >
                <h4>Profile Page</h4>
                <p>
                  Users can curate their profile by selecting their favorite
                  shows, which are displayed for others to see. When visiting a
                  friend's profile, users can view their favorites along with
                  personalized recommendations for compatible shows to watch
                  together.
                </p>
              </div>
            </div>
            <div
              className={isMobile ? "col" : "row"}
              style={{ gap: "5vw", alignItems: "center" }}
            >
              <img
                src={FinalView}
                style={{
                  borderRadius: "10px",
                  height: isMobile ? "150px" : "400px",
                  width: "auto",
                }}
              />

              <div
                className="col"
                style={{ justifyContent: "center", gap: "5vh" }}
              >
                <h4>Video Page</h4>
                <p>
                  Users can invite up to five active friends to join a watch
                  party directly when starting a video, creating a collaborative
                  and social viewing experience.
                </p>
              </div>
            </div>
            <div className="col" style={{ gap: "5vh", alignItems: "center" }}>
              <div
                className={isMobile ? "col" : "row"}
                style={{ gap: "5vw", alignItems: "center" }}
              >
                <img
                  src={FinalWatch}
                  style={{
                    borderRadius: "10px",
                    height: isMobile ? "150px" : "300px",
                    width: "auto",
                  }}
                />
                <img
                  src={FinalText}
                  style={{
                    borderRadius: "10px",
                    height: isMobile ? "150px" : "300px",
                    width: "auto",
                  }}
                />
              </div>
              <h4>The Watch Party</h4>
              <p>
                During the watch party, users can chat live while enjoying their
                film together. The right section of the streaming screen is
                dedicated to both a chat tab and a video tab, ensuring easy
                communication and interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chill;
