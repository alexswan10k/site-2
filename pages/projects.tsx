import { NextPage } from "next"
import { ManagedEditor } from "react-inline-node-editor-bigkit"
import ManagedMenu from "../managed-components/components/ManagedMenu";
import PageContainer from "./components/PageContainer";
import { schema } from "../managed-components/schema";
import Image from "next/image";

const ProjectsPage: NextPage = () => {
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
          <Image src="agentic.jpg" alt="Agentic Systems" layout="fill" />
        </div>
        <div style={styles.heroText}>
          <h1 style={styles.sectionTitle}>Agentic Systems</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            We are working on fully autonomous AI agentic systems, taking advantage of RAG, short and long term memory, function calling and models which can be self deployed or ran locally through ollama.
          </p>
        </div>
      </section>

      <section style={styles.missionSection}>
        <div style={styles.missionText}>
          <h2 style={styles.sectionTitle}>Voltage Modular Modules</h2>
          <p>
          We have developed advanced modules for a leading modular synthesis platform, utilizing cutting-edge programming languages to enhance audio processing capabilities. Our innovations include solutions for real-time audio effects and performance-enhancing technologies.<strong>Demo on request. </strong>
          </p>
          <p>
          Fully released modules can be found <a href="https://store.cherryaudio.com/manufacturers/lambdasafe" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </div>
        {/* <div style={styles.missionImage}> */}
          <Image src="vm-reverb-ss.png" alt="Voltage Modular" width={300} height={400}  />
        {/* </div> */}
      </section>

      <section style={styles.heroSection}>
        <div style={styles.heroImage}>
          <Image src="line-drag-demo.gif" alt="Safe Passage" layout="fill" />
        </div>
        <div style={styles.heroText}>
          <h1 style={styles.sectionTitle}>Safe Passage</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          We have created a fully featured Vue abstraction for a 3D visualization library used in medical and security imaging. This solution enhances training applications by simulating different imaging scenarios, with features for scene manipulation and real-time parameter adjustments.  <strong>Demo available on request.</strong>
          </p>
        </div>
      </section>

      <section style={styles.missionSection}>
          <div style={styles.missionText}>
            <h2 style={styles.sectionTitle}>Bigkit</h2>
            <p>
            Bigkit attempts to bridge the gap between a publish-focused CMS and real application development. It was built from the ground up to include some core tenets an opinionated software engineer might expect from a system builder.
            </p>
          </div>
          <div style={styles.missionImage}>
            <Image src="bigkit-hello-world.gif" alt="Mission" layout="fill" style={{ borderRadius: '8px' }} />
          </div>
        </section>
      

    </div>
  );
}

export default ProjectsPage;