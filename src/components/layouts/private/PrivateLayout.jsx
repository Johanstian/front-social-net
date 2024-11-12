import { Outlet } from 'react-router-dom'
import { HeaderPriv } from '../private/HeaderPriv';
import { Sidebar } from './Sidebar'

export const PrivateLayout = () => {
  return (
    <>
        <HeaderPriv></HeaderPriv>

        <section className='layout__content'>
            <Outlet></Outlet>
        </section>

        <Sidebar></Sidebar>
    </>
  )
}
