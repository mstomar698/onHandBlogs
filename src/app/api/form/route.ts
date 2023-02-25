// export async function POST(request: Request) {
//   const { greeting } = await request.json();

//   return new Response(`Hello, ${greeting}!`);
// }

export async function POST(request: Request) {
  const formData = await request.text();
  const data = JSON.parse(formData);

  console.log(data);
  console.log(typeof data);
  console.log(data.name);

  return new Response(JSON.stringify(data));
}
