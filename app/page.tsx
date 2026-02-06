import Link from "next/link"
import { PlayStoreIcon } from "@/components/play-store-icon"

const apps = [
  {
    name: "WRK",
    playStoreId: "live.suture.wrk",
    slug: "wrk",
  },
  {
    name: "Blocs",
    playStoreId: "live.suture.blocs",
    slug: "blocs",
  },
  {
    name: "Nested",
    playStoreId: "live.suture.nested",
    slug: "nested",
  },
  {
    name: "AnkiPad",
    playStoreId: "live.suture.ankipad",
    slug: "ankipad",
  },
  {
    name: "Suture",
    playStoreId: "live.suture.suture",
    slug: "suture",
  },
]

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center text-3xl font-bold text-foreground">
          WRK Labs
        </h1>
        <p className="mb-10 text-center text-base text-muted-foreground">
          Explore our collection of productivity and learning apps
        </p>
        <nav className="flex flex-col">
          {apps.map((app) => (
            <div
              key={app.slug}
              className="flex items-center border-b border-border py-2"
            >
              <span className="min-w-[80px] font-medium text-foreground">
                {app.name}
              </span>
              <a
                href={`https://play.google.com/store/apps/details?id=${app.playStoreId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${app.name} on Google Play Store`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <PlayStoreIcon className="h-5 w-5" />
              </a>
              <Link
                href={`/${app.slug}`}
                className="ml-2 text-sm text-primary hover:underline"
              >
                privacy policy and TOS
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </main>
  )
}
