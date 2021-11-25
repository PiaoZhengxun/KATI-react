import React from 'react'

function CategoryMenu() {
    return (
        <div>
               <div className="category__section">
            <Row className="category__row">
              <Col md='11'>
                <p className='titleBar'>카테고리</p>
              </Col>
            </Row>
           <hr className="divide__line" />
            <div className='category__items'>
          <div className='item' >
            <Link to='/category/snack'>
            <figure class="snip1384">
                  <img src={간식} alt="sample83" />
                  <figcaption>
                    <h3>간식</h3>
                    <p>과자/떡/빵/사탕.껌.젤리/아이스크림/초콜릿</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
          </div>

           <div className='item' >
            <Link to='/category/tea'>
               <figure class="snip1384">
                  <img src={차음료} alt="sample83" />
                  <figcaption>
                    <h3>차/음료</h3>
                    <p>음료/커피/커피.차 </p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
         
          </div>

          <div className='item'>
            <Link to='/category/milk' name={'유제품'}>
               <figure class="snip1384">
                  <img src={유제품} alt="sample83" />
                  <figcaption>
                    <h3>유제품</h3>
                    <p>유제품</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
          
          </div>
          <div className='item'>
            <Link to='/category/meat' name={'육류'}>
               <figure class="snip1384">
                  <img src={육류} alt="sample83" />
                  <figcaption>
                    <h3>육류</h3>
                    <p>육류/햄.소시지</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
        
          </div>
          <div className='item'>
            <Link to='/category/material' name={'식재료'}>
               <figure class="snip1384">
                  <img src={식재료} alt="sample83" />
                  <figcaption>
                    <h3>식재료</h3>
                    <p>국수/두부/식용유/어묵</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
          
          </div>
          <div className='item'>
            <Link to='/category/food' name={'농수산물'}>
             <figure class="snip1384">
                  <img src={농수산물} alt="sample83" />
                  <figcaption>
                    <h3>농수산물</h3>
                    <p>계란/과일.채소/김/수산물/견과/곡류</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
            
          </div>
          <div className='item'>
            <Link to='/category/con' name={'조미료'}>
              <figure class="snip1384">
                  <img src={조미료} alt="sample83" />
                  <figcaption>
                    <h3>조미료</h3>
                    <p>설탕/소금/소스/장류</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
          
          </div>
          <div className='item'>
            <Link to='/category/kimchi' name={'김치'}>
              <figure class="snip1384">
                  <img src={김치} alt="sample83" />
                  <figcaption>
                    <h3>김치</h3>
                    <p>김치/젓갈</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
        
          </div>
          <div className='item'>
            <Link to='/category/mealKit' name={'즉석조리식품'}>
                <figure class="snip1384">
                  <img src={즉석조리식품} alt="sample83" />
                  <figcaption>
                    <h3>즉석조리식품</h3>
                    <p>즉석조리식품</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>

            </Link>
          </div>
          <div className='item'>
            <Link to='/category/etc' name={'기타가공품'}>
                <figure class="snip1384">
                  <img src={기타} alt="sample83" />
                  <figcaption>
                    <h3>기타가공품</h3>
                    <p>기타가공품</p>
                    <i class="ion-ios-arrow-right"><FiArrowRightCircle /></i>
                  </figcaption>
           
                </figure>
            </Link>
     
          </div>
        </div> 
      </div>
        </div>
    )
}

export default CategoryMenu
