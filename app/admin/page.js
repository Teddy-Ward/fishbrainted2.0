import AuthForm from '../auth-form'

export default function admin() {
  return (
    <div className="pt-10">
      <div className="">
        <h1>Supabase Auth + Storage</h1>
        <p className="">
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
              <div className="w-3/5 auth-widget">
        <AuthForm />
      </div>
      </div>

    </div>
  )
}