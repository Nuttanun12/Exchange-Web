document.addEventListener("DOMContentLoaded", function () {
  const productDetailContainer = document.getElementById('product-detail-container');

  // Define the product data
  const products = [
    {
      id: 1,
      type: 'Cartridge Filter',
      name: 'Oil Filter',
      description: 'ลดการสะสมของสิ่งเจือปนที่มีขนาดตั้งแต่ 0.1 ไมครอนขึ้นไป<br>ในผลิตภัณฑ์จากกระบวนการผลิตเพื่อให้ได้ผลิตภัณฑ์ที่มีความบริสุทธิ์ ปราศจากสารปนเปื้อน<br>รวมถึงป้องกันความเสียหายที่อาจเกิดขึ้นกับอุปกรณ์สำคัญต่างๆ<br>ลดระยะเวลาการหยุดทำงานของเครื่องจักร<br>และลดการใช้พลังงานในอุตสาหกรรมการผลิตน้ำมันและก๊าซ',
      image: '../material/oil_filter_photo.png',
      size: '12'
    },
    {
      id: 2,
      type: 'Cartridge Filter',
      name: 'Suction Oil Filter',
      description: 'เป็นระบบตัวกรองของเหลวที่มีประสิทธิภาพในการดูดอนุภาคของแข็งต่างๆ<br>สิ่งเจือปนจากของเหลว กรองได้ตั้งแต่ 0.1 ไมครอนขึ้นไป',
      image: '../material/sub_oil_filter_photo.png',
      size: '16'
    },
    {
      id: 3,
      type: 'AHU',
      name: 'Pre Filter',
      description: 'เป็นด่านแรกสำหรับระบบกรองอากาศ ด้วยประสิทธิภาพจัดเก็บ<br>ฝุ่นละอองขนาดใหญ่ 1-10 ไมครอนได้มากถึง 99%<br>ช่วยให้อากาศสะอาดและบริสุทธิ์เพียงพอสำหรับการทำงานทั่วไป',
      image: '../material/pre_filter_photo.png',
      size: '16'
    },
    {
      id: 4,
      type: 'AHU',
      name: 'Medium Filter',
      description: 'แผ่นกรองอากาศขั้นที่ 2 ทำหน้าที่ช่วยกักเก็บฝุ่นที่ปนเปื้อนในอากาศ<br>ซึ่งเป็นสาเหตุของอากาศไม่สะอาด และสามารถกรองฝุ่นที่ระดับ EFF 65% - 95%',
      image: '../material/medium_filter_photo.png',
      size: '18'
    },
    {
      id: 5,
      type: 'AHU',
      name: 'HEPA Filter',
      description: 'มีประสิทธิภาพในการกรองฝุ่นที่สูงกว่าแบบปกติ สามารถดักจับฝุ่น สิ่งสกปรก ควัน หรือแม้แต่แบคทีเรียและเชื้อราที่ลอยอยู่ในอากาศได้มากขึ้น และละเอียดขึ้น โดยแผ่นกรอง HEPA<br>สามารถดักจับฝุ่นที่มีอนุภาคเล็ก 0.3 ไมครอน (EFF 95-99.99%)',
      image: '../material/hepa_filter_photo.png',
      size: '16'
    },
    {
      id: 6,
      type: 'Filter',
      name: 'Water Filter',
      description: 'ไส้กรองน้ำเป็นส่วนที่สำคัญที่สุดในเครื่องกรอง ตัวเครื่องกรองทำหน้าที่เป็นโครง แต่คุณสมบัติการกรองจะขึ้นอยู่กับไส้กรองน้ำ ซึ่งมีความสามารถในการกรองที่แตกต่างกันออกไป โดยหลักการทำงานของไส้กรองมี 2 แบบ คือแบบกรองโดยน้ำต้องทะลุผ่านไส้กรอง เช่น ไส้กรองหยาบ (PP) และแบบที่น้ำผสมทำปฏิกิริยากับสารกรอง เช่น ไส้กรองเรซิ่น โดยหน่วยวัดความสามารถของการกรองเราเรียกว่า ไมครอน ยิ่งไมครอนน้อย ก็จะมีประสิทธิภาพในการกรองที่ละเอียดมาก',
      image: '../material/water_filter_photo.png',
      size: '16'
    },
    {
      id: 7,
      type: 'Filter',
      name: 'Bag Filter',
      description: 'ไส้กรองแบบถุง สามารถกรองสิ่งที่ไม่ต้องการ สิ่งปนเปื้อนต่างๆ ออกไปได้ โดยสิ่งสกปรกนั้นจะติดอยู่ภายในถุงกรอง มีปริมาณการกรองสูงเนื่องจากมีพื้นที่ในการกรองมากกว่าแบบอื่น แต่คุณภาพการกรองต่ำกว่า เนื่องจากถุงกรองมีเพียงชั้นเดียว มักใช้สำหรับกระบวนการที่มีอัตราการไหลสูง รักษาอัตราการไหลของน้ำได้ดี กระบวนการผลิตเบื้องต้นที่ไม่ต้องการความละเอียดมากนัก สามารถติดตั้งถอดเปลี่ยนถุงกรองได้ง่าย ประหยัดเวลา',
      image: '../material/product_bag_filter.png',
      size: '16'
    },
    {
      id: 8,
      type: 'Air Breather Filter',
      name: 'Air Breather',
      description: 'สำหรับเครื่องจักรประเภทไฮดรอลิค:  ปริมาณน้ำมันในถังน้ำมันจะเปลี่ยนแปลงอยู่เสมอตามช่วงเวลาการทำงานของเครื่องจักร ทำให้มีอากาศไหลเข้า-ออก จากถังน้ำมันไฮดรอลิคตลอดเวลา อากาศจะนำความชื้นและอนุภาคขนาดเล็กผ่านช่องหายใจ (Air Breather) เข้าไปปนกับน้ำมัน จะทำให้น้ำมันสกปรก และเร่งการสึกหรอของเครื่องจักร',
      image: '../material/product_air_breather.png',
      size: '18'
    },
    {
      id: 9,
      type: 'Cartridge Filter',
      name: 'Air Filter Polyester',
      description: 'กรองฝุ่นที่ความเหนียว ความชื้น และความละเอียดมาก สามารถล้างน้ำได้ เช่น งานปูน งานเคมี งานแป้ง และงานเหล็ก กรองได้ 0.5 -10 ไมครอน',
      image: '../material/air_filter_polyester_photo.png',
      size: '16'
    },
    {
      id: 10,
      type: 'Cartridge Filter',
      name: 'Air Filter PTFE',
      description: 'กรองฝุ่นที่ความเหนียว ความชื้น และความละเอียดมาก สามารถล้างน้ำได้ เช่น งานปูน งานเคมี งานแป้ง และงานเหล็ก กรองได้ 0.5 -10 ไมครอน',
      image: '../material/air_filter_ptfe_photo.png',
      size: '16'
    },
    {
      id: 11,
      type: 'Cartridge Filter',
      name: 'Air Filter Anti Static',
      description: 'กรองฝุ่นที่ความเหนียว ความชื้น และความละเอียดมาก สามารถล้างน้ำได้<br>เช่น งานปูน งานเคมี งานแป้ง และงานเหล็ก<br>กรองได้ 0.5 -10 ไมครอน ป้องกันไฟฟ้าสถิต',
      image: '../material/air_filter_anti_static_photo.png',
      size: '14'
    },
    {
      id: 12,
      type: 'Cartridge Filter',
      name: 'Air Filter Cellulose',
      description: 'กระดาษกรอง ล้างน้ำไม่ได้ กรองได้ตั้งแต่ 5 ไมครอนขึ้นไป',
      image: '../material/air_filter_cellulose_photo.png',
      size: '16'
    },
  ];

  // Get product ID from URL (e.g. product.html?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  // Find the product by ID
  const product = products.find(p => p.id === productId);

  if (product) {
    const productDetail = createProductDetail(product);
    productDetailContainer.appendChild(productDetail);
  } else {
    productDetailContainer.innerHTML = '<p>Product not found</p>';
  }
});

