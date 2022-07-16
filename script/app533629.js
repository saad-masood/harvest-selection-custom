// $(document).ready(function () {
  $(document).ready(function() {
    localStorage.removeItem('grand_total_price')

  });
let DataPayload = {};
let totalPrice = 0;
let totalPricee = 0;
let base_price = 40;
let shipping_price = 10;

/***************************** Ingredient Details **************************** */

let rosehip_detail = `<div class="bg-black rounded-lg pt-5 mb-5 sm:mb-2 overflow-hidden shadow-xl sm:my-8 text-left">
                        <h2 class="text-bold"><b>Origin:</b> Bulgaria, Poland, Denmark</h2>
                    </div>
                    <div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">Helps with anti-aging by helping in the regneration and healing of the skin cells.</span>
                            </li>
                            <li class="">
                                <span class="">Brightens and evens out the skin.</span>
                            </li>
                            <li class="">
                                <span class="">Ultra-effective emollient and moisturizer which can help soften skin and improve skin barrier function.</span>
                            </li>
                        </ul>
                    </div>
                    <h2 class="text-bold mb-2 text-lg text-left"><b>Certification: </b>Certified Organic</h2>`;


let marula_detail = `<div class="bg-black rounded-lg pt-5 mb-5 sm:mb-2 overflow-hidden shadow-xl sm:my-8 text-left">
                    <h2 class="text-bold"><b>Origin:</b> Nambia </h2>
                    </div>
                    <div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">Diminishes the look of fine lines and wrinkles and promotes elasticity which contributes to its anti-aging affects on the skin.</span>
                            </li>
                            <li class="">
                                
                                <span class="">Promotes an even and balanced complexion.</span>
                            </li>
                            <li class="">
                                <span class="">Provides moisture and a glow to the skin while nourishing it.</span>
                            </li>
                        </ul>
                    </div>
                    <h2 class="text-bold mb-2 text-lg text-left"><b>Certification: </b>Certified Organic</h2>`;

let argan_detail = `<div class="bg-black rounded-lg pt-5 mb-5 sm:mb-2 overflow-hidden shadow-xl sm:my-8 text-left">
                            <h2 class="text-bold"><b>Origin:</b> Morocco </h2>
                    </div>
                    <div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">Helps moisturize the skin without leaving the skin feeling greasy.</span>
                            </li>
                            <li class="">
                                
                                <span class="">Nourishes, conditions, and hydrates the skin while making it look glowy.</span>
                            </li>
                            <li class="">
                                <span class="">Known to help with the treatement of acne and showcase healing benefits for the skin.</span>
                            </li>
                        </ul>
                    </div>
                    <h2 class="text-bold mb-2 text-lg text-left"><b>Certification: </b>Certified Organic</h2>`;

let jojoba_detail = `<div class="bg-black rounded-lg pt-5 mb-5 sm:mb-2 overflow-hidden shadow-xl sm:my-8 text-left">
                    <h2 class="text-bold"><b>Origin:</b> Argentina, Israel, Panama, United States </h2>
                    </div>
                    <div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">Nurtures and protects the skin.</span>
                            </li>
                            <li class="">
                                
                                <span class="">Delivers antioxidant protection and has anti-inflammatory effects.</span>
                            </li>
                            <li class="">
                                <span class="">Helps maintain skin hydration and balances natural oil production.</span>
                            </li>
                        </ul>
                    </div>
                    <h2 class="text-bold mb-2 text-lg text-left"><b>Certification: </b>Certified Organic</h2>`;

let almond_detail = `<div class="bg-black rounded-lg pt-5 mb-5 sm:mb-2 overflow-hidden shadow-xl sm:my-8 text-left">
                    <h2 class="text-bold"><b>Origin:</b> India, Italy, Morocco, Spain </h2>
                    </div>
                    <div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">Improves skin tone and complexion by providing healing affects to the skin.</span>
                            </li>
                            <li class="">
                                
                                <span class="">Provides the skin with soothing and calming properties.</span>
                            </li>
                            <li class="">
                                <span class="">Helps with UV damage and environmental pollutants.</span>
                            </li>
                        </ul>
                    </div>
                    <h2 class="text-bold mb-2 text-lg text-left"><b>Certification: </b>Certified Organic</h2>`;


let calendula_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                            <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                            <ul class="list-disc p-4">
                                <li class="">
                                    <span class="">Helps in sustaining soothed, hydrated skin.</span>
                                </li>
                                <li class="">
                                    
                                    <span class="">Helps plump the surface of the skin to give a tighter, hydrated and more supple effect almost instantly.</span>
                                </li>
                                <li class="">
                                    <span class="">Promotes both anti-inflammatory and anti-oxidant properties.</span>
                                </li>
                            </ul>
                        </div>`;

let lavander_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                            <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                            <ul class="list-disc p-4">
                                <li class="">
                                    <span class="">Fortifies the skin while imparting a sense of relaxation and comfort.</span>
                                </li>
                                <li class="">
                                    
                                    <span class="">unclogs pores and reduces inflammation.</span>
                                </li>
                                <li class="">
                                    <span class="">Helps calm and heal the skin.</span>
                                </li>
                            </ul>
                        </div>`;

let chamomile_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">Chamomile help boost skin health to bring out an inner glow and fade dark spots.</span>
                            </li>
                            <li class="">
                                <span class="">Polyphenols present in Chamomile helps fight against free radicals which protects the skin from environmental damage.</span>
                            </li>
                            <li class="">
                                <span class="">It aids in skin cell regeneration and acts as an antioxidant, fighting free radical damage on the skin.</span>
                            </li>
                        </ul>
                    </div>`;

let cornflower_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                    <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                    <ul class="list-disc p-4">
                        <li class="">
                            <span class="">Helps calm and soothe sensitive skin.</span>
                        </li>
                        <li class="">
                            
                            <span class="">Aids with dark spots and discoloration.</span>
                        </li>
                        <li class="">
                            <span class="">The plant’s herbaceous polyphenols’ astringent properties are helpful in reducing pore appearance.</span>
                        </li>
                    </ul>
                </div>`;

