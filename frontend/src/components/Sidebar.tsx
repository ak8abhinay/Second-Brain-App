import { LogoIcon } from "../icons/LogoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return <div className="h-screen bg-white border-r w-72 fixed
  left-0 top-0 pl-5">
      <div className="flex items-center text-2xl pl-2 pt-4 text-purple-600">
        <LogoIcon />
        SecondBrain
      </div>
      <div className="pt-4 pl-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
}