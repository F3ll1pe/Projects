import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        logado como {session.user.email} <br />
        <button onClick={() => signOut()}>Deslogar</button>
      </>
    )
  }
  return (
    <>
      Não está logado <br />
      <button onClick={() => signIn()}>Logar</button>
    </>
  )
}