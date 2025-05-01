import { createContext } from "react";


export let MediaContext = createContext();

export default function MediaContextProvider({ children }) {


  const mediaItems = [
    {
      type: "video",
      title: "م.محمد عبد الرؤوف عضو مجلس الاتحاد المصري لمقاولي التشييد والبناء يوضح أسباب تراجع أسعار الحديد",
      description:
        "Discussion on the future of real estate investment in Egypt.",
      url: "https://www.youtube.com/embed/9InWBVDoecw",
    },
    {
      type: "video",
      title: "م. محمد عبد الرؤوف يوضح أهم المحاور التي تعمل عليها الحكومة المصرية لدعم القطاع الخاص",
      description: "Highlights of our recent construction milestones.",
      url: "https://www.youtube.com/embed/--KoK4roJlE",
    },
    {
      type: "video",
      title: "لقاء المهندس محمد عبد الرؤوف مع  قناه CBC extra بتاريخ 6/6/2015",
      description: "Highlights of our recent construction milestones.",
      url: "https://www.youtube.com/embed/KIFwltbCYe0",
    },
    {
      type: "video",
      title: "تعمير-م/محمد عبد الرؤوف يوضح جهود الحكومة لدعم فرص شركات المقاولات المصرية في مشروعات إعادة الإعمار",
      description: "Highlights of our recent construction milestones.",
      url: "https://www.youtube.com/embed/3FXoRUyJqdg",
    },
    // {
    //   type: "news",
    //   title: "Great Shield Wins Mega Project Contract",
    //   description:
    //     "Awarded the development of a major governmental housing compound.",
    // },
    // {
    //   type: "news",
    //   title: "CEO Attends Arab Contractors Conference",
    //   description:
    //     "A key voice in regional construction industry collaboration.",
    // },
    // Add more items as needed
  ];

  return (
    <>
      <MediaContext.Provider value={{ mediaItems }}>
        {children}
      </MediaContext.Provider>
    </>
  );
}
