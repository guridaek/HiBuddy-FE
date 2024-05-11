import HomeSVG from "@assets/home.svg?react";
import ThreadSVG from "@assets/thread.svg?react";
import ChatSVG from "@assets/chat.svg?react";
import GptSVG from "@assets/gpt.svg?react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import usePageRouter from "@hooks/usePageRouter";

function BottomNavigationBar() {
  const { goToMainPage, goToThreadListPage } = usePageRouter();

  const [value, setValue] = useState(0);

  return (
    <footer className="sticky bottom-0 w-full border-t-2 border-inhaSkyBlue py-2 px-6 bg-white z-10">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);

          switch (newValue) {
            case 0:
              goToMainPage();
              return;
            case 1:
              goToThreadListPage();
          }
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeSVG />} />
        <BottomNavigationAction label="Thread" icon={<ThreadSVG />} />
        <BottomNavigationAction label="Chat" icon={<ChatSVG />} />
        <BottomNavigationAction label="InhaBot" icon={<GptSVG />} />
      </BottomNavigation>
    </footer>
  );
}

export default BottomNavigationBar;
