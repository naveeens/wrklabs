import type { Metadata } from "next"
import { PolicyPage } from "@/components/policy-page"

export const metadata: Metadata = {
  title: "Nested - Privacy Policy & Terms of Service",
  description: "Privacy Policy and Terms of Service for Nested",
}

export default function NestedPolicyPage() {
  return <PolicyPage appName="Nested" date="January 17, 2026" />
}
