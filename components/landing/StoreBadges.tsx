import Image from 'next/image'

const APP_STORE_URL = 'https://apps.apple.com/my/app/cookkin/id6759157109'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.cookkin.app&hl=en_GB'

interface StoreBadgesProps {
  compact?: boolean
}

export default function StoreBadges({ compact = false }: StoreBadgesProps) {
  const width = compact ? 144 : 168
  const height = compact ? 48 : 56

  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? 'justify-end' : 'justify-center'}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className="transition-transform hover:-translate-y-0.5"
      >
        <Image
          src="/images/app-store-badge.svg"
          alt="Download on the App Store"
          width={width}
          height={height}
          className="h-12 w-auto md:h-14"
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className="transition-transform hover:-translate-y-0.5"
      >
        <Image
          src="/images/play-store-badge.svg"
          alt="Get it on Google Play"
          width={width}
          height={height}
          className="h-12 w-auto md:h-14"
        />
      </a>
    </div>
  )
}
