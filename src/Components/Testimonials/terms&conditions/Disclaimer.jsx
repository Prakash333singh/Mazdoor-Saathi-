const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-36 flex flex-col">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Disclaimer: Mera Rojgar Mera Adhikar Platform
      </h1>
      <p className="text-lg mb-6 text-black font-medium">
        Welcome to Mera Rojgar Mera Adhikar, a digital platform designed to
        connect migrant workers, employers, businesses, and contractors in a
        seamless and efficient manner. Before you proceed to use our services,
        we urge you to read and understand the following disclaimer:
      </p>
      <ol className="list-decimal list-inside mb-8  mt-2">
        <li className="mb-4  tracking-wider sm:flex flex-col">
          <span className="font-bold text-gray-700">Information Accuracy:</span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar endeavors to provide accurate and
            up-to-date information regarding job opportunities, locations, and
            other relevant details. However, we cannot guarantee the accuracy,
            completeness, or reliability of the information provided. Users are
            encouraged to verify any critical information independently.
          </p>
        </li>

        <li className="mb-4  mt-5 tracking-wider sm:flex flex-col">
          <span className="font-bold text-gray-700 ">User Responsibility:</span>
          <p className="text-gray-500">
            Users of the platform, including migrant workers, employers,
            businesses, and contractors, are solely responsible for their
            interactions and engagements. Mera Rojgar Mera Adhikar is a
            facilitator and does not endorse or guarantee the authenticity,
            reliability, or suitability of any user on the platform. Users are
            advised to exercise due diligence before entering into any
            agreements or transactions.
          </p>
        </li>

        <li className="mb-4 tracking-wider  sm:flex flex-col ">
          <span className="font-bold text-gray-700">Third-Party Links:</span>
          <p className="text-gray-500">
            Our platform may contain links to third-party websites or services.
            These links are provided for convenience and informational purposes
            only. Mera Rojgar Mera Adhikar does not endorse, control, or assume
            responsibility for the content, policies, or practices of any
            third-party websites or services.
          </p>
        </li>

        <li className="mb-4  tracking-wider sm:flex flex-col">
          <span className="font-bold text-gray-700">Security Measures:</span>
          <p className="text-gray-500">
            While we implement security measures to protect user data and
            information, Mera Rojgar Mera Adhikar cannot guarantee the absolute
            security of data transmitted over the internet. Users are encouraged
            to take precautions to safeguard their personal and sensitive
            information.
          </p>
        </li>

        <li className="mb-4  tracking-wider sm:flex flex-col">
          <span className="font-bold text-gray-700 ">Platform Changes:</span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar reserves the right to modify, suspend, or
            discontinue any aspect of the platform at any time, including the
            availability of features, databases, or content. We may also impose
            limits on certain features or restrict access without prior notice.
          </p>
        </li>

        <li className="mb-4  tracking-wider sm:flex flex-col">
          <span className="font-bold text-gray-700"> Legal Compliance:</span>
          <p className="text-gray-500">
            Users are required to comply with all applicable laws and
            regulations while using Mera Rojgar Mera Adhikar. Any violation of
            legal standards or unethical practices may result in the termination
            of the user&apos;s account and legal action.
          </p>
        </li>

        <li className="mb-4 tracking-wider sm:flex flex-col">
          <span className="font-bold text-gray-700">Disclaimer Updates:</span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar may update this disclaimer from time to
            time. Users are encouraged to check the disclaimer regularly to stay
            informed about any changes. Continued use of the platform after
            changes are made implies acceptance of the modified disclaimer.
          </p>
        </li>
      </ol>
      <p className="text-lg font-semibold tracking-wider">
        Mera Rojgar Mera Adhikar may update this disclaimer from time to time.
        Users are encouraged to check the disclaimer regularly to stay informed
        about any changes. Continued use of the platform after changes are made
        implies acceptance of the modified disclaimer.
      </p>
    </div>
  );
};

export default Disclaimer;
