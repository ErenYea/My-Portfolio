import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { useStateValue } from "../StateProvider";
const ContactMe = () => {
  const [state, dispatch] = useStateValue();
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:alikhanhamza434@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen relative w-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="top-16 sm:mt-20 sm:top-0 flex flex-col space-y-3 sm:space-y-10 w-screen relative items-center">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-3 sm:space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{state.pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{state.pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href="https://www.google.com/maps/place/King's+cottages/@24.9364423,67.1457178,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb339dd5ea999c7:0xcfb5d4b0e6d0201b!8m2!3d24.9364416!4d67.1479075"
              target="_blank"
              className="flex items-center space-x-5"
            >
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-xl sm:text-2xl">{state.pageInfo?.address}</p>
            </a>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-screen mx-auto sm:w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-y-2 flex-col sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