let rose_fragrance_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                                <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                                <ul class="list-disc p-4">
                                    <li class="">
                                        <span class="">Exhibit skin anti‐inflammatory and antioxidant propoerties.</span>
                                    </li>
                                    <li class="">
                                        <span class="">Moisturizes, brightens and protects skin from trans-epidermal water loss and airborne pollutants.</span>
                                    </li>
                                    <li class="">
                                        <span class="">As a natural astringent, rose helps tighten pores and restore suppleness for a glowy complexion.</span>
                                    </li>
                                </ul>
                            </div>`;

let clear_quartz_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                            <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                            <ul class="list-disc p-4">
                                <li class="">
                                    <span class="">Balances and revitalises the physical, mental, emotional and spiritual planes.</span>
                                </li>
                                <li class="">
                                    <span class="">Amplifies energy by absorbing and regulating it.</span>
                                </li>
                                <li class="">
                                    <span class="">Known to stimulate the immune system and bringing the body into balance.</span>
                                </li>
                            </ul>
                        </div>`;

let red_jasper_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                            <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                            <ul class="list-disc p-4">
                                <li class="">
                                    <span class="">Aids with self-confidence and self trust by providing emotional protection.</span>
                                </li>
                                <li class="">
                                    <span class="">Increases memory of dreams as well as sexual vibrancy.</span>
                                </li>
                                <li class="">
                                    <span class="">Strengthens and detoxifies the circulatory system, blood and liver.</span>
                                </li>
                            </ul>
                        </div>`;

let sodalite_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">It encourages rational thought, objectivity, truth and intuition, along with verbalisation of feelings.</span>
                            </li>
                            <li class="">
                                <span class="">Sodalite brings order and calmness to the mind while promoting emotional balance.</span>
                            </li>
                            <li class="">
                                <span class="">Enhances self-esteem, self-acceptance and self-trust.</span>
                            </li>
                        </ul>
                    </div>`;

let green_malachite_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                    <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                    <ul class="list-disc p-4">
                        <li class="">
                            <span class="">Opens the heart to unconditional love.</span>
                        </li>
                        <li class="">
                            <span class="">Helps provide peaceful sleep.</span>
                        </li>
                        <li class="">
                            <span class="">Can help maintain emotional balance.</span>
                        </li>
                    </ul>
                </div>`;

let yellow_citrine_detail = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                <h2 class="text-bold text-lg text-left"><b>Benefits</b></h2>
                <ul class="list-disc p-4">
                    <li class="">
                        <span class="">Aids with digestion while improving the metabolic system.</span>
                    </li>
                    <li class="">
                        <span class="">Brings joy, positivity, wisdom, and good luck, along with a focus on your goals and dreams.</span>
                    </li>
                    <li class="">
                        <span class="">Helps bring in self-awareness and brings in new ideas, and helps you see things from a new perspective.</span>
                    </li>
                </ul>
            </div>`;

let zero_one_seven = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                        <h2 class="text-bold text-lg text-left"><b>Fragrance Notes</b></h2>
                        <ul class="list-disc p-4">
                            <li class="">
                                <span class="">Cardamom, Iris, Violet, Australian sandalwood, Cedarwood, Papyrus, Ambrox, Leather, accord, Musk.</span>
                            </li>
                        </ul>
                    </div>`;

let zero_one_three = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                    <h2 class="text-bold text-lg text-left"><b>Fragrance Notes</b></h2>
                    <ul class="list-disc p-4">
                        <li class="">
                            <span class="">Truffle, Gardenia, Black Currant, Orchid, Spices, Gardenia, Mexican Chocolate, Patchouli.</span>
                        </li>
                    </ul>
                </div>`;

let zero_two_eight = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                    <h2 class="text-bold text-lg text-left"><b>Fragrance Notes</b></h2>
                    <ul class="list-disc p-4">
                        <li class="">
                            <span class="">Orange Blossom, Bergamont, Turkish Rose, Ylang-Ylang, Patchouli, Vetiver, White Musk.</span>
                        </li>
                    </ul>
                </div>`;
        
let zero_one_zero = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
                <h2 class="text-bold text-lg text-left"><b>Fragrance Notes</b></h2>
                <ul class="list-disc p-4">
                    <li class="">
                        <span class="">Jasmine, Hyacinth.</span>
                    </li>
                </ul>
            </div>`;

let zero_zero_three = `<div class="mt-5 text-left shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
            <h2 class="text-bold text-lg text-left"><b>Fragrance Notes</b></h2>
            <ul class="list-disc p-4">
                <li class="">
                    <span class="">Vanilla, Tobacoo, Woody-Balsamic Undertone.</span>
                </li>
            </ul>
        </div>`;
// price data

let oil_price = `<dl class="space-y-2">
                    <div class="relative">
                      <dt class="flex justify-center">
                        <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                          Rosehip Oil
                        </div>
                        <p class="ml-16 leading-6 font-medium">$10</p>
                      </dt>
                    </div>

                    <div class="relative">
                      <dt class="flex justify-center">
                        <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                          Marula Oil
                        </div>
                        <p class="ml-16 leading-6 font-medium">$10</p>
                      </dt>
                    </div>

                    <div class="relative">
                      <dt class="flex justify-center">
                        <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                          Argan Oil
                        </div>
                        <p class="ml-16 leading-6 font-medium">$10</p>
                      </dt>
                    </div>

                    <div class="relative">
                      <dt class="flex justify-center">
                        <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                          Jojoba Oil
                        </div>
                        <p class="ml-16 leading-6 font-medium">$10</p>
                      </dt>
                    </div>

                    <div class="relative">
                      <dt class="flex justify-center">
                        <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                          Almond Oil
                        </div>
                        <p class="ml-16 leading-6 font-medium">$10</p>
                      </dt>
                    </div>
                  </dl>`;

