import React from "react";
import "../../styles/projectPage.css";
import ProjectNavBar from "../../components/ProjectNavBar";
import { hexToRgba } from "../../utils/utils";

import TrainGoneCov from "../../utils/projects/TrainGone/TrainGonePage.png";
import Task1 from "../../utils/projects/TrainGone/Task1.png";
import Task2 from "../../utils/projects/TrainGone/Task2.png";
import Task3 from "../../utils/projects/TrainGone/Task3.png";
import Med from "../../utils/projects/TrainGone/MedFi.png";

const TrainGone = () => {
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
          <h1>TrainGone</h1>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col">
              <h5>Timeline</h5>
              <p>September - December 2023</p>
            </div>
            <div className="col">
              <h5>Team</h5>
              <p>4 people</p>
            </div>
            <div className="col">
              <h5>Role</h5>
              <p>UX Designer</p>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
        <div
          className="cover-photo"
          style={{
            backgroundColor: `rgba(${hexToRgba("#FF006E", 0.3)})`,
            paddingTop: "5vh",
          }}
        >
          <img src={TrainGoneCov} />
        </div>
        <div className="section" id="About">
          <h2>About</h2>
          <p>
            While current ASL dictionaries assume that the user already knows an
            English word and is seeking the corresponding ASL sign,{" "}
            <span>
              there is no intuitive platform that allows a user to identify the
              English word for an ASL sign based on its visual parameters
            </span>{" "}
            (handshape, body location, palm orientation, and movement).
          </p>
          <p>
            TrainGone functions both as a <span>“reverse ASL dictionary”</span>{" "}
            and a<span> social educational platform </span>
            where one can contribute to an ASL sign’s dictionary entry by
            uploading a video of themselves using the key ASL sign in an example
            story. This allows ASL learners to gain contextual exposure to
            unfamiliar signs by seeing crowdsourced examples, and fluent ASL
            signers to engage in storytelling, the foundation of Deaf culture
            and community.
          </p>
        </div>
        <div className="section" id="User Research">
          <h2>User Research</h2>
          <p>
            We selected participants who had a diverse range of relationships
            with ASL. Interviewee backgrounds included a deaf native ASL signer,
            two ASL interpreters, one developer of an sign language AI motion
            capture software, a hearing ASL student of 6 years, and an ASL
            student of 3 years with a disability that will cause them to become
            deaf in a few years.
          </p>
          <h3>Key Findings</h3>
          <p>
            Through our conversations, we uncovered important nuances within the
            Deaf community:
          </p>
          <p>
            <span>1. Diverse Perspectives on Identity:</span>
          </p>
          <p>
            Some Deaf individuals embrace the label of "disabled," while others
            reject it as a form of self-empowerment. This highlights the
            cultural and individual variability in how Deafness is perceived.
          </p>
          <p>
            <span>2. Communication Preferences:</span>
          </p>
          <p>
            Not all Deaf individuals use ASL. Those with assistive technologies
            or late-deafened individuals may rely on lip-reading or alternate
            methods, while some use a combination of communication tools.
          </p>
          <p>
            <span>3. Interpretation Nuances:</span>
          </p>
          <p>
            Some Deaf individuals prefer interpreters to maintain a literal
            translation to preserve the original message, while others value
            interpreters focusing on conveying the underlying meaning.
          </p>
          <p style={{ marginTop: "5vh" }}>
            We also identified key challenges faced by our interviewees:
          </p>
          <p>
            <span>1. Advanced ASL Students: </span>
          </p>
          <p>
            Students often struggle to progress without access to a Deaf
            community for immersion, leaving them feeling isolated in their
            learning journey.
          </p>
          <p>
            <span>2. Interpreter Fit:</span>
          </p>
          <p>
            Even proficient interpreters may not always align with the
            preferences of Deaf clients due to differences in signing accent,
            style, or approach.
          </p>
          <p>
            <span>3. Linguistic Barriers: </span>
          </p>
          <p>
            The divide between the Deaf and hearing communities is not rooted in
            disability but in the lack of a shared language. Deafness is not
            solely a disability but a cultural and linguistic identity.
          </p>
        </div>
        <div className="section" id="Prototyping">
          <h2>Experience Prototype</h2>
          <div className="col" style={{ gap: "25px" }}>
            <p>We narrowed our focus to a single guiding question:</p>
            <h3 style={{ alignSelf: "center" }}>
              How Might We empower ASL speakers to communicate and connect on a
              global scale?
            </h3>
            <p>
              From this statement, we developed three potential solutions and
              created corresponding experience prototypes to evaluate their
              effectiveness. Our goal was to ensure that we were designing
              something that people truly wanted and needed.
            </p>
            <h4>1. Spontaneous Hang-Outs</h4>
            <p>
              Prototype: We invited six Stanford students who had previously
              taken a Spanish course to meet at Coupa Café and practice speaking
              Spanish together.
            </p>
            <p>
              Assumption: We believed that a spontaneous meet-up would provide
              an ideal opportunity for students to practice language skills in a
              casual setting.
            </p>
            <p>
              Our Findings: Low attendance revealed that same-day events are
              difficult for people to prioritize. Despite interest, language
              practice often takes a backseat to other, more pressing
              commitments. To encourage participation, we realized that events
              need to feel less like a significant commitment and have a lower
              barrier to entry—or they should be planned with more notice to
              accommodate busy schedules.
            </p>
            <h4>2. Audio-less Video Platform</h4>
            <p>
              Prototype: We asked two hearing students to view three different
              styles of TikToks twice—once without audio and once with audio—and
              rate their experiences.
            </p>
            <p>
              Assumption: We hypothesized that viewers would find the same level
              of engagement and enjoyment without audio as they would with
              audio. This experiment aimed to measure the impact of audio on the
              social media experience.
            </p>
            <p>
              Our Findings: Audio significantly enhances social media
              experiences by engaging two senses—hearing and
              sight—simultaneously. It improves learning by activating both
              auditory and visual learning styles. While visual cues and haptics
              could enhance the experience further, audio remains the most
              effective medium for engagement and learning. Any alternative
              sensory methods should aim to replicate the strengths of audio as
              closely as possible.
            </p>
            <h4>3. Language Karaoke</h4>
            <p>
              Prototype: We asked Spanish learners to watch and sing along to
              two different Spanish karaoke songs on YouTube.
            </p>
            <p>
              Assumption: Singing in a target language would be an enjoyable
              activity, motivating learners to practice.
            </p>
            <p>
              Our Findings: Many language learners, especially those at beginner
              levels, felt uncomfortable singing in front of an audience. A
              language karaoke application would likely appeal more to
              individuals already proficient in the language and comfortable
              performing publicly.
            </p>
            <p>
              Testing these experience prototypes guided us toward a
              comprehensive solution: a social educational platform that
              empowers deaf signers to define signs through video storytelling
              while providing learners with additional context to reinforce
              their understanding. This approach bridges gaps between learning
              styles and cultural expression, creating an engaging and inclusive
              environment for both deaf signers and learners.
            </p>
          </div>
          <div className="col" style={{ gap: "25px", marginTop: "5vh" }}>
            <h2>Low-Fidelity Prototype</h2>
            <p>
              Our next step involved extensive sketching to explore a variety of
              interfaces. From these sketches, two concepts stood out to us: a
              mobile application and a virtual reality experience.
            </p>
            <p>
              We were particularly enthusiastic about the VR concept, as it
              would allow users to practice signs in realistic, everyday
              environments. Users could create personalized avatars to mimic
              their signed gestures, providing an immersive learning experience.
              However, due to technological and feasibility constraints, we
              pivoted to focusing on a mobile application. While VR wasn’t an
              option, we believed a mobile app could still immerse users in a
              digital social environment that fosters engagement and learning.
            </p>
            <p>
              To begin, we sketched the primary concepts for the mobile app,
              focusing on three core tasks:
            </p>

            <div className="col">
              <h4>1. Searching for an ASL Definition</h4>
              <h4>2. Exploring New and Similar Definitions</h4>
              <h4>3. Posting Your Own Definition</h4>
            </div>
          </div>
          <div className="col" style={{ gap: "25px", marginTop: "5vh" }}>
            <h2>Mid-Fidelity Prototype</h2>
            <p>
              Moving into the mid-fidelity (Mid-Fi) stage, we created a
              prototype on Figma and conducted usability tests. This phase
              allowed us to refine our ideas further and address usability
              concerns. Our focus for the Med-Fi prototype included making icons
              explicit and easy to understand, introducing interactions such as
              liking and commenting, and prioritize searching by sign.{" "}
            </p>
            <img src={Med} />
            <p>
              The Mid-Fi prototype showcased the three core tasks, along with a
              sign-up flow and profile example. After completing the prototype,
              we shared it with another group in our studio for a heuristic
              evaluation. This evaluation identified 67 usability violations,
              with 12 categorized as Severity 3 or 4 (major and critical
              issues). Based on this feedback, we prioritized addressing the
              most severe errors to improve the overall usability of our design.
            </p>
          </div>
        </div>
        <div className="section" id="Product">
          <h2>Final Product</h2>
          <h3>Final Implementation</h3>
          <p>
            After incorporating design changes from our heuristic evaluation, we
            began coding our app. The final prototype was built using the React
            Native framework, leveraging its extensive library ecosystem for
            implementation. React Native was chosen because of its ability to
            support both Android and iOS platforms, a feature we deemed
            essential to ensure inclusivity and accessibility for a diverse
            audience.
          </p>
          <p>
            The most complex feature of our project—creating a video—was fully
            implemented in the prototype. However, the other two tasks, looking
            up a word and browsing other users’ videos, faced limitations due to
            the absence of an existing user base. Without a populated database,
            users could neither search for dictionary entries nor explore videos
            uploaded by others. To address this, we hard-coded data to simulate
            a fully functioning app and provide a realistic user experience for
            these tasks.
          </p>
          <h3>Hard-Coded Data</h3>
          <p>Drinks: Water, Coffee, Milk</p>
          <p>Sports: Baseball, Soccer, Football</p>
          <p>Greetings: Hello, Good to see you, What’s up</p>
          <p>
            Additionally, we added video thumbnails to the home screen and
            profile screens to simulate a populated app environment. These
            enhancements were designed to give the appearance of an existing,
            fully functional platform, allowing users to experience the app as
            it was intended.
          </p>
          <h3>Demo Video</h3>
          <p>
            Below is a link to our demo video, showcasing the fully developed
            task flows and functionality of our prototype.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/--dKGtDRh2A?si=1PP0nheHlUiKKRP7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style={{ alignSelf: "center" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrainGone;
