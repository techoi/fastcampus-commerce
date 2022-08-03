import { useSession, signIn, signOut } from 'next-auth/react'
import Button from './Button'

export default function GoogleLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        Signed in as {session.user?.email}
        <br />
        <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    )
  }
  return (
    <div>
      Not signed in
      <br />
      <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}
