import Image from 'next/image'

const projects = [
  {
    name: 'TelegramBot',
    owner: 'abocn',
    repo: 'TelegramBot',
  },
  {
    name: 'amotube',
    owner: 'lucmsilva651',
    repo: 'amotube',
  },
  {
    name: 'asm_x86_sys',
    owner: 'lucmsilva651',
    repo: 'asm_x86_sys',
  },
  {
    name: 'http-to-https-proxy',
    owner: 'lucmsilva651',
    repo: 'http-to-https-proxy',
  },
  {
    name: 'pgit',
    owner: 'lucmsilva651',
    repo: 'pgit',
  },
  {
    name: 'mod.eleu.me',
    owner: 'lucmsilva651',
    repo: 'mod.eleu.me',
  },
]

export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">My projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <div key={project.repo} className="overflow-hidden rounded-lg border border-gray-700 w-[400px]">
            <Image
              src={`https://github-readme-stats.vercel.app/api/pin/?username=${project.owner}&repo=${project.repo}&title_color=fff&icon_color=f9f9f9&text_color=f0f6fc&bg_color=0d1117&show_owner=true&description_lines_count=2`}
              alt={`${project.name} project card`}
              width={400}
              height={150}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

