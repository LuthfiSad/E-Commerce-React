import React from 'react'
import AuthLogin from '../components/Layout/AuthLayout'
import FormLogin from '../components/Fragments/FormLogin'

export default function LoginPage() {
  return (
    <AuthLogin title="Login" type="login">
        <FormLogin />
    </AuthLogin>
  )
}
