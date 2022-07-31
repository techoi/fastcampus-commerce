import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const sneakers = [
  {
    name: `Sneakers 1`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_nike_air-max-95-qs_DM0012-600.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 2`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_jordan_womens-aj-1-retro-high-og_DJ4891-061.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 3`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_jordan_aj-1-mid-se-craft_DM9652-100.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 4`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_new_balance-990v3-_made-by-teddy-santis__M990TG3.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 5`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_converse_chuck-70-hi_A00754C.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 6`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_nike_air-force-1-low-retro_DJ3911-100.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 7`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_nike_air-more-uptempo-96_DH8011-100.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 8`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_nike_air-force-1-high-07-lv8-vintage_DM0209-100.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 9`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_nike_air-max-95_DV3197-001.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 10`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_nike_acg-mountain-fly-low-se_DQ1979-001.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
]

const tShirt = [
  {
    name: `T-Shirt 1`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tees_undefeated_lockup-ss-tee_80299.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 2`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tees_undefeated_magic-ss-tee_80309.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 3`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_undefeated_juice-basketball-jersey_10091.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 4`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tees_undefeated_top-dog-ss-tee_80323.color_navy.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 5`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tees_undefeated_est.-ss-tee_80332.color_teal.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 6`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tees_undefeated_signals-ss-tee_80328.color_navy.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 7`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tees_nike_nrg-ispa-gpx-tee_DV0687-817.color_rushorange.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 8`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tees_bape_1st-camo-bape-logo-tee_1I30-110-070.color_white.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 9`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_patta_yo-whats-up-t-shirt_AW22-WHATS-UP-TS-001.color_phantom.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 10`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_patta_smile-for-me-t-shirt_AW22-SMILE-TS-001.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
]

const pants = [
  {
    name: `Pants 1`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_running-short_UA60012.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 2`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_wave-short_50061.color_teal.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 3`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_outliNE-logo-sport-short_50060.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 4`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_outliNE-logo-sport-short_50060.color_tangerine.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 5`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_hoop-short_60064.color_grey.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 6`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_hoop-short_60064.color_lavender.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 7`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_hoop-short_60064.color_teal.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 8`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_classic-swim-trunk_50059.color_pink.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 9`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_undefeated_vintage-twill-short_50034.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 10`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottoms_running-short_UA60012.color_navy.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
]

const cap = [
  {
    name: `Cap 1`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_twill-boonie_90222.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 2`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_ne_two-toNE-lp-snapback_90220.color_blackteal.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 3`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_nylon-icon-strapback_90212.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 4`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_stencil-icon-label-beanie_90204.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 5`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_ne_icon-fitted_90200.color_navy.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 6`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_icon-bucket-hat_90221.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 7`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_icon-bucket-hat_90221.color_dark-grey.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 8`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_icon-bucket-hat_90221.color_tangerine.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 9`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_headwear_undefeated_wave-strapback_90218.color_teal.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 10`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/accessories_vans_anderson_paak-malibu-bucket-hat_VN0A54A2211.color_multi.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
]

const hoodie = [
  {
    name: `Hoodie 1`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_undefeated_stencil-logo-pullover-hood_20078.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 2`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_undefeated_stencil-icon-pullover-hood_20077.color_olive.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 3`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_undefeated_uactp-icon-pullover-hoodie_UA20008.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 4`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_undefeated_uactp-icon-pullover-hoodie_UA20008.color_heathergrey.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 5`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_undefeated_la_kings-chrome-hoodie_70025.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 6`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_bape_color-camo-shark-wide-fit-full-zip-double_1H80-115-010.color_red.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 7`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_jordan_mcr-flc-hoodie_DJ9772-839.color_coppermoon.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 8`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_newbalance_made-in-usa-core-hoodie_MT21540.color_athletic-grey.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 9`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bottom_patta_teddy-bear-boxy-hooded-sweater_TEDDY-BEAR-BHS-001.color_black.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 10`,
    contents: `{"blocks":[{"key":"5fi56","text":"본 제품은 오가닉 소재입니다. 어느 스타일에도 잘 어울리는 힙한 감성을 품고 있습니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_bape_color-camo-tiger-shark-wide-full-zip-double_1I30-115-021.view_1_720x.jpg',
    price: getRandom(300000, 100000),
  },
]

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirt,
  ...pants,
  ...cap,
  ...hoodie,
]

async function main() {
  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
