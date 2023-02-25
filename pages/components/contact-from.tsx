'use client';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const key = 'xqkopdvb';
  const [state, handleSubmit] = useForm(key);

  const form = (
    <div className=" p-2 m-2 justify-around gap-4 items-center">
      <form onSubmit={handleSubmit} className="mt-8 max-sm:mt-2">
        <div className="flex flex-col space-y-1 my-4 max-sm:my-2">
          <label
            htmlFor="name"
            className="text-purple-600 text-left text-3xl my-1 pt-1 pl-2 z-[-1]"
          >
            Name
          </label>
          <input
            id="name"
            className="bg-slate-300 h-[46px] rounded-lg m-1 p-2 text-black"
            onChange={(e) => {
              e.target.value;
            }}
            type="name"
            name="name"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col space-y-1 my-4 max-sm:my-2">
          <label
            htmlFor="email"
            className="text-purple-600 text-left text-3xl my-2 pt-1 pl-2 z-[-1]"
          >
            Email Address
          </label>
          <input
            id="email"
            className="bg-slate-300 h-[46px] rounded-lg m-1 p-2 text-black"
            onChange={(e) => {
              e.target.value;
            }}
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col space-y-2  my-4 max-sm:my-2">
          <label
            htmlFor="message"
            className="text-purple-600 text-left text-3xl my-1 pt-1 pl-2 z-[-1]"
          >
            Message
          </label>
          <textarea
            className="bg-slate-300 h-[86px] rounded-lg m-1 p-2 text-black"
            onChange={(e) => {
              e.target.value;
            }}
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="border-solid border-green-600 border-4 text-red-600 text-center w-full rounded-t-lg mt-12 max-sm:mt-4 p-1 bg-green-400 font-bold hover:bg-green-700 hover:text-red-400 text-3xl"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
  return <>{form}</>;
}
