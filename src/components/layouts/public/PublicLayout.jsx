import { Outlet } from 'react-router-dom'
import { HeaderPub } from '../public/HeaderPub'

export const PublicLayout = () => {
  return (
    <>
        <HeaderPub></HeaderPub>

        <section className='layout__content'>
            <Outlet></Outlet>
        </section>
    </>
  )
}