let fragrance_price = `<dl class="space-y-2">
                  <div class="relative">
                    <dt class="flex justify-center">
                      <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                      007
                      </div>
                      <p class="ml-16 leading-6 font-medium">Free</p>
                    </dt>
                  </div>

                  <div class="relative">
                    <dt class="flex justify-center">
                      <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                      013
                      </div>
                      <p class="ml-16 leading-6 font-medium">Free</p>
                    </dt>
                  </div>

                  <div class="relative">
                    <dt class="flex justify-center">
                      <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                      028
                      </div>
                      <p class="ml-16 leading-6 font-medium">Free</p>
                    </dt>
                  </div>

                  <div class="relative">
                    <dt class="flex justify-center">
                      <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                      010
                      </div>
                      <p class="ml-16 leading-6 font-medium">Free</p>
                    </dt>
                  </div>

                  <div class="relative">
                    <dt class="flex justify-center">
                      <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                      003
                      </div>
                      <p class="ml-16 leading-6 font-medium">Free</p>
                    </dt>
                  </div>
                </dl>`;

let cbd_price = `<dl class="space-y-2">
                <div class="relative">
                  <dt class="flex justify-center">
                    <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                    Light
                    </div>
                    <p class="ml-16 leading-6 font-medium">$10</p>
                  </dt>
                </div>

                <div class="relative">
                  <dt class="flex justify-center">
                    <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                    Regular
                    </div>
                    <p class="ml-16 leading-6 font-medium">$15</p>
                  </dt>
                </div>

                <div class="relative">
                  <dt class="flex justify-center">
                    <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                    Strong
                    </div>
                    <p class="ml-16 leading-6 font-medium">$20</p>
                  </dt>
                </div>
              </dl>`;

let goldflakes_price = `<dl class="space-y-2">
                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Light
                              </div>
                              <p class="ml-16 leading-6 font-medium">$10</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Regular
                              </div>
                              <p class="ml-16 leading-6 font-medium">$15</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Strong
                              </div>
                              <p class="ml-16 leading-6 font-medium">$20</p>
                            </dt>
                          </div>
                        </dl>`;

let shimmer_price = `<dl class="space-y-2">
                        <div class="relative">
                          <dt class="flex justify-center">
                            <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                            Light
                            </div>
                            <p class="ml-16 leading-6 font-medium">Free</p>
                          </dt>
                        </div>

                        <div class="relative">
                          <dt class="flex justify-center">
                            <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                            Regular
                            </div>
                            <p class="ml-16 leading-6 font-medium">Free</p>
                          </dt>
                        </div>

                        <div class="relative">
                          <dt class="flex justify-center">
                            <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                            Strong
                            </div>
                            <p class="ml-16 leading-6 font-medium">Free</p>
                          </dt>
                        </div>
                      </dl>`;
                
let botanicals_price = `<dl class="space-y-2">
                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Calendula
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Lavander
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Chamomile
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Cornflower
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-24 items-center justify-center rounded-md" style="font-size: 17px">
                              Rose
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>
                          </dl>`;
                        
let crystals_price = `<dl class="space-y-2">
                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-40 items-center justify-center rounded-md" style="font-size: 17px">
                              Red Jasper
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-40 items-center justify-center rounded-md" style="font-size: 17px">
                              Clear Quartz
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-40 items-center justify-center rounded-md" style="font-size: 17px">
                              Sodalite
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-40 items-center justify-center rounded-md" style="font-size: 17px">
                              Green Malachite
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>

                          <div class="relative">
                            <dt class="flex justify-center">
                              <div class="w-40 items-center justify-center rounded-md" style="font-size: 17px">
                              Yellow Citrine
                              </div>
                              <p class="ml-16 leading-6 font-medium">$5</p>
                            </dt>
                          </div>
                          </dl>`;

/***************************** Add oil to cart **************************** */

$(".oil_label").on("click", function (e) {

  e.preventDefault();

  // unchecked if already checked
  if($(this).siblings(2).is(':checked')){
      $('.oil_label').removeClass("border-4 border-grey-700")

      $("input[name=default_oil]").prop("checked", false);

      $(".remove_preview_oil_btn").addClass("hidden");

      $(".oil_ingredient").hide();
      let price = $('.price').text()
      let payload_price  = DataPayload.default_oil.price
      $('.price').html(parseInt(price) - parseInt(payload_price))
      delete DataPayload.default_oil;

      add_data_into_cart()
      show_count_on_cart_icon()
      return false
  }
  $(".oil_label_checked_icon").addClass("hidden");

  $('.oil_label').removeClass("border-4");
  $(".oil_label").css("border-color", "#C19751");
  $(this).addClass("border-4");
  // $(".remove_preview_oil_btn").removeClass("hidden");
  $(this).siblings(2).prop("checked", true);
  var oil_name = $(this).data('id');

  if(oil_name == 'no-thankyou'){

    $("input[name=default_oil]").prop("checked", false);

    $(".remove_preview_oil_btn").addClass("hidden");

    $(".oil_ingredient").hide();
    let price = $('.price').text()
    let payload_price  = DataPayload.default_oil.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
    delete DataPayload.default_oil;

    add_data_into_cart()
    show_count_on_cart_icon()
  }

  else{
    $(".oil_ingredient").show();
    add_data_into_cart()
    show_total()
  }
  

});



/***************************** Add Fragrance to cart **************************** */

