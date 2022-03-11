import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function pricingPage() {

  return (
    <MainLayout>

      <h1>Estas en Pricing</h1>
      <h6 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h6>
      <p className={"description"}>
        Bienvenido a{' '}
        <code className={"code"}>pages/pricing.js</code>
      </p>
    </MainLayout>
  )
}