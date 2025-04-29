import React from "react";
import manager from '/chairman/manager.webp'



export default function Portfolio() {
  return (
    <>
      <section className="py-16 px-4 lg:px-32 bg-navBg">
        <div className="text-center mb-12">
          <img
            src={manager}
            alt="Manager"
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
          />
          <h2 className="text-3xl font-bold text-mainColor">Eng. Mohamed Abdel Raouf</h2>
          <p className="text-sky-600">Great Shield Manager</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2"></h3>
            <p className="text-gray-700 leading-loose">
              مهندس بخبرة أكثر من 20 عامًا في قطاع المقاولات، أسس الشركة وقادها
              نحو العديد من النجاحات...
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">الإنجازات</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-loose">
              <li>إنشاء أكثر من 50 مشروعًا في مصر والخليج</li>
              <li>شراكات مع كبرى شركات المقاولات</li>
              <li>جوائز تكريمية من جهات حكومية</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}








/* 



<div>عضو مجلس إدارة "<a href="https://manhom.com/شركات/%d8%a7%d8%aa%d8%ad%d8%a7%d8%af-%d8%a7%d9%84%d9%85%d9%82%d8%a7%d9%88%d9%84%d9%8a%d9%86/">الاتحاد المصري لمقاولي التشييد والبناء</a>"، جمهورية مصر العربية.<br>
<br>
كان عضواً في مجلس إدارة "<a href="https://manhom.com/شركات/%d8%a7%d9%84%d9%86%d8%b5%d8%b1-%d9%84%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%86%d9%8a%d8%a9//">شركة النصر للأعمال المدنية</a>" بين 30 مارس (آذار) 2017 و31 مايو (أيار) 2021.<br>
<br>
شغل منصب رئيس مجلس الإدارة والعضو المنتدب لكل من "شركة أطلس العامة للمقاولات والاستثمارات العقارية"، و<a href="https://manhom.com/شركات/%d8%a7%d9%84%d8%b4%d8%b1%d9%83%d8%a9-%d8%a7%d9%84%d9%85%d8%b5%d8%b1%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d9%87%d9%85%d8%a9-%d9%84%d9%84%d9%85%d9%82%d8%a7%d9%88%d9%84%d8%a7%d8%aa/">الشركة المساهمة المصرية للمقاولات "العبد"</a> بين 2002 و2014، و"<a href="https://manhom.com/شركات/%d8%b4%d8%b1%d9%83%d8%a9-%d8%a7%d9%84%d9%86%d8%b5%d8%b1-%d9%84%d9%84%d8%a5%d8%b3%d9%83%d8%a7%d9%86-%d9%88%d8%a7%d9%84%d8%aa%d8%b9%d9%85%d9%8a%d8%b1/">شركة النصر للإسكان والتعمير</a>" بين 2014 و2015، والعضو المنتدب للشؤون الفنية والتنفيذ في "<a href="https://manhom.com/شركات/%d8%a7%d9%84%d9%86%d8%b5%d8%b1-%d9%84%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d9%85%d8%af%d9%86%d9%8a%d8%a9//">شركة النصر للأعمال المدنية</a>" بين 1996 و1997.<br>
<br>
حاصل على بكالوريوس في الهندسة.</div>


*/