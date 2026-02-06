import type { Metadata } from "next"
import { PolicyPage } from "@/components/policy-page"

export const metadata: Metadata = {
  title: "AnkiPad - Privacy Policy & Terms of Service",
  description: "Privacy Policy and Terms of Service for AnkiPad",
}

export default function AnkiPadPolicyPage() {
  return <PolicyPage appName="AnkiPad" date="January 17, 2026" />
}
