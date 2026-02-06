import type { Metadata } from "next"
import { PolicyPage } from "@/components/policy-page"

export const metadata: Metadata = {
  title: "WRK - Privacy Policy & Terms of Service",
  description: "Privacy Policy and Terms of Service for WRK",
}

export default function WrkPolicyPage() {
  return <PolicyPage appName="WRK" date="January 17, 2026" />
}
