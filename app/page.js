import AuthForm from './auth-form'
import ThemeSwitch from './components/ThemeSwitch'

export default function Home() {
  return (
    <div className="row pt-10">
      <div className="col-6">
        <h1>Supabase Auth + Storage</h1>
        <p className="">
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
        <ThemeSwitch />
      </div>
    </div>
  )
}