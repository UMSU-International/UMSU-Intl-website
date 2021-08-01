import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      viewBox="0 0 80 80"
      cursor="pointer"
      fill="white"
      {...props}
    >
      <path
        data-name="5279120_play_video_youtube_youtuble logo_icon"
        d="M40 0A40 40 0 110 40 40.019 40.019 0 0140 0zm23.955 27.965a6.261 6.261 0 00-4.42-4.42C55.635 22.5 40 22.5 40 22.5s-15.635 0-19.535 1.045a6.262 6.262 0 00-4.42 4.42C15 31.865 15 40 15 40s0 8.135 1.045 12.034a6.262 6.262 0 004.42 4.421C24.365 57.5 40 57.5 40 57.5s15.635 0 19.535-1.045a6.262 6.262 0 004.42-4.421C65 48.136 65 40 65 40s0-8.136-1.045-12.035zM35 47.5v-15L47.99 40 35 47.5z"
        fill="inherit"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;
