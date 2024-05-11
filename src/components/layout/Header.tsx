import SearchSVG from "@assets/serach.svg?react";
import ProfileSVG from "@assets/profile.svg?react";
import { IconButton } from "@mui/material";
import { ROUTER_PATH } from "../../router";

function Header() {
  return (
    <header className="flex justify-between w-full h-16 sticky top-0 border-b-2 border-inhaSkyBlue p-4 bg-white z-10">
      <a className="text-xl font-bold text-inhaDeepBlue" href={ROUTER_PATH.MAIN}>
        HiBuddy
      </a>
      <div className="flex items-center gap-4">
        <IconButton aria-label="search">
          <SearchSVG />
        </IconButton>
        <IconButton aria-label="profile">
          <ProfileSVG />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;