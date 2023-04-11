import { useNavigate } from "react-router-dom";
import img from "../../assets/illustration.png";
import img1 from "../../assets/illustration (1).png";
import img2 from "../../assets/illustration (2).png";
import Button from "../../components/Button";

const imgs = [img, img1, img2];

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div className="get-started text-center md:text-left md:grid md:grid-cols-[60%_40%] h-screen items-center">
      <div className="content pl-5">
        <h1
          className={`
      font-semibold
      text-6xl
      mb-10
      text-left
      sm:text-6xl
      md:text-8xl
    `}
        >
          Meet your <br /> animal needs <br /> here
        </h1>
        <img
          src={imgs[Math.floor(Math.random() * imgs.length)]}
          className="w-2/3 m-auto md:hidden"
          alt="image-cover"
        />
        <p className="mb-10 text-xl">
          Get interesting promos here, register your account immediately so you
          can meet your animal needs.
        </p>
        <Button
          onClickAction={() => navigate("/login")}
          styles={`
        mt-5 
        w-full 
        md:w-1/2 
        bg-main-100 
        py-4 
        text-main-0 
        rounded-full
        `}
        >
          Get Started
        </Button>
      </div>
      <img
        src={imgs[Math.floor(Math.random() * imgs.length)]}
        className="w-2/3 m-auto hidden md:block"
        alt="image-cover"
      />
    </div>
  );
};

export default GetStarted;
