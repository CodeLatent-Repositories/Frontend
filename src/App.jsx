import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*header section*/}
    <header>
      <div>
        <p id="companyName">CodeLatent</p>
      </div>
      <div class="rightHeader">
        <a>Home</a>
        <a>About</a>
        <a>Reach Out</a>
        <button>Get Started</button>
      </div>
    </header>

    {/*----main section-----*/}

    <main>
      <h2>Privacy Policy</h2>
      <p>At Code Latent, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you participate in our 7-day bootcamp on Data Structures and Algorithms (DSA) in Java and any subsequent paid courses.</p>

      {/*----Policy Ruels-----*/}
      <div>
        <ul>
          <li>We may collect the following types of information:</li>
          <li>This includes your name, email address, phone number, and any other information you provide during registration for our bootcamp or courses.</li>
          <li>If you enroll in a paid course, we will collect payment information necessary to process your transaction. This information is handled securely and in accordance with applicable laws.</li>
          <li>We may collect information about how you access and use our services, including your IP address, browser type, and pages visited.</li>
          <li><p>We use the information we collect for the following purposes:</p></li>
          <ol>
            <li>To register you for our bootcamp and any subsequent courses.</li>
            <li>To communicate with you regarding your registration, course materials, and updates.</li>
            <li>To process payments for any paid courses.</li>
            <li>To improve our services and enhance your experience.</li>
          </ol>
          <p></p>
          <li>We do not sell, trade, or otherwise transfer your personal information to outside parties, except as necessary to provide our services or comply with the law. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided that those parties agree to keep this information confidential.</li>
          <li>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</li>
          <li>You have the right to:
          Access the personal information we hold about you.
          Request correction of any inaccurate or incomplete information.
          Request deletion of your personal information, subject to certain exceptions.</li>
          <li>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.</li>
          <li>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: codelatent@gmail.com</li>
          <li>By participating in our bootcamp and courses, you consent to the collection and use of your information as outlined in this Privacy Policy.</li>
        </ul>
      </div>
    </main>

    {/*----footer section-----*/}

    <footer>
      <p>Connect Us</p>
      <div>
      <a class="footerLogo" href='https://www.instagram.com/codelatent?igsh=d24zcHo0ODB1MG1l' target='_blank'>
        <img src="sources\insta.png" alt="Instagram"/>
      </a>

      <a href='' target='_blank'>
        <img src="sources/gmail.png" alt="Instagram"/>
      </a>

      <a href='' target='_blank'>
        <img src="sources\linkedin.png" alt="Instagram"/>
      </a>

      <a href='' target='_blank'>
        <img src="sources\twitter.png" alt="Instagram"/>
      </a>
      </div>
      <p>© 2024 codelatent.com</p>
    </footer>
    </>
  )
}

export default App
