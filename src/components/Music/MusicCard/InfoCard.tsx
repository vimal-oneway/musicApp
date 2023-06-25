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
      className={`aspect-[4/2] w-[250px] md:w-[224px] lg:w-[224px] xl:w-[250px] bg-secondary-400 rounded-md px-2 py-1.5 flex gap-3 shadow-white md:hover:shadow-xl ease-in-out transition-shadow`}
    >
      <div className="w-[50%]">
        <img
          src={coverart}
          alt={title}
          className="rounded-lg"
          width={'100%'}
          height={'100%'}
        />
      </div>
      <div className="w-[50%]">
        <h4 className="text-md font-semibold">{`${title.slice(0,15)}...`}</h4>
        <p className="text-sm text-gray-300 lowercase">{subtitle}</p>
      </div>
    </section>
  )
}
