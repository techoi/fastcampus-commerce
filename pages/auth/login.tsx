import GoogleLogin from '@components/GoogleLogin'

export default function Login() {
  return (
    <div
      style={{
        display: 'flex',
        height: '70vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GoogleLogin />
    </div>
  )
}
