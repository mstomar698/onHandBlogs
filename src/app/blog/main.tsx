/**
 * @param {any} details
 * @returns
 */
export const Main = ({ details }: any) => {
  // NOTE: details_form_form will we used later to replace details dynamically.
  const details_from_form = details;
  return (
    <div className="flex flex-col items-center justify-around  mx-auto sm:mx-4 lg:mx-16 my-4 h-full border-4 border-solid border-blue-600 rounded-lg">
      <div className="flex flex-col item-center justify-around mb-2 p-2  w-full border-2 bg-blue-300 border-solid border-red-400 rounded-lg">
        Here we will create our blog wgich will later we auto genrated after
        filling form.
        <br />
        main_content
      </div>
      <div className="flex flex-col item-center justify-center p-2 w-full mt-2 border-2 border-solid border-red-400 bg-blue-300  rounded-lg">
        Here we will create our blog wgich will later we auto genrated after
        filling form.
        <br />
        main_content
      </div>
    </div>
  );
};