$(".fragrance_label").on("click", function (e) {
  e.preventDefault();

    // unchecked if already checked
    if($(this).siblings(2).is(':checked')){
      $('.fragrance_label').removeClass("border-4 border-grey-700")
      $("input[name=fragrance]").prop("checked", false);

      $(".remove_preview_fragrance_btn").addClass("hidden");

      delete DataPayload.fragrance;

      add_data_into_cart()
      show_count_on_cart_icon()

      return false;
    }
  $(".fragrance_label_checked_icon").addClass("hidden");

  
  $('.fragrance_label').removeClass("border-4");


  $(".fragrance_label").css("border-color", "#C19751");

  $(this).addClass("border-4");
//   $(this).siblings(3).removeClass("hidden");
  // $(this).children().eq(4).removeClass('hidden');
  // $(".remove_preview_fragrance_btn").removeClass("hidden");

  // $(this).children().eq(0).prop( "checked", true );
  $(this).siblings(2).prop("checked", true);

  var fragrance_name = $(this).data("id");
  var fragrance_price = $(this).children().eq(0).val();
  
  if(fragrance_name == 'no-thankyou'){

    $("input[name=fragrance]").prop("checked", false);

    $(".remove_preview_fragrance_btn").addClass("hidden");
  
    delete DataPayload.fragrance;
  
    add_data_into_cart()
    show_count_on_cart_icon()

  }

  else{
    add_data_into_cart()
    show_total()
  }
  
});



/***************************** Add CBD to cart **************************** */

$(".cbd_label").on("click", function (e) {
  e.preventDefault();
  if($(this).siblings(2).is(':checked')){

    $('.cbd_label').removeClass("border-4 border-grey-700")


    $("input[name=cbd]").prop("checked", false);

    $(".remove_preview_cbd_btn").addClass("hidden");

    let price = $('.price').text()
    let payload_price  = DataPayload.cbd.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
    delete DataPayload.cbd;

    add_data_into_cart()
    show_count_on_cart_icon()

    return false;
  }
  $(".cbd_label_checked_icon").addClass("hidden");
  $('.cbd_label').removeClass("border-4");
  $(".cbd_label").css("border-color", "#C19751");
  $(this).addClass("border-4");
  // $(".remove_preview_cbd_btn").removeClass("hidden");

  $(this).siblings(2).prop("checked", true)

  var cbd_name = $(this).data("id");
  var cbd_price = $(this).children().eq(0).val();

  if(cbd_name == 'no-thankyou'){

    $("input[name=cbd]").prop("checked", false);

    $(".remove_preview_cbd_btn").addClass("hidden");
  
    let price = $('.price').text()
    let payload_price  = DataPayload.cbd.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
    delete DataPayload.cbd;
  
    add_data_into_cart()
    show_count_on_cart_icon()

  }

  else{
    add_data_into_cart()
    show_total()
  }

});



/***************************** Add Gold Flake to cart **************************** */

$(".goldflake_label").on("click", function (e) {
  e.preventDefault();
  if($(this).siblings(2).is(':checked')){

    $('.goldflake_label').removeClass("border-4 border-grey-700")
    $("input[name=goldflake]").prop("checked", false);
    $(".remove_preview_goldflake_btn").addClass("hidden");
    $(".gold_flakes_light_ingredient").hide()
    $(".gold_flakes_regular_ingredient").hide()
    $(".gold_flakes_strong_ingredient").hide()
  
    let price = $('.price').text()
    let payload_price  = DataPayload.goldflake.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
  
    delete DataPayload.goldflake;
  
    add_data_into_cart()
    show_count_on_cart_icon()
    return false
  }

  $('.goldflake_label').removeClass("border-4");

  $(".goldflake_label").css("border-color", "#C19751");


  $(this).addClass("border-4");
  // $(".remove_preview_goldflake_btn").removeClass("hidden");

  $(this).siblings(2).prop("checked", true)

  var goldflake_name = $(this).data("id");
  var goldflake_price = $(this).children().eq(0).val();

  $(".gold_flakes_light_ingredient").hide()
  $(".gold_flakes_regular_ingredient").hide()
  $(".gold_flakes_strong_ingredient").hide()
  

  if(goldflake_name=="Light"){
    $(".gold_flakes_light_ingredient").show();
  }

  else if(goldflake_name=="Regular"){
    $(".gold_flakes_regular_ingredient").show();
  }

  else if(goldflake_name=="Strong"){
    $(".gold_flakes_strong_ingredient").show();
  }

  if(goldflake_name == 'no-thankyou'){

    $("input[name=goldflake]").prop("checked", false);

    $(".remove_preview_goldflake_btn").addClass("hidden");
  
    $(".gold_flakes_light_ingredient").hide()
    $(".gold_flakes_regular_ingredient").hide()
    $(".gold_flakes_strong_ingredient").hide()
  
    let price = $('.price').text()
    let payload_price  = DataPayload.goldflake.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
  
    delete DataPayload.goldflake;
  
    add_data_into_cart()
    show_count_on_cart_icon()

  }

  else{
    add_data_into_cart()
    show_total()
  }


});



/***************************** Add Shimmer to cart **************************** */

