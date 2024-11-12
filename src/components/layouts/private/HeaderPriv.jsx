import { NavPriv } from '../private/NavPriv'

export const HeaderPriv = () => {
  return (
    <header className="layout__navbar">
        <div className="navbar__header">
            <a href="#" className="navbar__title">Red Social</a>
        </div>
        <NavPriv />
    </header>
  )
}