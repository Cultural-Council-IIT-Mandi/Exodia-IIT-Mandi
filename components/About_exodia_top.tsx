import React from 'react';

const AboutExodiaTop: React.FC = () => {
  return (
    <div className="AboutExodia_top p-8">
      <p className="AboutExodia_top_heading text-[#7d7e80] text-5xl font-normal tracking-[2.5px] text-center mb-4">
        About Exodia
      </p>
      <p className="AboutExodia_para font-normal leading-[30px] mb-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, provident modi nisi aperiam est iure, officiis rerum repudiandae odit unde nobis similique, autem dignissimos explicabo suscipit iste adipisci iusto illum.
        Consequuntur quae vitae nostrum? Eaque tenetur voluptate magnam. Id itaque nulla ex, accusamus adipisci dolorum minima ab perspiciatis nostrum porro optio amet molestias soluta, praesentium, a eius aliquam voluptatum nesciunt.
      </p>
      {/* If we want something new */}
      <div className="AboutExodia_extra"></div>
    </div>
  );
};

export default AboutExodiaTop;