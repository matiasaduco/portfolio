import { Chip } from 'primereact/chip'
import classNames from 'classnames'

const Project = ({ image, title, description, tecnologies }) => {
  const base = 'flex justify-center gap-12 border-1 p-4 rounded-3xl relative'
  const medium = 'md:h-[250px] md:bg-black'
  const large = 'lg:h-[400px] lg:bg-white/10'

  const mdImage =
    'md:absolute md:w-[100%] md:h-[100%] md:top-0 md:rounded-3xl md:brightness-50'
  const lgImage =
    'lg:w-[600px] lg:h-[350px] lg:border-1 lg:static lg:brightness-100'
  // const content =
  //   'before:bg-black/60 before:content-[""] before:absolute before:w-[100%] before:h-[100%] before:top-0 before:left-0 before:rounded-3xl'

  return (
    <div className={classNames(base, medium, large)}>
      <img
        src={image}
        className={classNames('object-cover', mdImage, lgImage)}
      />
      <span className='flex flex-col gap-6 w-[600px] z-1'>
        <h1 className='text-4xl'>{title}</h1>
        <p>{description}</p>
        <div className='flex flex-wrap gap-1 self-end mt-auto'>
          {tecnologies?.map((props, index) => (
            <Chip key={index} {...props} />
          ))}
        </div>
      </span>
    </div>
  )
}

export default Project
