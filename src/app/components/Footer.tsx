import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#3d444d] px-5 py-5 text-center text-sm sm:px-12 md:px-24 lg:px-40">
      <div className="space-y-1">
        <p>
          &copy; {year}{' '}
          <Link
            href="https://github.com/lucmsilva651"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4040ff]"
          >
            Lucas Gabriel (lucmsilva)
          </Link>
          . Inspired from the{' '}
          <Link
            href="https://primer.style"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4040ff]"
          >
            Primer Design System
          </Link>
          .
        </p>
        <p>
          Icons from{' '}
          <Link
            href="https://primer.style/foundations/icons/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4040ff]"
          >
            Octicons
          </Link>{' '}
          and{' '}
          <Link
            href="https://fontawesome.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4040ff]"
          >
            Font Awesome
          </Link>
          .{' '}
          <Link
            href="https://github.com/anuraghazra/github-readme-stats"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4040ff]"
          >
            README Stats and GitHub Pins
          </Link>{' '}
          by{' '}
          <Link
            href="https://github.com/anuraghazra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4040ff]"
          >
            Anurag Hazra
          </Link>
          .
        </p>
        <p>
          Using{' '}
          <Link
            href="https://zerodevx.github.io/zero-md/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4040ff]"
          >
            &lt;zero-md&gt;
          </Link>{' '}
          for Markdown rendering.
        </p>
      </div>
    </footer>
  )
}

