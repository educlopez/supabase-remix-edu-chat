function TwitterIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z" />
    </svg>
  )
}

function GitHubIcon(props: any) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
      />
    </svg>
  )
}

interface Social {
  href: string
  icon: any
  children?: React.ReactNode
  rel: string
  target: string
}

function SocialLink(props: Social) {
  return (
    <a
      href={props.href}
      className="group"
      target={props.target}
      rel={props.rel}
    >
      <span className="sr-only">{props.children}</span>
      <props.icon className="w-5 h-5 transition fill-zinc-700 group-hover:fill-zinc-900 " />
    </a>
  )
}
export function Footer() {
  return (
    <footer className="max-w-2xl pb-16 mx-auto space-y-10 lg:max-w-5xl">
      <div className="flex flex-col items-center justify-between gap-5 pt-8 border-t border-zinc-900/5 sm:flex-row">
        <p className="text-xs text-zinc-600 ">
          Made with ♥️ {new Date().getFullYear()} by{' '}
          <a
            href="https://educalvolopez.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edu calvo
          </a>
        </p>
        <p className="text-xs text-zinc-600 ">
          This project was done following the course of:
          <a
            href="https://egghead.io/courses/build-a-realtime-chat-app-with-remix-and-supabase-d36e2618"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jon Meyers
          </a>
        </p>
        <div className="flex gap-4">
          <SocialLink
            href="https://twitter.com/educlopez93"
            target="_blank"
            rel="noopener noreferrer"
            icon={TwitterIcon}
          >
            Follow us on Twitter
          </SocialLink>
          <SocialLink
            href="https://github.com/educlopez"
            target="_blank"
            rel="noopener noreferrer"
            icon={GitHubIcon}
          >
            Follow us on GitHub
          </SocialLink>
        </div>
      </div>
    </footer>
  )
}
