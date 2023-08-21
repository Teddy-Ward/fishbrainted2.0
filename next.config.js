/** @type {import('next').NextConfig} */
const nextConfig = {
  supabase: {
    client: {
        auth: {
            persistSession: true //or true
        }
    }
  }
}

module.exports = nextConfig
