import type { Metadata } from "next"
import { PolicyPage } from "@/components/policy-page"

export const metadata: Metadata = {
  title: "Suture - Privacy Policy & Terms of Service",
  description: "Privacy Policy and Terms of Service for Suture",
}

export default function SuturePolicyPage() {
  return (
    <PolicyPage
      appName="Suture"
      date="January 17, 2026"
      extraPrivacyItems={[
        {
          title: "Educational Content Disclaimer.",
          description:
            "The App provides previous year questions and notes for educational purposes only. It is not intended to provide medical advice, diagnosis, or treatment. Users should consult qualified medical professionals for any health-related decisions.",
        },
      ]}
      extraTermsOverrides={{
        3: "In no event shall the developer be liable for any damages (including data loss) arising from the use of or inability to use the App. The App is for educational purposes and should not be used as a substitute for professional medical advice.",
      }}
    />
  )
}
