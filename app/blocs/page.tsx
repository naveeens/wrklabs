import type { Metadata } from "next"
import { PolicyPage } from "@/components/policy-page"

export const metadata: Metadata = {
  title: "Blocs - Privacy Policy & Terms of Service",
  description: "Privacy Policy and Terms of Service for Blocs",
}

export default function BlocsPolicyPage() {
  return <PolicyPage appName="Blocs" date="January 17, 2026" />
}
