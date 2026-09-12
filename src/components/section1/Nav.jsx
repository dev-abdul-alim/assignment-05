import LogoText from '../../assets/logo-text.png'
const Nav = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4 border-b b-gray-300'>
      <img src={LogoText} alt="" />

      <div className="text-black flex items-center gap-6">
        <a href="" className='text-red-500'>Home</a>
        <a href="">Technologies</a>
        <a href="">Peojects</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>

        <div className='flex items-center justify-between gap-4 px-1 '>
            <p>Sign In</p>
            <button className='bg-pink-600 text-white px-5 py-1 rounded-3xl '>Sign In</button>
        </div>
    </div>
  )
}

export default Nav
