import Link from "next/link"
import { MainLayout } from "../components/layouts/MainLayout"

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Estas en Contact</h1>
      <h3 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h3>
      <p className={"description"}>
        Bienvenido a{' '}
        <code className={"code"}>pages/contact.js</code>
      </p>
    </MainLayout>
  )
}