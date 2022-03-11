import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {

  return (
    <MainLayout>
      <h1>Estas en Home</h1>
      <p className={"description"}>
        Bienvenido a{' '}
        <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
