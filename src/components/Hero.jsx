import styles from "../style";
import { discount, fingerprint } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">3 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppings font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[90px] leading-[65px]">
          Revolutionizing <br className="sm:block hidden" />{" "}
          <span className="text-gradient">the Way</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppings font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        You Pay
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a data-driven approach to help you find the
        banking solutions that best fit your needs, from personal checking
        accounts to small business loans. Let us help you take control of your
        financial future today.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={fingerprint}
        alt="billing"
        className="w-[85%] h-[85%] relative z-[5] "
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
