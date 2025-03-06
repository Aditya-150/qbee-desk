import React from 'react'

export default function Privacy() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Quantum Bee desk Privacy Policy</h1>
      
      <div className="space-y-8 text-content">
        <p className="text-gray-600 italic">Last Updated: [Date]</p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Privacy Policy (&ldquo;Policy&rdquo;) explains how Quantum Bee Desk Inc. (&ldquo;Quantum Bee desk&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) collects, uses, processes, and discloses your personal information when you use our website (www.quantumbeedesk.com), software applications, and related services (collectively, the &ldquo;Services&rdquo;). By accessing our Services, you agree to the collection and use of your data in accordance with this Policy and our Terms and Conditions. If you do not agree with this Policy, please do not use our Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect and Its Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
              <p>We collect information that personally identifies you (&ldquo;Personal Information&rdquo;), such as your name, email address, phone number, and any additional details provided during registration.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">2.2 Location and Operational Data</h3>
              <p>Our Services automatically collect data regarding the real‑time location of field employees, attendance logs (including geofencing data), task and meeting records, travel routes, and distance traveled. This data is used to provide our core functionalities, such as attendance tracking, route optimization, and integration into payroll processing.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">2.3 Usage Data</h3>
              <p>We also gather non-identifiable data about your interactions with our Platform, including IP address, browser type, pages visited, and timestamps. This information helps us analyze trends, monitor performance, and enhance security.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deliver and improve our Services, including real-time tracking, task management, and integrated reporting.</li>
            <li>Manage user accounts and provide personalized experiences.</li>
            <li>Communicate updates, support information, and marketing communications (you may opt out of non-essential messages).</li>
            <li>Process attendance records, route analytics, and integrate with payroll systems.</li>
            <li>Protect against fraud, unauthorized access, and other security risks.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </section>

        {/* Add sections 4-13 following the same pattern */}

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Complaints and Grievance Redressal</h2>
          <p className="mb-4">
            If you have any questions, concerns, or complaints regarding our privacy practices or your Personal Information, please contact our Grievance Officer at:
          </p>
          <div className="pl-4 border-l-4 border-gray-200">
            <p className="font-semibold">Grievance Officer</p>
            <p>Quantum Bee Desk Inc.</p>
            <p>[Office Address]</p>
            <p>Phone: +91 9599936991</p>
            <p>Email: support@quantumbeedesk.com</p>
          </div>
        </section>
      </div>
    </div>
  );
} 