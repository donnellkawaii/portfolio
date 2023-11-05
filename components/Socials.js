//link
import Link from "next/link";

//icons
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiDribbbleLine, 
  RiBehanceLine,
  RiPinterestLine
} from 'react-icons/ri'

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300" title="coming soon">
      <RiYoutubeLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" title="coming soon">
      <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" title="coming soon">
      <RiFacebookLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" title="coming soon">
      <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" title="coming soon">
      <RiBehanceLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" title="coming soon">
      <RiPinterestLine />
    </Link>
  </div>
  );
};

export default Socials;
