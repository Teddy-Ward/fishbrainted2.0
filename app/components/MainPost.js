export default function MainPost() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 gap-y-0 w-full pb-20">
        <div className="row-span-3">
          <img src="random.png" className="shadow main-img" />
        </div>
        <div className="text-left h-24 row-span-2">
          <h1 className="drop-shadow-md">SUPABASE AUTH + STORAGE </h1>
          <span className="banner"></span>
          <p className="text-left ">
            Experience our Auth and Storage through a simple profile management
            example. Create a user profile and upload an avatar image. Fast,
            simple, secure.
          </p>
        </div>

        <div className="stroke bottom">
          <a href="/blog" className="pb-1 w-28 b-0 ml-auto text-center">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
