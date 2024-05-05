import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-8 mt-20 bg-gray-200 mb-10 rounded-lg">
      <Accordion
        title="1. What is Mera Rojgar Mera Adhikar?"
        answer="Mera Rojgar Mera Adhikar is a digital platform designed to connect migrant workers with employers, 
                businesses, and contractors, providing job opportunities and support services."
      />
      <Accordion
        title="2. How does Mera Rojgar Mera Adhikar work?"
        answer="The platform matches workers with suitable job opportunities based on their skills and preferences. 
                Employers and businesses can post job listings, and workers can apply and admin can match them
                with nearby work opportunity."
      />
      <Accordion
        title="3. Is Mera Rojgar Mera Adhikar free to use?"
        answer="Yes, the platform is free for workers to use (*platform fees). However, employers may be charged a 
            nominal fee for posting job listings or accessing premium features."
      />

      <Accordion
        title="4. How do I register on Mera Rojgar Mera Adhikar?"
        answer="To register, simply visit the platform's website and follow the instructions for creating an account. You 
            will need to provide some basic information, such as your name, contact details, and professional 
            experience."
      />

      <Accordion
        title="5. Can I trust the job listings on Mera Rojgar Mera Adhikar?"
        answer="While we strive to provide accurate and reliable job listings, users are encouraged to exercise caution 
            and conduct their own research before accepting any job offers. We cannot guarantee the 
            authenticity or reliability of all listings."
      />

      <Accordion
        title="6. How can I contact customer support?"
        answer="For any inquiries or assistance, you can reach out to our customer support team via email at 
            support@merarojgarmeraadhikar.com. We're here to help you with any questions or concerns you 
            may have."
      />
      <Accordion
        title="7. Is my personal information secure on Mera Rojgar Mera Adhikar?"
        answer="Yes, we take data security and privacy seriously. We employ industry-standard security measures to 
            protect your personal information and adhere to strict privacy policies."
      />

      <Accordion
        title="8. Can employers and businesses access workers' personal information?"
        answer="No, employers and businesses only have access to the information provided by workers in their job 
                applications. We do not share personal information without the user's consent."
      />

      <Accordion
        title="9. How often are job listings updated on Mera Rojgar Mera Adhikar?"
        answer="Job listings are updated regularly to ensure that users have access to the latest opportunities. 
                Employers can post new listings, and workers can search for jobs based on their preferences."
      />

      <Accordion
        title="10. What if I encounter any issues or problems while using the platform?"
        answer="If you encounter any issues or problems while using the platform, please don't hesitate to contact 
                our customer support team. We're here to assist you and ensure that you have a positive experience 
                with Mera Rojgar Mera Adhikar."
      />
    </div>
  );
};

export default FAQ;