$(".shimmer_label").on("click", function (e) {
  e.preventDefault();
  if($(this).siblings(2).is(':checked')){
    $('.shimmer_label').removeClass("border-4 border-grey-700")
    $("input[name=shimmer]").prop("checked", false);
  
    $(".remove_preview_shimmer_btn").addClass("hidden");
  
    $(".shimmer_light_ingredient").hide()
    $(".shimmer_regular_ingredient").hide()
    $(".shimmer_strong_ingredient").hide()
  
    delete DataPayload.shimmer;
  
    add_data_into_cart()
    show_count_on_cart_icon()
    return false
  }
  $('.shimmer_label').removeClass("border-4");
  $(".shimmer_label").css("border-color", "#C19751");

  $(this).addClass("border-4");

  $(this).children().eq(4).removeClass("hidden");
  // $(".remove_preview_shimmer_btn").removeClass("hidden");

//   $(this).children().eq(0).prop("checked", true);
  $(this).siblings(2).prop("checked", true)

  var shimmer_name = $(this).data("id");
  var shimmer_price = $(this).children().eq(0).val();

  $(".shimmer_light_ingredient").hide()
  $(".shimmer_regular_ingredient").hide()
  $(".shimmer_strong_ingredient").hide()

  if(shimmer_name=="Light"){
    $(".shimmer_light_ingredient").show();
  }

  else if(shimmer_name=="Regular"){
    $(".shimmer_regular_ingredient").show();
  }

  else if(shimmer_name=="Strong"){
    $(".shimmer_strong_ingredient").show();
  }

  if(shimmer_name == 'no-thankyou'){

    $("input[name=shimmer]").prop("checked", false);

    $(".remove_preview_shimmer_btn").addClass("hidden");

    $(".shimmer_light_ingredient").hide()
    $(".shimmer_regular_ingredient").hide()
    $(".shimmer_strong_ingredient").hide()

    delete DataPayload.shimmer;

    add_data_into_cart()
    show_count_on_cart_icon()

  }

  else{
    add_data_into_cart()
    show_total()
  }

});



/***************************** Add Botanicals to cart **************************** */

$(".botanicals_label").on("click", function (e) {
  e.preventDefault();
  if($(this).siblings(2).is(':checked')){
    $('.botanicals_label').removeClass("border-4 border-grey-700")
    $("input[name=botanicals]").prop("checked", false);
    $(".remove_preview_botanicals_btn").addClass("hidden");
    $(".botanical_calendula_ingredient").hide()
    $(".botanical_lavander_ingredient").hide()
    $(".botanical_chamomile_ingredient").hide()
    $(".botanical_cornflower_ingredient").hide()
    $(".botanical_rose_ingredient").hide()
    let price = $('.price').text()
    let payload_price  = DataPayload.botanicals.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
    delete DataPayload.botanicals;
    add_data_into_cart()
    show_count_on_cart_icon()
    return false
  }
  $(".botanicals_label_checked_icon").addClass("hidden");

  $('.botanicals_label').removeClass("border-4");
  $(".botanicals_label").css("border-color", "#C19751");
  $(this).addClass("border-4");
  // $(".remove_preview_botanicals_btn").removeClass("hidden");
  $(this).siblings(2).prop("checked", true);
  var botanicals_name = $(this).closest("label").attr("data-id")

  $(".botanical_calendula_ingredient").hide()
  $(".botanical_lavander_ingredient").hide()
  $(".botanical_chamomile_ingredient").hide()
  $(".botanical_cornflower_ingredient").hide()
  $(".botanical_rose_ingredient").hide()

  if(botanicals_name=="Calendula"){
    $(".botanical_calendula_ingredient").show()
  }

  else if(botanicals_name=="Lavander"){
    $(".botanical_lavander_ingredient").show();
  }

  else if(botanicals_name=="Chamomile"){
    $(".botanical_chamomile_ingredient").show();
  }

  else if(botanicals_name=="Cornflower"){
    $(".botanical_cornflower_ingredient").show();
  }

  else if(botanicals_name=="Rose"){
    $(".botanical_rose_ingredient").show();
  }
  
  if(botanicals_name == 'no-thankyou'){

    $("input[name=botanicals]").prop("checked", false);

    $(".remove_preview_botanicals_btn").addClass("hidden");
  
    $(".botanical_calendula_ingredient").hide()
    $(".botanical_lavander_ingredient").hide()
    $(".botanical_chamomile_ingredient").hide()
    $(".botanical_cornflower_ingredient").hide()
    $(".botanical_rose_ingredient").hide()
  
    let price = $('.price').text()
    let payload_price  = DataPayload.botanicals.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
    delete DataPayload.botanicals;
  
    add_data_into_cart()
    show_count_on_cart_icon()

  }

  else{
    add_data_into_cart()
    show_total()
  }

});


/***************************** Add crystals to cart **************************** */

$(".crystals_label").on("click", function (e) {
  e.preventDefault();
  if($(this).siblings(2).is(':checked')){
    $('.crystals_label').removeClass("border-4 border-grey-700")
    $("input[name=crystals]").prop("checked", false);
    $(".remove_preview_crystals_btn").addClass("hidden");
    $(".red_jasper_crystal_ingredient").hide()
    $(".clear_quartz_crystal_ingredient").hide()
    $(".sodalite_crystal_ingredient").hide()
    $(".green_malachite_crystal_ingredient").hide()
    $(".yellow_citrine_crystal_ingredient").hide()
    let price = $('.price').text()
    let payload_price  = DataPayload.crystals.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
    delete DataPayload.crystals;
    add_data_into_cart()
    show_count_on_cart_icon()
    return false
  }
  $(".crystals_label_checked_icon").addClass("hidden");
  $('.crystals_label').removeClass("border-4");
  $(".crystals_label").css("border-color", "#C19751");
  $(this).addClass("border-4");
  // $(".remove_preview_crystals_btn").removeClass("hidden");
  $(this).siblings(2).prop("checked", true);

  var crystals_name = $(this).closest("label").attr("data-id");

  $(".red_jasper_crystal_ingredient").hide()
  $(".clear_quartz_crystal_ingredient").hide()
  $(".sodalite_crystal_ingredient").hide()
  $(".green_malachite_crystal_ingredient").hide()
  $(".yellow_citrine_crystal_ingredient").hide()
  
  if(crystals_name=="Red Jasper"){
    $(".red_jasper_crystal_ingredient").show()
  }

  else if(crystals_name=="Clear Quartz"){
    $(".clear_quartz_crystal_ingredient").show();
  }

  else if(crystals_name=="Sodalite"){
    $(".sodalite_crystal_ingredient").show();
  }

  else if(crystals_name=="Green Malachite"){
    $(".green_malachite_crystal_ingredient").show();
  }

  else if(crystals_name=="Yellow Citrine"){
    $(".yellow_citrine_crystal_ingredient").show();
  }

  if(crystals_name == 'no-thankyou'){
    $("input[name=crystals]").prop("checked", false);

    $(".remove_preview_crystals_btn").addClass("hidden");

    $(".red_jasper_crystal_ingredient").hide()
    $(".clear_quartz_crystal_ingredient").hide()
    $(".sodalite_crystal_ingredient").hide()
    $(".green_malachite_crystal_ingredient").hide()
    $(".yellow_citrine_crystal_ingredient").hide()

    let price = $('.price').text()
    let payload_price  = DataPayload.crystals.price
    $('.price').html(parseInt(price) - parseInt(payload_price))
    delete DataPayload.crystals;

    add_data_into_cart()
    show_count_on_cart_icon()
  }

  else{
    add_data_into_cart()
    show_total()
  }

});

