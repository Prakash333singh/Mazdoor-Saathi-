import "./terms.css";

const Terms_and_services = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-36 flex flex-col">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Terms and Conditions
      </h1>
      <p className="text-lg mb-6 text-black font-medium">
        Welcome to Mera Rojgar Mera Adhikar, powered and managed by Right Path
        Predictor Pvt Ltd. <br />
        By accessing and using our platform, you agree to comply with the
        following terms and conditions:
      </p>
      <ol className="list-decimal list-inside mb-8  mt-2">
        <li className="mb-4 tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700">General Terms:</span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar serves as a digital platform connecting
            migrant workers, employers, businesses, contractors, and associates
            for job opportunities and related services. All users are required
            to adhere to applicable laws and regulations while using the
            platform.
          </p>
        </li>

        <li className="mb-4  mt-5 tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700 ">Worker Terms:</span>
          <p className="text-gray-500">
            Workers using the platform are responsible for providing accurate
            information regarding their skills, qualifications, and availability
            for job assignments. Payment terms, including wages, bonuses, and
            incentives, will be communicated between workers and employers
            directly. Mera Rojgar Mera Adhikar is not responsible for any
            payment disputes between parties if connected directly without our
            information.
          </p>
        </li>

        <li className="mb-4 tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700">Employer Terms:</span>
          <p className="text-gray-500">
            Employers must ensure that job listings comply with labor laws and
            regulations, including fair wages, working conditions, and
            non-discrimination policies. Employers agree to pay any applicable
            platform fees for accessing worker matching services and job
            postings.
          </p>
        </li>

        <li className="mb-4 tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700">Contractor Terms:</span>
          <p className="text-gray-500">
            Contractors providing services through Mera Rojgar Mera Adhikar
            agree to deliver quality services in accordance with agreed-upon
            terms and timelines. Payment terms and conditions for contractor
            services will be negotiated between contractors and clients
            directly.
          </p>
        </li>

        <li className="mb-4  tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700 "> Associate Terms:</span>
          <p className="text-gray-500">
            Associates collaborating with Mera Rojgar Mera Adhikar for
            promotional or support purposes must comply with the platform&apos;s
            guidelines and policies. Any fees or commissions associated with
            associate partnerships will be outlined in separate agreements
            between parties.
          </p>
        </li>

        <li className="mb-4  tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700"> Platform Fees:</span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar may charge platform fees for accessing
            certain services, including worker matching, job postings, and
            premium features. Users will be notified of any applicable fees
            before accessing paid services, and payment terms will be clearly
            communicated.
          </p>
        </li>

        <li className="mb-4 tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700"> Privacy and Data:</span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar collects and processes user data in
            accordance with its Privacy Policy. By using the platform, users
            consent to the collection, use, and storage of their personal
            information. Cookies may be used to enhance user experience and
            analyze platform usage. Users can manage cookie preferences through
            their browser settings.
          </p>
        </li>

        <li className="mb-4  tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold text-gray-700 "> Legal Compliance:</span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar complies with relevant data protection laws
            and regulations. In the event of legal requests or law enforcement
            inquiries, we may disclose personal information as required by law.
          </p>
        </li>

        <li className="mb-4  tracking-wider sm:flex flex-col lg:items-start">
          <span className="font-bold mt-2 text-gray-700 ">
            Modification of Terms:
          </span>
          <p className="text-gray-500">
            Mera Rojgar Mera Adhikar reserves the right to modify these terms
            and conditions at any time. Users will be notified of any changes,
            and continued use of the platform constitutes acceptance of the
            updated terms.
          </p>
        </li>
      </ol>
      <p className="text-lg font-semibold tracking-wider">
        Contact Us: If you have any questions or concerns regarding these terms
        and conditions, please contact us at{" "}
        <a href="mailto:rightpathpredictor@gmail.com" className="text-blue-500">
          {" "}
          rightpathpredictor@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Terms_and_services;
