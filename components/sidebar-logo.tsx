import { useTheme } from "next-themes";
import Image from "next/image"
//import logo from '@/app/logo.png';

export const SideBarLogo=()=>
{
    const { theme } = useTheme();
    let src = '';
    if (theme === 'dark' || theme === 'custom') {
        src = '@/app/logo.png';
    }
    //return <Image width={35} alt="" className="w-12 mx-4.5 min-h-fit" height={35} src={logo} />;
}