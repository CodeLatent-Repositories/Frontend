'use client'
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

const redirect=()=>{
  return(
    <>
    <h2 className="text-2xl font-bold text-center mt-[8rem]">Payment Methods</h2>
    <p className="text-sm text-center mt-2">We are offering two payment methods (one-shot payment and EMI) is beneficial for both the business and the students</p>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mr-[20rem] lg:ml-[20rem]">
    <section className="pricing py-12">
          <div className="price-card mx-auto p-6 bg-white shadow-lg rounded-lg w-80 text-center">
            <p className="text-sm font-bold mb-1">One Shot Payment</p>
            <p className="text-xs mb-5">This option allows students to pay the entire course fee in a single transaction upfront.</p>
            <h3 className="text-xl font-bold mb-4">Complete DSA Course</h3>
            <div className="price text-3xl font-bold text-indigo-600 mb-2">₹4,999</div>
            <div className="cut-price text-gray-500 line-through mb-4">₹6,999</div>
            <p className="mb-8">5 months of intensive learning</p>
            <ul className="text-left mb-6">
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Discount Incentive</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Instant Access</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Simple Process</span>
              </li>
            </ul>
            <Link href="https://codelatent.fermion.app/api/buy-digital-product?digital-product-price-id=6794944807f8d8cce10d3208&product-slug=ball-above"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                Enroll Now
            </Link>
          </div>
        </section>

        {/*Emi card*/}
        <section className="pricing py-10">
        <div className="price-card mx-auto p-6 bg-white shadow-lg rounded-lg w-80 text-center">
            <p className="text-sm font-bold mb-1">Part Payment Plan</p>
            <p className="text-xs mb-5">This option allows students to pay the course fee in smaller, more manageable monthly installments.</p>
            <h3 className="text-xl font-bold mb-4">First Payment</h3>
            <div className="price text-3xl font-bold text-indigo-600 mb-2">₹2,799</div>
            <div className="cut-price text-gray-500 line-through mb-4">₹4,999</div>
            <p className="mb-4 text-sm">Pay the rest in 2 easy installments of ₹1,550/month
            </p>
            <ul className="text-left mb-8">
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Flexible Tenure Options</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Increases Accessibility</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fa fa-check text-green-500 mr-2"></i>
                <span>Reduces Financial Burden</span>
              </li>
            </ul>
            <Link href="https://codelatent.fermion.app/api/buy-digital-product?digital-product-price-id=6794947014587cccdb6a6cf6&product-slug=ball-above&total-installments-count=2"className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg">
                Enroll Now
            </Link>
          </div>
        </section>
        </div>
        <div className="mb-8 lg:pr-10 text-center place-center mt-10">
        <h2 className="text-2xl font-semibold text-blue-600">Why Having Both Payment Methods Matters</h2>
        <div className="mt-6 list-disc pl-6 space-y-2">
          <li>Cater to Diverse Audiences: By offering both options, you accommodate students who prefer one-time payments as well as those who need flexibility.</li>
          <li>Improved Enrollment Rates: Students are more likely to choose your course when they see a payment option that fits their budget.</li>
          <li>Balanced Revenue Flow: One-shot payments ensure immediate cash flow, while EMI options bring consistent revenue over time.</li>
        </div>
        </div>
    </>
  )
}

export default redirect;