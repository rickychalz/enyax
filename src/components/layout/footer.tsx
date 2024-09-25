

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row border-t pb-12 pt-4 justify-center md:justify-between">
      <div className="flex gap-4 text-sm text-neutral-400">
      <div className="flex gap-1 items-center"><a href="https://github.com/rickychalz"><span>Github</span></a></div>
      <div>/</div>
      <div className="flex gap-1 items-center"><a href="www.linkedin.com/in/ericknyakiha"><span>LinkedIn</span></a></div>
      <div>/</div>
      <div className="flex gap-1 items-center"><a href="https://twitter.com/codeBase99"><span>Twitter</span></a></div>
      </div>
      <div>
      <p className="text-sm text-neutral-400">&copy; {currentYear} ecnyakiha.com All rights reserved.</p>
      </div>
    </div>
  )
}