/***************************** remove oil **************************** */

$(document).on("click", ".remove_preview_oil_btn", function () {
//   $(".oil_label_checked_icon").addClass("hidden");
$('.oil_label').removeClass("border-4 border-grey-700")

  $("input[name=default_oil]").prop("checked", false);

  $(".remove_preview_oil_btn").addClass("hidden");

  $(".oil_ingredient").hide();
  let price = $('.price').text()
  let payload_price  = DataPayload.default_oil.price
  $('.price').html(parseInt(price) - parseInt(payload_price))
  delete DataPayload.default_oil;

  add_data_into_cart()
  show_count_on_cart_icon()
});

/***************************** remove fragrance **************************** */

$(document).on("click", ".remove_preview_fragrance_btn", function () {
//   $(".fragrance_label_checked_icon").addClass("hidden");
$('.fragrance_label').removeClass("border-4 border-grey-700")


  $("input[name=fragrance]").prop("checked", false);

  $(".remove_preview_fragrance_btn").addClass("hidden");

  delete DataPayload.fragrance;

  add_data_into_cart()
  show_count_on_cart_icon()
});

/***************************** remove cbd **************************** */

$(document).on("click", ".remove_preview_cbd_btn", function () {
//   $(".cbd_label_checked_icon").addClass("hidden");

  $('.cbd_label').removeClass("border-4 border-grey-700")


  $("input[name=cbd]").prop("checked", false);

  $(".remove_preview_cbd_btn").addClass("hidden");

  let price = $('.price').text()
  let payload_price  = DataPayload.cbd.price
  $('.price').html(parseInt(price) - parseInt(payload_price))
  delete DataPayload.cbd;

  add_data_into_cart()
  show_count_on_cart_icon()
});

/***************************** remove goldflake **************************** */

$(document).on("click", ".remove_preview_goldflake_btn", function () {

  $('.goldflake_label').removeClass("border-4 border-grey-700")
  $("input[name=goldflake]").prop("checked", false);
  $(".remove_preview_goldflake_btn").addClass("hidden");
  $(".gold_flakes_light_ingredient").hide()
  $(".gold_flakes_regular_ingredient").hide()
  $(".gold_flakes_strong_ingredient").hide()

  let price = $('.price').text()
  let payload_price  = DataPayload.goldflake.price
  $('.price').html(parseInt(price) - parseInt(payload_price))

  delete DataPayload.goldflake;

  add_data_into_cart()
  show_count_on_cart_icon()
});

/***************************** remove shimmer **************************** */

$(document).on("click", ".remove_preview_shimmer_btn", function () {
  $('.shimmer_label').removeClass("border-4 border-grey-700")
  $("input[name=shimmer]").prop("checked", false);
  $(".remove_preview_shimmer_btn").addClass("hidden");
  $(".shimmer_light_ingredient").hide()
  $(".shimmer_regular_ingredient").hide()
  $(".shimmer_strong_ingredient").hide()

  delete DataPayload.shimmer;

  add_data_into_cart()
  show_count_on_cart_icon()
});

/***************************** remove botanicals **************************** */

$(document).on("click", ".remove_preview_botanicals_btn", function () {
  $('.botanicals_label').removeClass("border-4 border-grey-700")
  $("input[name=botanicals]").prop("checked", false);
  $(".remove_preview_botanicals_btn").addClass("hidden");
  $(".botanical_calendula_ingredient").hide()
  $(".botanical_lavander_ingredient").hide()
  $(".botanical_chamomile_ingredient").hide()
  $(".botanical_cornflower_ingredient").hide()
  $(".botanical_rose_ingredient").hide()
  let price = $('.price').text()
  let payload_price  = DataPayload.botanicals.price
  $('.price').html(parseInt(price) - parseInt(payload_price))
  delete DataPayload.botanicals;
  add_data_into_cart()
  show_count_on_cart_icon()
});

/***************************** remove crystals **************************** */

$(document).on("click", ".remove_preview_crystals_btn", function () {
  $('.crystals_label').removeClass("border-4 border-grey-700")
  $("input[name=crystals]").prop("checked", false);
  $(".remove_preview_crystals_btn").addClass("hidden");
  $(".red_jasper_crystal_ingredient").hide()
  $(".clear_quartz_crystal_ingredient").hide()
  $(".sodalite_crystal_ingredient").hide()
  $(".green_malachite_crystal_ingredient").hide()
  $(".yellow_citrine_crystal_ingredient").hide()
  let price = $('.price').text()
  let payload_price  = DataPayload.crystals.price
  $('.price').html(parseInt(price) - parseInt(payload_price))
  delete DataPayload.crystals;
  add_data_into_cart()
  show_count_on_cart_icon()
});

/***************************** Submit Form **************************** */

function isObjectEmpty(object) {
  var isEmpty = true;
  for (keys in object) {
    isEmpty = false;
    break; // exiting since we found that the object is not empty
  }
  return isEmpty;
}

