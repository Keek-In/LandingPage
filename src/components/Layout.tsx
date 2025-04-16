const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-[1440px]  bg-white">
        {children}
      </div>
    );
  };
  
  export default Layout;
  