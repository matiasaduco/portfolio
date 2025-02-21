import { Chip } from 'primereact/chip'
import classNames from 'classnames'

const Project = ({ image, title, description, tecnologies }) => {
  const medium = 'md:h-[250px] md:bg-black'
  const large = 'lg:h-[400px] lg:bg-white/10'
  const background = `bg-[url(${image})] bg-no-repeat bg-center bg-cover`
  const base = 'flex justify-center gap-12 border-1 p-6 rounded-3xl'

  return (
    <div className={classNames(base, medium, large, background)}>
      <img
        src={image}
        className='w-[600px] h-[350px] object-cover border-1 md:hidden lg:block'
      />
      <span className='flex flex-col gap-6 w-[600px] relative'>
        <h1 className='text-4xl'>{title}</h1>
        <p>{description}</p>
        <div
          className='flex flex-wrap gap-1 self-end mt-auto'
          style={{ justifySelf: 'flex-end' }}
        >
          {tecnologies?.map((tecnology, index) => (
            <Chip key={index} {...tecnology} />
          ))}
        </div>
      </span>
    </div>
  )
}

export default Project
