export const Header = () => {
  return (
    <>
      <header className="h-screen">
        <h1 className="py-10 px-1 uppercase text-center text-7xl font-bold max-md:text-4xl max-sm:text-xl ">
          Jordan <span className="text-red-500 ">New Collection</span> Available
        </h1>
          <img
            src="./Header.png"
            alt="une paire de chaussures Nike Air Jordan noir et rouge"
            className="h-full object-cover"
          />
      </header>
    </>
  );
};
