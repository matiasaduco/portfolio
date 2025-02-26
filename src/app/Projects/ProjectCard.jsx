import { Chip } from 'primereact/chip'
import classNames from 'classnames'

const ProjectCard = ({ image, title, description, tecnologies }) => {
  const base = 'w-[100%] flex justify-center gap-12 rounded-3xl relative group cursor-pointer bg-gray-100/3'
  const medium = 'md:h-[300px] md:hover:scale-110 md:transition md:duration-300 md:easi-in-out'
  const large = 'lg:h-[420px]'

  const mdImage =
    'md:absolute md:w-[100%] md:h-[100%] md:rounded-3xl md:brightness-50 group-hover:bg-cover'
  const lgImage =
    'lg:static lg:w-[600px] lg:h-[350px] lg:brightness-100'

  return (
    <div className={classNames(base, medium, large)}>
      <img
        src={image}
        className={classNames('object-cover self-center top-0', mdImage, lgImage)}
      />
      <span className='flex flex-col gap-6 w-[600px] z-1 p-4 rounded-3xl'>
        <i className='pi pi-arrow-up-right absolute top-6 right-6 p-1 scale-0 md:group-hover:scale-100 lg:group-hover:scale-150 transition duration-300 easi-in-out' />
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

export default ProjectCard
