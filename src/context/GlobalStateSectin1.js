import React, { createContext, useState } from "react";
import { ReactComponent as Ear } from "../../src/icons/assets/icons-svg/Screen-Reader-Adjustment.svg";
import { ReactComponent as Newspaper } from "../../src/icons/assets/icons-svg/Page-Structure.svg";
import { ReactComponent as Keyboard } from "../../src/icons/assets/icons-svg/keyboard.svg";
import { ReactComponent as Smart } from "../../src/icons/assets/icons-svg/Smart-Navigation.svg";
import { ReactComponent as Voice } from "../../src/icons/assets/svg-export/svgexport-14.svg";
import { ReactComponent as Enlargment } from "../../src/icons/assets/svg-export/svgexport-15.svg";
import { ReactComponent as Dark } from "../../src/icons/assets/icons-svg/DarkHigh-Contrast.svg";
import { ReactComponent as Light } from "../../src/icons/assets/icons-svg/Bright-High-Contrast.svg";
import { ReactComponent as Contrast } from "../../src/icons/assets/icons-svg/Contrast-Mode.svg";
import { ReactComponent as LowSaturation } from "../../src/icons/assets/icons-svg/Low-Saturation.svg";
import { ReactComponent as Monochrome } from "../../src/icons/assets/icons-svg/Monochrome.svg";
import { ReactComponent as HighSaturation } from "../../src/icons/assets/icons-svg/High-Saturation.svg";
import { ReactComponent as Img } from "../../src/icons/assets/icons-svg/Image-Description.svg";
import { ReactComponent as MagnifierTxt } from "../../src/icons/assets/icons-svg/Magnifier.svg";
import { ReactComponent as Magnifier } from "../../src/icons/assets/icons-svg/Magnifier.svg";
import { ReactComponent as ReadableFont } from "../../src/icons/assets/icons-svg/Readable-Font.svg";
import { ReactComponent as HighlightLinks } from "../../src/icons/assets/svg-export/svgexport-25.svg";
import { ReactComponent as HighlightHeaders } from "../../src/icons/assets/svg-export/svgexport-26.svg";
import { ReactComponent as Blinks } from "../../src/icons/assets/icons-svg/Blinks-Blocking.svg";
import { ReactComponent as Mute } from "../../src/icons/assets/icons-svg/Mute-Media.svg";
import { ReactComponent as ReadFocus } from "../../src/icons/assets/svg-export/svgexport-29.svg";
import { ReactComponent as ReadGuide } from "../../src/icons/assets/icons-svg/Read-Guide.svg";
import { ReactComponent as Dictionary } from "../../src/icons/assets/icons-svg/Dictionary.svg";
import { ReactComponent as TxtReader } from "../../src/icons/assets/icons-svg/Text-Reader.svg";
import { ReactComponent as ReadableMode } from "../../src/icons/assets/svg-export/svgexport-33.svg";

export const GlobalStateContext = createContext();

