const Header = () => {
    return (
      <header className="bg-blue-500 p-4">
        <nav className='flex justify-between items-center max-w-4xl mx-auto'>
          {/* Use <a> instead of <link> */}
          <a href="/" className='text-white text-2xl font-bold'>
            My Blogs
          </a>

          <ul className="flex space-x-4">
          <li>
                <a href ='/blogs'
                className="text-white hover:underline">
                    blogs

                </a>

            </li>
            <li>
                <a href ='/api/auth/signing'
                className="text-white hover:underline">
                    login

                </a>

            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  