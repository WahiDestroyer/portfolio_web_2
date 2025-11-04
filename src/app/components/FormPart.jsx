// FormPart.jsx - Fixed responsive version
'use client'
import React, { useState } from "react";

const FormPart = () => {
  let [fullName, setFullName] = useState("");
  let [fullNameErr, setFullNameErr] = useState("");
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [number, setNumber] = useState("");
  let [numberErr, setNumberErr] = useState("");
  let [Submit, setSubmit] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!fullName) {
      setFullNameErr("Name is required!");
    } else if (!email) {
      setEmailErr("Email is required!");
    } else if (!number) {
      setNumberErr("Number is required!");
    } else {
      setSubmit("Submitted");
      setFullName(""), setEmail(""), setNumber("");
    }
  };
  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handelSubmit} className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-15 lg:pb-17">
        <input
          onChange={(e) => {
            setFullName(e.target.value);
            setFullNameErr("");
          }}
          value={fullName}
          type="text"
          placeholder="ENTER YOUR NAME*"
          className="outline-0 border- placeholder:font-mont placeholder:font-bold placeholder:text-sm placeholder:text-[#8B8B8B] font-mont font-bold text-sm text-[#8B8B8B]
        border-b-4 border-l-4 py-2 pl-4 pr-50 border-black w-full max-w-[500px]"
        />
        {fullNameErr && (
          <p className="text-red-600 font-semibold font-sans">{fullNameErr}</p>
        )}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailErr("");
          }}
          value={email}
          type="email"
          placeholder="ENTER YOUR EMAIL*"
          className="outline-0 border- placeholder:font-mont placeholder:font-bold placeholder:text-sm placeholder:text-[#8B8B8B] font-mont font-bold text-sm text-[#8B8B8B]
        border-b-4 border-l-4 py-2 pl-4 pr-50 border-black w-full max-w-[500px]"
        />
        {emailErr && (
          <p className="text-red-600 font-semibold font-sans">{emailErr}</p>
        )}
        <input
          onChange={(e) => {
            setNumber(e.target.value);
            setNumberErr("");
          }}
          value={number}
          type="number"
          placeholder="PHONE NUMBER"
          className="outline-0 border- placeholder:font-mont placeholder:font-bold placeholder:text-sm placeholder:text-[#8B8B8B] font-mont font-bold text-sm text-[#8B8B8B]
        border-b-4 border-l-4 py-2 pl-4 pr-50 border-black w-full max-w-[500px]"
        />
        {numberErr && (
          <p className="text-red-600 font-semibold font-sans">{numberErr}</p>
        )}
        <input
          type="text"
          placeholder="YOUR MESSAGE*"
          className="outline-0 border- placeholder:font-mont placeholder:font-bold placeholder:text-sm placeholder:text-[#8B8B8B] font-mont font-bold text-sm text-[#8B8B8B]
        border-b-4 border-l-4 pt-2 pl-4 pr-50 pb-20 border-black w-full max-w-[500px]"
        />
        <button
          type="submit"
          className="font-bold text-base font-sans text-black border-x-3 py-2 hover:text-white hover:bg-black transition-all duration-300 uppercase w-full max-w-[500px]"
        >
          submit
        </button>
        {Submit && (
          <p className="text-green-600 font-semibold font-sans mx-auto">
            {Submit}
          </p>
        )}
      </form>
    </div>
  );
};

export default FormPart;