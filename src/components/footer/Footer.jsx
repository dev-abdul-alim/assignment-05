import LogoText from '../../assets/logo-text.png'
const Footer = () => {
  return (
    <div className="bg-amber-50 h-fit p-10 tracking-tight">

      <div className="flex justify-between pr-10 py-10 mt-9 border-b border-t border-gray-200 ">
        <div>
          <img src={LogoText} alt="Dev Stack logo" />
          <p className='text-gray-500 my-3'>Curated tools, technologies, and resources for developers building <br /> modern software.</p>

          <div className='flex gap-3 font-semibold text-gray-600'>
            <a href="https://github.com/">GitHub</a>
            <a href="https://x.com/i/premium_sign_up">Twitter</a>
            <a href="https://search.brave.com/search?q=linkedin">LinkedIn</a>
          </div>
          
        </div>

        <div>
          <h2 className='text-sm font-bold mb-1 uppercase'>Product</h2>
          <div className='text-gray-600'>
            <h4>Home</h4>
            <h4>Technologies</h4>
            <h4>Projects</h4>
          </div>
        </div>

        <div>
          <h2 className='font-bold mb-1 uppercase text-sm'>Company</h2>
          <div className='text-gray-600'>
            <h4>About</h4>
            <h4>Contack</h4>
            <h4>Careers</h4>

          </div>
        </div>

        <div>
          <h2 className='text-sm font-bold mb-1 uppercase'>LEGAL</h2>
          <div  className='text-gray-600'>
            <h4>Privacy Policy</h4>
            <h4>Terms of Service</h4>
          </div>
          
        </div>
      </div>
      
      <div className="flex justify-between text-gray-400 h-10 items-center mt-6">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
        <div className='flex justify-between px-18 gap-10'>        
          <a href="">Pivacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
