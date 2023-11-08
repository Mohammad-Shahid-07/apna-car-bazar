'use client'

import { useState } from 'react';
import { passActions } from '@/lib/pass.actions';

const NwCom = ({ onAuthentication } : any  ) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handlePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await passActions(password);
    if (res) {
        onAuthentication(true);
      } else {
        onAuthentication(false);
        setError("Incorrect password");
      }
  };

  return (
    <main className="min-h-[60vh]  text-white paddings">
   
    <h1 className="h1-heading text-center mb-5 ">Please Type In The Password </h1>
  <form onSubmit={handlePassword} className="max-w-md bg-dark-secondary paddings mx-auto p-4 bg-black-200 shadow-lg rounded-lg">
  <label htmlFor="password" className="block text-white-400  heading4 font-bold mb-2">Password</label>
  <div className="relative">
    <input
      type="password"
      id="password"
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      name="password"
      className="input-search paddings-x w-full  !ring-0 !ring-offset-0 placeholder:text-white-800 "

    />
   
  </div>
  <button type="submit" 
      className=" btn  mt-5 mx-auto text-gradient border-2 border-[#ffffff]">
    Submit
  </button>
    {error && (
        <p className="text-red-500 text-center heading4 mt-2">{error}</p>
    )}
</form>
</main>
  )
}

export default NwCom