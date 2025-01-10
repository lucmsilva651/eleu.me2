import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faXTwitter, faLastfm, faSteam } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const socialLinks = [
  { icon: faGithub, name: 'GitHub', username: '@lucmsilva651', url: 'https://github.com/lucmsilva651' },
  { icon: faYoutube, name: 'YouTube', username: 'c/lucmsilva651', url: 'https://youtube.com/c/lucmsilva651' },
  { icon: faXTwitter, name: 'X / Twitter', username: '@lucmsilvagg / @cudemira', url: 'https://twitter.com/lucmsilvagg' },
  { icon: faLastfm, name: 'Last.fm', username: 'lucmsilva', url: 'https://last.fm/user/lucmsilva' },
  { icon: faSteam, name: 'Steam', username: 'lucasgabrielm95 (@lucmsilva)', url: 'https://steamcommunity.com/id/lucmsilva/' },
  { icon: faAt, name: 'Email', username: 'lucmsilva651@gmail.com', url: 'mailto:lucmsilva651@gmail.com' },
]

export default function Social() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Social media</h1>
      <p>These are my social media profiles:</p>
      <div className="space-y-2">
        {socialLinks.map((link) => (
          <p key={link.name} className="flex items-center">
            <FontAwesomeIcon icon={link.icon} className="mr-2 w-4 h-4" />
            <span className="font-medium">{link.name}:</span>{' '}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline hover:text-[#4040ff]"
            >
              {link.username}
            </a>
          </p>
        ))}
      </div>
    </div>
  )
}

