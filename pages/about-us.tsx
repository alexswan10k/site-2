import { NextPage } from "next"
import { css } from "@emotion/css";
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";
import Image from "next/image";

const AboutUsPage: NextPage = () => {
    // Styles object to organize all inline styles
    const styles = {
      heroImage: {
        flex: 1,
        position: "relative",
        width: "100%",
        height: '400px',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      },
      heroText: {
        flex: 1,

      },
      sectionTitle: {
        fontSize: '32px',
        marginBottom: '30px',
        color: '#2c3e50',
      },
      missionImage: {
        flex: 1,
        position: "relative",
        width: "100%",
        height: '300px',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      },
      missionText: {
        flex: 1,
        lineHeight: '1.6',
      },

      teamMember: {
        textAlign: 'center',
      },
      memberImage: {
        position: "relative",
        width: '130px',
        height: '160px',
        borderRadius: '50%',
        backgroundColor: '#e0e0e0',
        margin: '0 auto 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

      },

      statItem: {
        padding: '20px',
      },
    } as const;

    return (
      <PageContainer title="About us" description="About us page">
        <ManagedMenu />
        <br />

        <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 40px;
            grid-column-gap: 40px;

            // for mobile drop down to 1 column
            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        `}>
          <div style={styles.heroImage}>
            {/* [Hero Image Placeholder] */}
            <Image
              src="/dude-at-computer.jpg" // Assuming the image is in the public directory
              alt="Hero Image"
              layout="fill" // This allows the image to fill its container

              style={{ borderRadius: '8px' }} // Inline styles for border radius
/>
          </div>
          <div style={styles.heroText}>
            <h1 style={styles.sectionTitle}>About Our Company</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Lambdasafe, founded by Alex Swan, a seasoned full stack software engineer, who brings over a decade of experience in building scalable and reliable systems. Previously having worked at companies such as Rolls Royce and Hargreaves Lansdown, Alex developed the core technology for BIGKit, a rapid application platform. Our approach is to use tools that enhance determinism, predictability, and reliability, leading to software with significantly lower defect rates and higher stability.
            </p>
          </div>



          <div style={styles.missionText}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p>
            At Lambdasafe, we aim to deliver efficient, reliable software by leveraging the principles of simplicity and predictability. We focus on using the S.A.F.E. functional stack to reduce complexity and maintenance costs, ensuring our clients benefit from stable, high-quality software solutions.
            </p>
          </div>
          <div style={styles.missionImage}>
            <Image src="ornament.jpg" alt="Mission" layout="fill" style={{ borderRadius: '8px' }} />
          </div>



          <div style={styles.heroImage}>
            {/* [Hero Image Placeholder] */}
            <Image src="glass-building.jpg" alt="Hero Image"  layout="fill" style={{ borderRadius: '8px' }} />
          </div>
          <div style={styles.heroText}>
            <h1 style={styles.sectionTitle}>Our Process</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Our development process starts with understanding your specific problem, guiding you towards an effective solution. We offer two main approaches:
Agile Approach: Recommended for flexibility, allowing for quick iterations and user feedback to shape the development cycle.
Up-Front Approach: For those with fixed budgets, we provide detailed estimates but note the inherent risks and premiums of this method. Both methods aim for continuous feedback and visible progress, ensuring you&#39;re investing in features that add the most value.
            </p>
          </div>

        <section className={css`
            //span 2 css grid rows
            grid-column: 1/3;
            @media (max-width: 768px) {
             grid-column: 1/2;
            }
          `}>
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }}>Our Team</h2>
          <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
                marginBottom: '60px',
              }}>
            <div style={styles.teamMember}>
                <div style={styles.memberImage}>
                  <Image src="alex-profile-c.png" alt="Team Member Photo" layout="fill"  />
                </div>
                <h3>Alex Swan</h3>
                <p>Director</p>
              </div>
          </div>
          </section>

        <section className={css`
            //span 2 css grid rows
            grid-column: 1/3;
            display: flex;
            justify-content: space-around;
            text-align: center;
            padding: 40px 0;
            background-color: #f8f9fa;
            border-radius: 8px;

            @media (max-width: 768px) {
             grid-column: 1/2;
            }
          `}>
          <div style={styles.statItem}>
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div style={styles.statItem}>
            <h3>7+</h3>
            <p>Projects Completed</p>
          </div>
          <div style={styles.statItem}>
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </section>
        </div>
      </PageContainer>
    );
  }

  export default AboutUsPage;