import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>Estas en About</h1>
      <h3 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h3>
      <p className={"description"}>
        Bienvenido a{' '}
        <code className={"code"}>pages/about.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
