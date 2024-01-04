import React from 'react';
import "./experience.css";
import Image1 from "../../assets/jasonexperience.png";

const data = [
  {
    id: 1,
    // image: Image1,
    title: "CVS Pharmacy",
    description: 
      "Job Title 1, Company Name 1, Location 1, Duration 1, Description of responsibilities and achivements for Job 1."
  },
  {
    id: 2,
    // image: Image1,
    title: "Walgreens",
    description: 
      "Blah blah blah."
  },
  {
    id: 3,
    // image: Image1,
    title: "Rutgers University",
    description: 
      "Blah blah blah."
  },
  ];

const Experience = () => {
  return (
    <section className="experience container section" id = "experience">
      <h2 className="section_title">Experience</h2>
{/* 
      <div className="experience_container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="experience_card" key={id}>
              <img src={image} alt="" className="experience_img" />
              <h3 className="experience_title">{title}</h3>
              <p className="experience_description">{description}</p>
            </div>
          );
        })}
      </div> */}

      <div className="experience_container grid">
        <div className="experience_card">
          <h3 className="experience_company"> CVS Pharmacy </h3>
          <h4 className="experience_position"> Pharmacy Technician </h4>
          <h5 className="experience_location"> Leonia, NJ</h5>
          <h5 className="experience_duration"> May 2023 - Present</h5>
          <ul className="experience_description">
            <li>Assisted in overseeing patient care and medications in a fast-paced worked environment.</li>
            <li>Accurately filled and processed an average of 100+ prescriptions per shift.</li>
            <li>Performed inventory management tasks, including verification of medication in stock by cycle counts and restocking medications in out-of-stock situations.</li>
          </ul>
          <br />
          <hr />
          <br />

          <h3 className="experience_company"> Walgreens </h3>
          <h4 className="experience_position"> Pharmacy Technician </h4>
          <h5 className="experience_location"> Fort Lee, NJ</h5>
          <h5 className="experience_duration"> May 2021 - Feb 2022</h5>
          <ul className="experience_description">
            <li>Tended to patient needs, questions, and concerns in person and over the phone; Communicated directly with doctors' offices and insurance agencies via telephone to discuss patient needs.</li>
            <li>Handled inventory management tasks including cycle counts to confirm medications were in stock, removal of out-of-date medications, and assisted in the ordering of medications to prevent out-of-stock situations.</li>
            <li>Thoroughly and accurately filled and processed 100+ prescriptions each shift.</li>
          </ul>
          <br />
          <hr />
          <br />

          <h3 className="experience_company"> Rutgers University </h3>
          <h4 className="experience_position"> Laboratory Assistant </h4>
          <h5 className="experience_location"> Piscataway, NJ</h5>
          <h5 className="experience_duration"> Aug 2021 - May 2022</h5>
          <ul className="experience_description">
            <li>Developed and set up lab procedures and demonstrations for professors to incorporate into their lectures.</li>
            <li>Maintained lab inventory, restocking materials and reagents necessary for lecture or class demonstrations.</li>
            <li>Provided technical support to faculty in using in-class technology, including computers and projectors.</li>
          </ul>

        </div>
      </div>

    </section>
  )
}

export default Experience