function createProductDetail(product) {
  const container = document.createElement('div');

  container.innerHTML = `
    
    <div class="w-[60vw] my-[10vw] flex flex-col items-start">
        <h2 class="text-center font-bold mb-[2vw] text-[2.1vw] ">${product.type}</h2>
        <div class="flex gap-[5vw]">
            <div class="bg-[#f5f6f6] w-[50vw] h-[18.2vw] hover:scale-105 duration-500 rounded-xl flex items-center justify-center basis-[18.2vw]">
                <img src="${product.image}" alt="${product.name}" class="h-[${product.size}vw] rounded-lg">
            </div>
            <div class="flex flex-col items-start justify-between basis-[41.8vw]">
              <h2 class="font-bold mb-[1vw] text-[2.1vw]">${product.name}</h2>
              <p class="text-[1vw] grow">${product.description}</p>
              <button class="bg-[#b21c2a] rounded-[0.65vw] hover:bg-[#D45561] duration-500 w-fit">
                <a href="contact.html" class="block py-[0.4vw] px-[2.55vw] text-white font-normal text-[0.9vw]">
                  Contact us
                </a>
              </button>
            </div>
        </div>
    </div>
  `;
  
  return container;
}

document.addEventListener("DOMContentLoaded", function () {
    // Create the nav element
    const nav = document.createElement('nav');
    nav.classList.add('bg-white', 'border-gray-200', 'w-full', 'h-[4vw]', 'opacity-98', 'border', 'border-b-gray-300', 'pl-[20vw]', 'fixed', 'z-50', 'flex', 'items-center', );
  
    // Create the container div
    const container = document.createElement('div');
    container.classList.add('flex', 'w-[60vw]', 'items-center', 'justify-between');
    
    // Create the logo link
    const logoLink = document.createElement('a');
    logoLink.href = 'index.html#home';
    
    const logoImg = document.createElement('img');
    logoImg.src = '../material/nav-logo.svg';
    logoImg.classList.add('h-[2vw]');
    logoImg.alt = 'Exchange Logo';
    
    logoLink.appendChild(logoImg);
  
    // Create the ul element for links
    const navbarLinksContainer = document.createElement('ul');
    navbarLinksContainer.classList.add('font-medium', 'flex', 'space-x-[2vw]', 'items-center', 'justify-end', 'h-full');
  
    // Define the navbar links
    const navbarLinks = [
      { name: 'Home', href: '/#home' },
      { name: 'About us', href: '/about#about' },
      { name: 'Products', href: '/products#product' },
      
    ];
  
    // Loop through navbar links and append them
    navbarLinks.forEach(link => {
      const li = document.createElement('li');
      li.classList.add('font-semibold', 'text-gray-900', 'text-[0.75vw]');
      
      const a = document.createElement('a');
      a.href = link.href;
      a.classList.add('text-gray-900');
      a.textContent = link.name;
  
      li.appendChild(a);
      navbarLinksContainer.appendChild(li);
    });
  
    // Create the button for Contact Us
    const buttonContainer = document.createElement('li');
    buttonContainer.classList.add('flex', 'items-center', 'justify-center');
  
    const button = document.createElement('button');
    button.classList.add('bg-[#242424]', 'rounded-full', 'hover:bg-[#686666]', 'duration-500', 'flex', 'justify-center', 'items-center');
    
    const contactLink = document.createElement('a');
    contactLink.href = 'contact.html#contact';
    contactLink.classList.add('text-white', 'font-semibold', 'text-[0.75vw]', 'my-[0.25vw]', 'mx-[1.6vw]');
    contactLink.textContent = 'Contact us';
  
    button.appendChild(contactLink);
    buttonContainer.appendChild(button);
    navbarLinksContainer.appendChild(buttonContainer);
  
    // Append everything to the container
    container.appendChild(logoLink);
    container.appendChild(navbarLinksContainer);
  
    // Append the container to the nav
    nav.appendChild(container);
  
    // Finally, append the nav to the body (or any other element)
    document.body.appendChild(nav);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Create the footer element
    const footer = document.createElement('footer');
    footer.classList.add('w-full', 'h-[23.5vw]', 'bg-[#b21c2a]', 'flex', 'flex-col', 'items-center');
  
    // Create the top section of the footer
    const topSection = document.createElement('div');
    topSection.classList.add('w-[60vw]', 'h-[18vw]', 'mt-[1.2vw]', 'border-white', 'border-t-[0.2vw]', 'border-b-[0.11vw]', 'border-opacity-30', 'flex', 'items-center', 'justify-between');
  
    // Create the footer logo image
    const footerLogo = document.createElement('img');
    footerLogo.src = '../material/footer_logo.svg';
    footerLogo.alt = 'Exchange Logo';
    footerLogo.classList.add('h-[9vw]');
  
    // Create the contact info grid container
    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('grid', 'grid-cols-2', 'gap-y-[1vw]');
  
    // Create the location section
    const locationSection = document.createElement('div');
    locationSection.classList.add('flex', 'items-center', 'gap-x-[0.8vw]', 'col-span-2');
  
    const locationIcon = document.createElement('img');
    locationIcon.src = '../material/icon_location_white.png';
    locationIcon.alt = 'Location icon';
    locationIcon.classList.add('h-[1.5vw]');
  
    const locationText = document.createElement('p');
    locationText.classList.add('text-white', 'text-[0.72vw]', 'font-light');
    locationText.textContent = '389/157, Moo 6, Phraeksa, Mueang, Samutprakan, 10280';
  
    locationSection.appendChild(locationIcon);
    locationSection.appendChild(locationText);
  
    // Create the phone sections
    const phoneSection1 = document.createElement('div');
    phoneSection1.classList.add('flex', 'items-center', 'gap-x-[0.8vw]');
  
    const phoneIcon1 = document.createElement('img');
    phoneIcon1.src = '../material/icon_phone_white.png';
    phoneIcon1.alt = 'Phone icon';
    phoneIcon1.classList.add('h-[1.5vw]');
  
    const phoneText1 = document.createElement('p');
    phoneText1.classList.add('text-white', 'text-[0.72vw]', 'font-light');
    phoneText1.textContent = '061-426-2362';
  
    phoneSection1.appendChild(phoneIcon1);
    phoneSection1.appendChild(phoneText1);
  
    const phoneSection2 = document.createElement('div');
    phoneSection2.classList.add('flex', 'items-center', 'gap-x-[0.8vw]');
  
    const phoneIcon2 = document.createElement('img');
    phoneIcon2.src = '../material/icon_phone_white.png';
    phoneIcon2.alt = 'Phone icon';
    phoneIcon2.classList.add('h-[1.5vw]');
  
    const phoneText2 = document.createElement('p');
    phoneText2.classList.add('text-white', 'text-[0.72vw]', 'font-light');
    phoneText2.textContent = '063-826-5879';
  
    phoneSection2.appendChild(phoneIcon2);
    phoneSection2.appendChild(phoneText2);
  
    // Append the contact info sections
    contactInfoContainer.appendChild(locationSection);
    contactInfoContainer.appendChild(phoneSection1);
    contactInfoContainer.appendChild(phoneSection2);
  
    // Append logo and contact info to the top section
    topSection.appendChild(footerLogo);
    topSection.appendChild(contactInfoContainer);
  
    // Create the bottom section of the footer (links and text)
    const bottomSection = document.createElement('div');
    bottomSection.classList.add('w-[60vw]', 'mt-[2vw]', 'flex', 'justify-between');
  
    // Create the links
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('flex', 'gap-x-[5vw]');
  
    const links = [
      { name: 'ABOUT US', href: 'about.html#about' },
      { name: 'CONTACT US', href: 'contact.html#contact' },
      { name: 'HOME', href: 'index.html#home' },
      { name: 'PRODUCT', href: 'products.html#product' }
    ];
  
    links.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = link.href;
      linkElement.classList.add('text-white', 'text-[0.6vw]', 'font-light');
      linkElement.textContent = link.name;
      linksContainer.appendChild(linkElement);
    });
  
    // Add the copyright text
    const copyrightText = document.createElement('p');
    copyrightText.classList.add('text-white', 'text-[0.6vw]', 'font-light');
    copyrightText.textContent = 'Website designed and built by Nuttanun.jpr';
  
    // Append everything to the bottom section
    bottomSection.appendChild(linksContainer);
    bottomSection.appendChild(copyrightText);
  
    // Append the top and bottom sections to the footer
    footer.appendChild(topSection);
    footer.appendChild(bottomSection);
  
    // Append the footer to the body (or any other element)
    document.body.appendChild(footer);
  });
  
  
