import React from 'react';

const ResponsibleDisclosure = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Responsible Disclosure</h1>

      <div className="space-y-6 text-gray-700">
        <p>
          CarMax is committed to the security of our services and our customers&apos; information.
          For additional details please see{' '}
          <a href="#" className="text-blue-600 hover:underline">
            CarMax&apos;s Responsibility Reports
          </a>
          . If you are a security researcher and have discovered a security vulnerability in one of
          our services, we appreciate your help in disclosing it to us in a responsible manner.
        </p>

        <div className="space-y-2">
          <h2 className="font-semibold text-gray-900">Prohibited Actions</h2>
          <p>
            Security researchers are prohibited from taking the following actions when investigating
            a potential security vulnerability:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Accessing, downloading or modifying data residing in any account that does not belong
              to that individual.
            </li>
            <li>Executing or attempting to execute any denial of service attack.</li>
            <li>
              Knowingly posting, transmitting, uploading, linking to, sending, or storing any
              malicious software on or through CarMax services.
            </li>
            <li>
              Sending or causing the sending of spam messages or other unsolicited messages to
              users.
            </li>
            <li>Testing in a manner that would degrade the operation of our services.</li>
            <li>
              Public disclosure of the details of any identified suspected vulnerability without
              express written consent from CarMax.
            </li>
            <li>Any other testing that violates applicable law or our Terms of Use.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-gray-900">Reporting</h2>
          <p>
            Any activities conducted in a manner consistent with our policies will be considered
            authorized conduct and we will not initiate legal action against you.
          </p>
          <p>
            Please share the details of any suspected or detected vulnerabilities with the CarMax
            Cybersecurity Team by emailing{' '}
            <a
              href="mailto:responsible_disclosure@carmax.com"
              className="text-blue-600 hover:underline"
            >
              responsible_disclosure@carmax.com
            </a>
            . The CarMax Cybersecurity Team will conduct a thorough investigation and then take the
            appropriate action.
          </p>
          <p>
            <a href="#" className="text-blue-600 hover:underline">
              Report vulnerability
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleDisclosure;
