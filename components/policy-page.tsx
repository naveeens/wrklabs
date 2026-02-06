import Link from "next/link"

interface PolicyPageProps {
  appName: string
  date: string
  extraPrivacyItems?: { title: string; description: string }[]
  extraTermsOverrides?: Record<number, string>
}

export function PolicyPage({
  appName,
  date,
  extraPrivacyItems,
  extraTermsOverrides,
}: PolicyPageProps) {
  const privacyItems = [
    {
      title: "Your Data is Stored Locally.",
      description:
        "All data you create in the App are stored only on your device. We do not have access to your data, and it is never sent to our servers.",
    },
    {
      title: "We Collect No Personal Information.",
      description:
        "The App does not collect, transmit, or share any personal information, usage analytics, or crash reports. Your activity within the App is completely private.",
    },
    {
      title: "No Ads or Trackers.",
      description:
        "The App is free of advertisements and third-party trackers.",
    },
    ...(extraPrivacyItems ?? []),
  ]

  const defaultTermsItems = [
    {
      title: "You Own Your Content.",
      description:
        "You retain full ownership of and responsibility for all content you create in the App.",
    },
    {
      title: "Back Up Your Data.",
      description:
        "Because your data is stored only on your device, we cannot help you recover it if you lose your device or uninstall the App. You are solely responsible for backing up your data.",
    },
    {
      title: "Disclaimer of Warranty.",
      description: `The App is provided "as is," without warranties of any kind. We do not guarantee that it will be error-free or meet all your needs.`,
    },
    {
      title: "Limitation of Liability.",
      description:
        "In no event shall the developer be liable for any damages (including data loss) arising from the use of or inability to use the App.",
    },
    {
      title: "Changes to These Terms.",
      description:
        "We may update this policy. Continued use of the App after any changes constitutes your acceptance of the new terms.",
    },
  ]

  const termsItems = defaultTermsItems.map((item, index) => {
    if (extraTermsOverrides && extraTermsOverrides[index] !== undefined) {
      return { ...item, description: extraTermsOverrides[index] }
    }
    return item
  })

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-10 md:px-10">
      <Link
        href="/"
        className="mb-6 block text-center text-base text-muted-foreground transition-colors hover:text-foreground"
      >
        {"<- back to index"}
      </Link>

      <h1 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
        Privacy Policy and Terms of Service for {appName}
      </h1>
      <p className="mb-4 text-muted-foreground">Date: {date}</p>
      <p className="mb-6 text-foreground">
        {`Thank you for using ${appName} ("the App"). This document outlines our commitment to your privacy and the terms you agree to when using the App.`}
      </p>

      <h2 className="mb-3 mt-8 border-b border-border pb-1 text-xl font-bold text-foreground md:text-2xl">
        Privacy Policy
      </h2>
      <ol className="mb-6 list-decimal pl-5">
        {privacyItems.map((item, i) => (
          <li key={i} className="mb-3 text-foreground">
            <strong>{item.title}</strong> {item.description}
          </li>
        ))}
      </ol>

      <h2 className="mb-3 mt-8 border-b border-border pb-1 text-xl font-bold text-foreground md:text-2xl">
        Terms of Service
      </h2>
      <ol className="mb-6 list-decimal pl-5">
        {termsItems.map((item, i) => (
          <li key={i} className="mb-3 text-foreground">
            <strong>{item.title}</strong> {item.description}
          </li>
        ))}
      </ol>

      <p className="text-foreground">
        If you have any questions, please contact us at:{" "}
        <a
          href="mailto:suture.live@proton.me"
          className="text-primary hover:underline"
        >
          suture.live@proton.me
        </a>
      </p>
    </main>
  )
}
