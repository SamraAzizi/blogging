// app/page.js
const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className='flex justify-between items-center max-w-4xl mx-auto'>
        <a href="/" className='text-white text-2xl font-bold'>
          My Blogs
        </a>
      </nav>
    </header>
  );
};

export default Header;