$("#submit_btn").on("click", function (e) {
  // e.preventDefault()
  console.log(totalPrice)
  let fm = document.querySelector("#oil_selection_form");
  let form_data = new FormData(fm);

  form_data.forEach((val, index) => {
    let value = val.split("_");
    DataPayload[index] = { name: value[0], price: value[1] };
  });

  var isEmpty = isObjectEmpty(DataPayload); // will return true;

  if (isEmpty) {
    alert("Please Select at least one ingredient");
  } else {
    DataPayload["total_price"] = totalPrice;
    console.log(DataPayload)
    // location.href = "https://harvest-selection.netlify.app/complete.html";
  }

  // DataPayload['total_price'] = totalPrice;
  // console.log(DataPayload)
});

$("#next_btn").on("click", function (e) {
  e.preventDefault();
  
  add_data_into_cart()
    
  // $(".total_price_display").html("Base Price: "+base_price+" + Sub Total: "+ price_before_base_added+" = $"+totalPrice);
});


function add_data_into_cart(){
  totalPrice = 0;
  totalPricee = 0;
  base_price = 40;
  let fm = document.querySelector("#oil_selection_form");
  let form_data = new FormData(fm);

  form_data.forEach((val, index) => {
    let value = val.split("_");
    DataPayload[index] = { name: value[0], price: value[1] };
  });

  Object.entries(DataPayload).map(
    ([key, value]) => (totalPrice += +value.price)
  );

  if(!isObjectEmpty(DataPayload)){
    $('.price_preview').show()
    $('.price').html(totalPrice)
  }
  let price_before_base_added = totalPrice
  
  totalPrice += +shipping_price
  totalPrice += +base_price
  totalPrice = totalPrice

  localStorage.setItem("grand_total_price", totalPrice);

  $('.bill_block').html('')

  if(!isObjectEmpty(DataPayload)){
      Object.keys(DataPayload).forEach((key, value) =>
          $(`<li class="flex py-6 px-4 sm:px-6">
              <div class="flex-1 flex flex-col">
                  <div class="flex">
                      <div class="min-w-0 flex-1">
                          <h4 class="text-sm">
                          <a href="#" class="font-medium text-gray-700 hover:text-gray-800"> ${DataPayload[key].name} </a>
                          </h4>
                      </div>
  
                      <div class="ml-4 flex-shrink-0 flow-root">
                          <p class="mt-1 text-sm font-medium text-gray-900">$${DataPayload[key].price}.00</p>
                      </div>
                  </div>
              </div>
          </li>`).appendTo($('.bill_block')
          ));

          $('.sub_total').html("$"+price_before_base_added)
          $('.base_price').html("$"+base_price)
          $('.shipping_price').html("$"+shipping_price)
          $('.top_amount_due').html("$"+totalPrice)
          $('.grand_total').html("$"+totalPrice)
          $('.no_data').hide()

          $('.cart_have_data').show()
  }

  else{
    $('.cart_have_data').hide()

    $('.no_data').show()

  }
}

/***************************** Add oil to cart **************************** */

$(".theme_bg").on("click", function (e) {
  e.preventDefault();
  // $('.oil_label_checked_icon').addClass('hidden');
  let skin_name = $(this).children().eq(0).val();

  $(".images_list").removeClass("border-4 border-green-500");

  $(this).children().eq(2).addClass("border-4 border-green-500");

  let image_src = $(this).children().eq(2).find("img").attr("data-id");
  console.log(image_src)


  localStorage.setItem("img_src", image_src);

  localStorage.setItem("skin_name", skin_name);

  
});

// $(".theme_bg").on("click", function (e) {
//   e.preventDefault();

//   console.log($(this).children().eq(2).find("img").attr("data-id"));
//   // $('.oil_label_checked_icon').addClass('hidden');
//   let value = $(this).children().eq(0).val();

//   $(".images_list").removeClass("border-4 border-green-500");

//   $(this).children().eq(2).addClass("border-4 border-green-500");

//   let image_src = $(this).children().eq(2).find("img").attr("data-id");

//   localStorage.setItem("img_src", image_src);
// });



$(".info_icon").on("click", function (e) {
  // let ingredient_name = $(this).closest("label").attr("data-id");
  let ingredient_name = $(this).attr("data-id");

  $(".ingredient_title").html(ingredient_name);



    if(ingredient_name=="Rosehip Oil"){
        $(".ingredient_detail").html(rosehip_detail);
    }

    else if(ingredient_name=="Marula Oil"){
        $(".ingredient_detail").html(marula_detail);
    }

    else if(ingredient_name=="Argan Oil"){
        $(".ingredient_detail").html(argan_detail);
    }

    else if(ingredient_name=="Jojoba Oil"){
        $(".ingredient_detail").html(jojoba_detail);
    }

    else if(ingredient_name=="Almond Oil"){
        $(".ingredient_detail").html(almond_detail);
    }

    else if(ingredient_name=="Calendula"){
        $(".ingredient_detail").html(calendula_detail);
    }

    else if(ingredient_name=="Lavander"){
        $(".ingredient_detail").html(lavander_detail);
    }

    else if(ingredient_name=="Lavander"){
        $(".ingredient_detail").html(lavander_detail);
    }

    else if(ingredient_name=="Chamomile"){
        $(".ingredient_detail").html(chamomile_detail);
    }

    else if(ingredient_name=="Cornflower"){
        $(".ingredient_detail").html(cornflower_detail);
    }

    else if(ingredient_name=="Rose"){
        $(".ingredient_detail").html(rose_fragrance_detail);
    }

    else if(ingredient_name=="Red Jasper"){
        $(".ingredient_detail").html(red_jasper_detail);
    }

    else if(ingredient_name=="Clear Quartz"){
        $(".ingredient_detail").html(clear_quartz_detail);
    }

    else if(ingredient_name=="Sodalite"){
        $(".ingredient_detail").html(sodalite_detail);
    }

    else if(ingredient_name=="Green Malachite"){
        $(".ingredient_detail").html(green_malachite_detail);
    }

    else if(ingredient_name=="Yellow Citrine"){
        $(".ingredient_detail").html(yellow_citrine_detail);
    }

    else if(ingredient_name=="017"){
      $(".ingredient_detail").html(zero_one_seven);
    }

    else if(ingredient_name=="013"){
      $(".ingredient_detail").html(zero_one_three);
    }

    else if(ingredient_name=="028"){
      $(".ingredient_detail").html(zero_two_eight);
    }

    else if(ingredient_name=="010"){
      $(".ingredient_detail").html(zero_one_zero);
    }

    else if(ingredient_name=="003"){
      $(".ingredient_detail").html(zero_zero_three);
    }
    
  
  document.getElementById("modal").classList.toggle("hidden");
});



