import { UserRoundPen } from "lucide-react";

export const Form = () => {
  return (
    <form className="flex justify-center py-28">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl">Let's get in touch</h1>
        <div className="flex flex-col gap-4">
          <div className="p-4 border flex gap-2 w-full">
            <UserRoundPen />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full"
            ></input>
          </div>
          <div className="p-4 border flex gap-2 w-full">
            <UserRoundPen />
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full"
            ></input>
          </div>
          <div className="p-4 border flex gap-2 w-full">
            <UserRoundPen />
            <input
              type="text"
              placeholder="06 00 00 00 00"
              className="w-full"
            ></input>
          </div>
          <div className="p-4 border flex gap-2 w-full">
            <textarea
              placeholder="Enter your main text here ..."
              className="w-full"
            ></textarea>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>I hereby agree to our Privacy Policy terms.</p>
          </div>
          <button className="py-4 bg-red-500 text-white hover:bg-red-800">Submit Form</button>
        </div>
      </div>
    </form>
  );
};
