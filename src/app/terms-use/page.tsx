import React from 'react'

export default function TermsOfUse() {
    return (
        <div className="max-w-7xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold mb-8">Quantum Bee desk Terms and Conditions</h1>
            
            <div className="space-y-8 text-content">
                <p className="text-gray-600 italic">Last Updated: [Date]</p>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction and Acceptance</h2>
                    <p className="mb-4">
                        These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Quantum Bee desk website (www.quantumbeedesk.com), our related software applications, and services (collectively, the &ldquo;Services&rdquo;), provided by Quantum Bee Desk Inc. (&ldquo;Quantum Bee desk&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;). By accessing or using our Services—including but not limited to real‑time location tracking, location‑based attendance, task management, meeting note logging, route analytics, and payroll integration—you (the &ldquo;User&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo;) acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with these Terms, please discontinue use of the Services immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Account Registration and User Obligations</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-medium mb-2">2.1 Registration</h3>
                            <p>To access certain features of our Services, you must register for an account by providing accurate, complete, and current information (&quot;Registration Data&quot;).</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-2">2.2 Account Security</h3>
                            <p>You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately if you suspect any unauthorized access.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-2">2.3 Permitted Use</h3>
                            <p>You agree to use the Services solely for lawful business purposes, including managing field operations, tracking employee locations and attendance, recording meeting notes, and integrating data into payroll processes. You shall not use the Services to collect or store data beyond the scope of your business needs or for any unauthorized commercial purpose.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Use of the Services</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-medium mb-2">3.1 Service Features</h3>
                            <p className="mb-2">Quantum Bee desk provides a suite of integrated tools including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Real-Time Location Tracking: Monitor the live location of field employees and vehicles.</li>
                                <li>Location-Based Attendance: Automatically record attendance with geofencing and biometric verification options.</li>
                                <li>Task and Meeting Management: Create, assign, and track tasks and meeting notes in real time.</li>
                                <li>Route and Distance Analytics: Automatically compute travel distances and routes to facilitate reimbursements and improve operational efficiency.</li>
                                <li>Integrated Reporting: Generate daily, weekly, and monthly reports for performance monitoring and payroll integration.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-2">3.2 Restrictions</h3>
                            <p>You agree not to (a) attempt to disrupt or interfere with our Services; (b) reverse engineer, decompile, or otherwise tamper with our software; or (c) use automated tools to scrape or collect data beyond what is permitted by our user interface.</p>
                        </div>
                    </div>
                </section>

                {/* Continue with sections 4-12 in the same pattern */}
                
                <section>
                    <h2 className="text-2xl font-semibold mb-4">12. Entire Agreement</h2>
                    <p>These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Quantum Bee desk regarding your use of our Services.</p>
                </section>
            </div>
        </div>
    );
} 