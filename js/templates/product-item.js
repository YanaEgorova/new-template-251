export const item = (product) => {

  return `
    <li class="swiper-slide product__item item">
      <div class="product__block js_product glass glass-m" id="${product.id}">
        <div class="product__img-box">
          <img src="${product.image}" alt="" class="img">
        </div>
        <div class="product__text-box">
          <p class="product__name js_product-name">${product.name}</p>
          <svg width="100%" height="100%" viewBox="0 0 881 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" />
            </g>
            <g transform="matrix(1,0,0,1,-447.914,-382.568)">
                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" />
            </g>
            <g transform="matrix(1,0,0,1,-261.961,-382.568)">
                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" />
            </g>
            <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" />
            </g>
            <g transform="matrix(1,0,0,1,109.853,-382.568)">
                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" />
            </g>
          </svg>
          ${product.description[0].text.length > 0 ? '<p class="text product__desc">' + product.description[0].text.slice(0, 80) + "..." + '</p>' : ''}
          <span class="product__price">$${(product.price).toFixed(2)}</span>
       </div>
     
       <div class="product__btn-block">
        <a href="product-page.html?id=${product.id}" id="btn-1" class="product__btn first" style="margin: ${product.type == "ring" || product.type == "clothing" ? 'auto' : ''}"><svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Interface / Check_All">
        <path id="Vector" d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>details</a>
        ${
          product.type == "ring" || product.type == "clothing" ? '' : '<button id="btn-2" class="product__btn second js_add-to-cart"><svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Check_All"><path id="Vector" d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg> buy</button>'
        }
       </div>
     </div>
   </li>
    `
}


