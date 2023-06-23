interface InfoCardProps {
  coverart: string
  title: string
  subtitle: string
}
export const InfoCard: React.FC<InfoCardProps> = ({
  coverart,
  title,
  subtitle,
}) => {
  return (
    <section
      className={`aspect-[4/2] w-[250px] bg-secondary-400 rounded-md px-2 py-2 flex gap-2 shadow-white md:hover:shadow-xl ease-in-out transition-shadow`}
    >
      <img src={coverart} alt={title} className="rounded-lg" />
      <div>
        <h4 className="text-md">{title}</h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </section>
  )
}