// مكون Provider
export const GlobalStateProvider = ({ children }) => {
  const [openItems, setOpenItems] = useState({});
  const [activeButtons, setActiveButtons] = useState({});

  const items = [
    "Blindness",
    "Motor Skills Disorders",
    "Color bar",
    "Visually Impaired",
    "Epilepsy",
    "ADHD",
    "Learning",
    "Elder",
    "Dyslexia",
  ];

  const cardsData = {
    "Blindness": [
      { icon: <Ear />, text: "Screen Reader Adjustment" ,hoverText:"Makes the site compatible for screen reader users."},
      { icon: <Newspaper />, text: "Page Structure", hoverText:"Generate a list of page landmarks, headers, and links." },
    ],
    "Motor Skills Disorders": [
      { icon: <Keyboard />, text: "Keyborad Navigation", hoverText:"Enables users to navigate by keyboard, without using the mouse" },
      { icon: <Smart />, text: "Smart Navigation", hoverText:"Enables users to navigate the site by numeric keys." },
      { icon: <Voice />, text: "Voice Commands" , hoverText:"Executing Commands with a microphone, in supported browsers."},
      { icon: <Enlargment />, text: "Enlarge Buttons" , hoverText:"Enlarges buttons to meet WCAG accessibility regulations." },
      { icon: <Newspaper />, text: "Page Structure" , hoverText:"Generate a list of page landmarks, headers, and links."},
    ],
    "Color bar": [
      { icon: <Dark />, text: "Dark High-Contrast", hoverText:"Chnages the site's background to black, with bright fonts." },
      { icon: <Light />, text: "Bright High-Contrast", hoverText:"Changes the site's background to white with dark fonts." },
      { icon: <Contrast />, text: "Contrast Mode", hoverText:"Changes the site's colors to contrast colors." },
      { icon: <LowSaturation />, text: "Low saturation", hoverText:"Decrease the intensity of the colors for less emphasized content."  },
      { icon: <Monochrome />, text: "Monochrome", hoverText:"Convert to black and white colors." },
      { icon: <HighSaturation />, text: "High saturation", hoverText:"Increase the intensity of colors for emphasized content." },
    ],
    "Visually Impaired": [
      { icon: <Ear />, text: "Screen Reader Adjustment", hoverText:"Makes the site compatible for screen reader users."},
      { icon: <Dark />, text: "Dark High-Contrast" , hoverText:"Chnages the site's background to black, with bright fonts."},
      { icon: <Light />, text: "Bright High-Contrast", hoverText:"Changes the site's background to white with dark fonts." },
      { icon: <Enlargment />, text: "Enlarge Buttons" , hoverText:"Enlarges buttons to meet WCAG accessibility regulations."},
      { icon: <Newspaper />, text: "Page Structure" , hoverText:"Generate a list of page landmarks, headers, and links."},
      { icon: <HighSaturation />, text: "High saturation", hoverText:"Increase the intensity of colors for emphasized content."},
      { icon: <LowSaturation />, text: "Low saturation" , hoverText:"Decrease the intensity of colors for less emphasized content."},
      { icon: <Contrast />, text: "Contrast Mode" , hoverText:"Changes the site's colors to contrast colors." },
      { icon: <Img />, text: "Image Descriptions" , hoverText:"Displays image descriptions in a floating window."},
      { icon: <Magnifier />, text: "Magnifier" , hoverText:"Zooms the screen display."},
      { icon: <ReadableFont />, text: "Readable Font", hoverText:"Convert the sites's fonts to [sans-serif] and readable ones."},
      { icon: <HighlightLinks />, text: "Highlight Links" , hoverText:"Highlights the site links."},
      { icon: <HighlightHeaders />, text: "Highlight Headers", hoverText:"Highlights the site headers." },
      { icon: <MagnifierTxt />, text: "Text Magnifier" , hoverText:"Increase the content chosen by the cursor,shown in a tooltip." },
    ],
    "Epilepsy": [
      { icon: <Blinks />, text: "Blinks Blocking", hoverText:"Stops blinking and flashing of moving elements." },
      { icon: <LowSaturation />, text: "Low saturation" , hoverText:"Decrease the intensity of the colors for less emphasized content." },
      { icon: <Mute />, text: "Mute Media" , hoverText:"Mutes all sounds and vocal element." },
    ],
    "ADHD": [
      { icon: <ReadFocus />, text: "Read focus" , hoverText:"Light up a selected paragraph on the page by hovering with the mouse across the page." },
      { icon: <Img />, text: "Image Descriptions" , hoverText:"Displays image descriptions in a floating window."},
      { icon: <ReadGuide />, text: "Reading guide", hoverText:"Create a virtual bar that follows the cursor to improve the reader's focus."  },
      { icon: <Dictionary />, text: "Dictionary", hoverText:"Describe words by mose."  },
      { icon: <Mute />, text: "Mute Media" , hoverText:"Mutes all sounds and vocal element." },
    ],
    "Learning": [
      { icon: <ReadGuide />, text: "Reading guide", hoverText:"Create a virtual bar that follows the cursor to improve the reader's focus." },
      { icon: <HighlightLinks />, text: "Highlight Links", hoverText:"Highlights the site links." },
      { icon: <HighlightHeaders />, text: "Highlight Headers", hoverText:"Highlights the site headers."  },
    ],
    "Elder": [
      { icon: <TxtReader />, text: "Text Reader", hoverText:"Reading the site's text aloud, in supported browsers." },
      { icon: <Enlargment />, text: "Enlarge Buttons", hoverText:"Enlarges buttons to meet WCAG accessibility regulations." },
      { icon: <Dictionary />, text: "Dictionary", hoverText:"Describe words by mose."  },
      { icon: <MagnifierTxt />, text: "Text Magnifier" , hoverText:"Increase the content chosen by the cursor,shown in a tooltip."},
      { icon: <Magnifier />, text: "Magnifier"  , hoverText:"Zooms the screen display."},
      { icon: <ReadFocus />, text: "Read focus" , hoverText:"Light up a selected paragraph on the page by hovering with the mouse across the page."},
      { icon: <ReadGuide />, text: "Reading guide" , hoverText:"Create a virtual bar that follows the cursor to improve the reader's focus."},
      { icon: <ReadableMode />, text: "Readable Mode" , hoverText:"Displays the site's contents in a new window clearly and readable."},
    ],
    "Dyslexia": [
      { icon: <Dictionary />, text: "Dictionary", hoverText:"Describe words by mose."  },
      { icon: <Img />, text: "Image Descriptions" , hoverText:"Displays image descriptions in a floating window."},
      { icon: <ReadGuide />, text: "Reading guide", hoverText:"Create a virtual bar that follows the cursor to improve the reader's focus." },
    ],
  };

  return (
    <GlobalStateContext.Provider
      value={{
        items,
        cardsData,
        openItems,
        setOpenItems,
        activeButtons,
        setActiveButtons,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