function show_total(){
  totalPrice = 0;
  base_price = 40;
  shipping_price = 10;
  let fm = document.querySelector("#oil_selection_form");
  let form_data = new FormData(fm);

  form_data.forEach((val, index) => {
    let value = val.split("_");
    DataPayload[index] = { name: value[0], price: value[1] };
  });

  Object.entries(DataPayload).map(
    ([key, value]) => (totalPrice += +value.price)
  );

  if(!isObjectEmpty(DataPayload)){
    $('.price_preview').show()
    $('.price').html(totalPrice)
  }
  show_count_on_cart_icon()
}

function show_count_on_cart_icon(){
  $('.items_count').html(Object.keys(DataPayload).length)
}


$(".price_information_modal_btn").on("click", function (e) {
  e.preventDefault();

  $(".price_detail").html('');
  var page_number = $('.step_number').html()

  
  console.log(page_number)
    if(page_number=="1"){
        $(".price_detail").html(oil_price);
    }

    else if(page_number=="2"){
      // $(".price_ingredient_title_modal").html('Fragrance Pricing');

      $(".price_detail").html(fragrance_price);
    }

    else if(page_number=="3"){
      // $(".price_ingredient_title_modal").html('CBD Pricing');

      $(".price_detail").html(cbd_price);
    }

    else if(page_number=="4"){
      // $(".price_ingredient_title_modal").html('Gold Flakes Pricing');

      $(".price_detail").html(goldflakes_price);
      
    }

    else if(page_number=="5"){
      // $(".price_ingredient_title_modal").html('Shimmer Pricing');

      $(".price_detail").html(shimmer_price);
    }

    else if(page_number=="6"){
      // $(".price_ingredient_title_modal").html('Botanicals Pricing');

      $(".price_detail").html(botanicals_price);
    }

    else if(page_number=="7"){
      // $(".price_ingredient_title_modal").html('Crystals Pricing');

      $(".price_detail").html(crystals_price);
    }
  
  document.getElementById("pricemodal").classList.toggle("hidden");

});


// Recommendations
    var skin_goals_data = localStorage.getItem('skin_goals')
    if (skin_goals_data == null){
        console.log("Skin Goal in Empty")
    }
        if(skin_goals_data == "Brightening"){
          $('.marula_recommended_svg').removeClass("hidden")
          $('.marula_text_mobile').removeClass("hidden")

          $('.goldflake_regular_recommended_svg').removeClass("hidden")
          $('.goldflake_regular_text_mobile').removeClass("hidden")

        }

        if(skin_goals_data == "Anti-aging"){
          $('.rosehip_recommended_svg').removeClass("hidden")
          $('.rosehip_text_mobile').removeClass("hidden")

          $('.goldflake_regular_recommended_svg').removeClass("hidden")
          $('.goldflake_regular_text_mobile').removeClass("hidden")


          $('.botanical_rose_recommended_svg').removeClass("hidden")
          $('.botanical_rose_text_mobile').removeClass("hidden")
        }

        if(skin_goals_data == "Moisturising"){
          $('.argan_recommended_svg').removeClass("hidden")
          $('.argan_text_mobile').removeClass("hidden")

          $('.botanical_calendula_recommended_svg').removeClass("hidden")
          $('.botanical_calendula_text_mobile').removeClass("hidden")

        }

        if(skin_goals_data == "Calming-Soothing"){
          $('.Jojoba_recommended_svg').removeClass("hidden")
          $('.Jojoba_text_mobile').removeClass("hidden")

          $('.botanical_chamomile_recommended_svg').removeClass("hidden")
          $('.botanical_chamomile_text_mobile').removeClass("hidden")

        }

        if(skin_goals_data == "Shimmer-Glimmer"){
          $('.Almond_recommended_svg').removeClass("hidden")
          $('.Almond_text_mobile').removeClass("hidden")
          
          $('.shimmer_regular_recommended_svg').removeClass("hidden")
          $('.shimmer_regular_text_mobile').removeClass("hidden")

          $('.goldflake_regular_recommended_svg').removeClass("hidden")
          $('.goldflake_regular_text_mobile').removeClass("hidden")

        }
    // }


    // try {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("POST", "https://hooks.zapier.com/hooks/catch/7200544/bgiug59/");
    //   xhr.send(JSON.stringify({data: "example"}));
    //   console.log("Pushed to Zapier successfully!");
    // } catch(e) {
    //   console.error(e);
    // }



  document.querySelector('#contact_form').addEventListener('submit', (e) => {
    e.preventDefault()
    const Contactdata = Object.fromEntries(new FormData(e.target).entries());
    Contactdata['total_price'] =  localStorage.getItem("grand_total_price")
    Contactdata['order_data'] =  DataPayload
    // console.log(Contactdata)
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://hooks.zapier.com/hooks/catch/7200544/bgiug59/");
      xhr.send(JSON.stringify({data: Contactdata}));
      console.log("Pushed to Zapier successfully!");
      location.href = "https://customize.harvestselection.com/complete.html";
    } catch(e) {
      console.error(e);
    }
  });