import { Inter } from "next/font/google";
import Link from "next/link";


// for google fonts
const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {

    // navbar items here
    const navItems = [{
        name:"Works",
        link:"#",
    },
    {
        name:"Blog",
        link:"#",
    },
    {
        name:"Contact",
        link:"#",
    }];
  return (
    <ul
      className={`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-medium text-[20px] space-x-6`}
    >
        {
            navItems.map((item, i) => (
                <li key={i}>
                    <Link href={item.link}></Link>
                    {item.name}
                </li>
            ) )
        }
      {/* <li>Works</li>
      <li>Blog</li>
      <li>Contact</li> */}
    </ul>
  );
};

export default Navbar;
