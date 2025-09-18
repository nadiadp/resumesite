import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <h1 className="name">Nadia Pinos</h1>
      <p className="contact">
        📍 Sioux Falls, SD | 📞 (605) 929-1136 | ✉️{" "}
        <a href="mailto:pinosnadia@yahoo.com"className="email-link">pinosnadia@yahoo.com</a>
        <p>
            <a href="https://github.com/nadiadpinos" className="git-link" target="_blank" rel="noopener noreferrer"> Github </a>
        </p>
      </p>

      {/* Professional Summary */}
      <section>
        <h2>Professional Summary</h2>
        <p>
          Versatile and dynamic professional with a proven track record in
          customer service and rapport, demonstrated during my years of
          experience in the front-end food industry. Skilled in both technical
          and creative arenas, with experience in applications like GitHub and
          languages such as C/C++/C#. Adept in multitasking and adaptability,
          enhancing team efficiency and customer satisfaction. Always excited at
          the chance to strengthen and gain new skills.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Order Accuracy and Delivery</li>
          <li>Customer Service and Rapport</li>
          <li>Team Player & Creative</li>
          <li>C/C++/C#</li>
          <li>Familiar with HTML</li>
          <li>Adaptable and Flexible</li>
          <li>Advanced Mathematics</li>
          <li>Experience with Adobe applications</li>
          <li>Quartus, React, Visual Studio Code, GitHub</li>
        </ul>
      </section>

      {/* Professional Experience */}
      <section>
        <h2>Professional Experience</h2>

        <div className="job">
          <h3>Walmart Deli — Deli Associate</h3>
          <p className="date">Aug 2024 – Present</p>
          <ul>
            <li>
              Kept records related to inventory management and ordering
              activities accurately updated
            </li>
            <li>
              Trained new staff members on proper food preparation and safety
              procedures
            </li>
            <li>
              Verified freshness of food and ingredients by checking for quality
              and rotating stock
            </li>
            <li>
              Organized daily tasks according to priority level in order to meet
              production deadlines
            </li>
            <li>
              Excelled in customer communication by maintaining transparency and
              building rapport, ensuring a positive experience and trust in
              service
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>The Collegian — Editor / Social Media Promoter</h3>
          <p className="date">Aug 2023 – May 2025</p>
          <ul>
            <li>
              Created digital graphics to promote corresponding stories on
              social media
            </li>
            <li>
              Organized, created, and published posts to multiple social media
              accounts daily
            </li>
            <li>Actively informed on campus events at SDSU</li>
            <li>
              Reviewed and revised each of the written articles published each
              week
            </li>
            <li>
              Distributed physical copies of newspapers around campus
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Look’s Marketplace — Waitress</h3>
          <p className="date">Feb 2022 – Aug 2024</p>
          <ul>
            <li>
              Demonstrated proactive problem-solving by maintaining cleanliness
              and anticipating operational needs
            </li>
            <li>
              Worked with POS system to place orders, manage bills, and handle
              carryout items
            </li>
            <li>
              Maintained knowledge of specials and available items to assist
              guests
            </li>
            <li>
              Offered after-hours assistance for an official Sioux Falls mayoral
              event, contributing to event preparation and execution
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Burger Time — Cashier & Fry Cook</h3>
          <p className="date">Jun 2018 – Apr 2021</p>
          <ul>
            <li>
              Prepared multiple orders simultaneously during rush hours with
              high accuracy rate
            </li>
            <li>
              Operated cash register for cash, check, and credit card
              transactions
            </li>
            <li>Restocked and organized prep work</li>
            <li>Cleaned and maintained fryers and grills</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        <p>
          <strong>South Dakota State University</strong> — B.A. Computer Science
          (Candidate), Minor in Graphic Design <br />
          Expected Graduation: May 2026
        </p>
        <p>
          <strong>Washington High School</strong> — High School Diploma, May
          2021
        </p>
      </section>

      {/* Extracurriculars */}
      <section>
        <h2>Extracurriculars & Achievements</h2>
        <ul>
          <li>2024 Dean’s List (Spring and Fall Semesters)</li>
          <li>Published editorial for The Collegian</li>
          <li>
            Social Media and Graphic Design assistance for SDSU African Student
            Association
          </li>
          <li>Creative hobby in Photography, consistently adding to portfolio</li>
        </ul>
      </section>

      {/* PDF Link */}
      <div className="resume-download">
        <a   href={`${process.env.PUBLIC_URL}/PinosNadia_Resume.pdf`}
            target="_blank" rel="noopener noreferrer">
          📄 Download PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
