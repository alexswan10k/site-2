import { NextPage } from "next"
import { ManagedEditor } from "react-inline-node-editor-bigkit"
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";
import { schema } from "../managed-components/schema";
import Image from "next/image";

const AboutUsPage: NextPage = () => {
    // Styles object to organize all inline styles
    const styles = {
      container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0px 20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      },
      heroSection: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '60px',
        gap: '40px',
      },
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
        padding: '20px',
      },
      sectionTitle: {
        fontSize: '32px',
        marginBottom: '30px',
        color: '#2c3e50',
      },
      missionSection: {
        display: 'flex',
        gap: '40px',
        marginBottom: '60px',
        alignItems: 'center',
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
      teamSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginBottom: '60px',
      },
      teamMember: {
        textAlign: 'center',
      },
      memberImage: {
        position: "relative",
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#e0e0e0',
        margin: '0 auto 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

      },
      statsSection: {
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        padding: '40px 0',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
      },
      statItem: {
        padding: '20px',
      },
    } as const;
  
    return (
      <div style={styles.container}>

        <ManagedMenu />
        <br />  

        <section style={styles.heroSection}>
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
        </section>
  
        {/* Mission Section */}
        <section style={styles.missionSection}>
          <div style={styles.missionText}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p>
            At Lambdasafe, we aim to deliver efficient, reliable software by leveraging the principles of simplicity and predictability. We focus on using the S.A.F.E. functional stack to reduce complexity and maintenance costs, ensuring our clients benefit from stable, high-quality software solutions.
            </p>
          </div>
          <div style={styles.missionImage}>
            <Image src="ornament.jpg" alt="Mission" layout="fill" style={{ borderRadius: '8px' }} />
          </div>
        </section>

        <section style={styles.heroSection}>
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
        </section>
  
        {/* Team Section */}
        <section>
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }}>Our Team</h2>
          <div style={styles.teamSection}>
            <div style={styles.teamMember}>
                <div style={styles.memberImage}>
                  <Image src="alex-profile-c.png" alt="Team Member Photo" layout="fill"  />
                </div>
                <h3>Alex Swan</h3>
                <p>Director</p>
              </div>
          </div>
        </section>
  
        {/* Stats Section */}
        <section style={styles.statsSection}>
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
    );
  }
  
  export default AboutUsPage;