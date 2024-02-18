import "./terms.css";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import PageTitle from "../pageTitle/PageTitle";
import TermsBg from "../../../../public/title/terms.jpg";

function Terms() {
  return (
    <div>
      <Header />
      <PageTitle title="Terms of Service" titleBg={TermsBg} />
      <div className="terms">
        <div className="container">
          <p>
            Welcome to our website. By accessing and utilising our website, you
            acknowledge and accept the terms and conditions outlined herein,
            along with our privacy policy, establishing the framework of
            interaction between you and Smart Atlantic. Should you dissent from
            any aspect of these terms, we kindly request refraining from using
            our website.
          </p>
          <p>
            The term ‘Smart Atlantic’ or ‘us’ or ‘we’ refers to the owner of the
            website Smart Atlantic Nigeria Limited. Our company registration
            number is 6994630. The term ‘you’ refers to the user or viewer of
            our website.
          </p>
          <h5>
            The use of this website is subject to the following terms of use:
          </h5>
          <p>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without
            notice.This website uses cookies to monitor browsing preferences. If
            you do allow cookies to be used, the following personal information
            may be stored by us for use by third parties.
          </p>
          <p>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law.
          </p>
          <p>
            Your use of any information or materials on this website is entirely
            at your own risk, for which we shall not be liable. It shall be your
            own responsibility to ensure that any products, services, or
            information available through this website meet your specific
            requirements.
          </p>
          <p>
            This website contains material that is owned by or licensed to us.
            This material includes but is not limited to, the design, layout,
            look, appearance, and graphics. Reproduction is prohibited other
            than in accordance with the copyright notice, which forms part of
            these terms and conditions.
          </p>
          <p>
            All trademarks reproduced in this website that are not the property
            of, or licensed to, the operator is acknowledged on the website.
          </p>
          <p>
            Unauthorised use of this website may give rise to a claim for
            damages and/or be a criminal offence.
          </p>
          <p>
            From time to time this website may also include links to other
            websites. These links are provided for your convenience to provide
            further information. They do not signify that we endorse the
            website(s). We have no responsibility for the content of the linked
            website(s).
          </p>
          <p>
            Your use of this website and any dispute arising out of such use of
            the website is subject to the laws of Nigeria
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
