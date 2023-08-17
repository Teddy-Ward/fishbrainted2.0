export default function Home() {
  return (
    <div className="pt-14">
      <div className="max-w-5xl mx-auto h-80">
        <div className="grid grid-cols-2 gap-4 w-full ">
          <div className="row-span-2">
            <img src="random.png"
            className="shadow main-img" 
            />
          </div>
          <div className="text-left ">
            <h1 className="drop-shadow-md">SUPABASE AUTH + STORAGE</h1>
            <span className="banner"></span>
            <p className="h-3/4">
              Experience our Auth and Storage through a simple profile
              management example. Create a user profile and upload an avatar
              image. Fast, simple, secure.
            </p>
            <div className="stroke">
      <a href="/blog" className="pb-2 w-28 mt-2 ml-auto text-center">Read More</a>
    </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
