const wix = (id: string, transform: string, name: string) =>
  `https://static.wixstatic.com/media/${id}/${transform}/${name}`;

export const assets = {
  logo: wix(
    '783deb_5b03ea42742f4da1b175c1e51f7b2101~mv2.png',
    'v1/fill/w_370,h_191,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '3s%20logo%20copy.png'
  ),
  homeHero: wix(
    '783deb_285aaaffa05d448ea798a65836c8bfe0~mv2.jpg',
    'v1/fill/w_1920,h_1080,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_285aaaffa05d448ea798a65836c8bfe0~mv2.jpg'
  ),
  homeSecondary: wix(
    '783deb_888288b51dbd40879412d3959853d833~mv2.jpg',
    'v1/fill/w_1200,h_800,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_888288b51dbd40879412d3959853d833~mv2.jpg'
  ),
  about: wix(
    '783deb_4569de24fbab495da7437ffbf1859192~mv2.jpg',
    'v1/fill/w_1600,h_900,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_4569de24fbab495da7437ffbf1859192~mv2.jpg'
  ),
  engineering: wix(
    '783deb_b0b9cd341fd4450a87004f81e7c13833~mv2.jpg',
    'v1/fill/w_1600,h_900,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_b0b9cd341fd4450a87004f81e7c13833~mv2.jpg'
  ),
  electrical: wix(
    '783deb_e009196ae05a4c12b1239dfd1ecb8853~mv2.jpg',
    'v1/fill/w_1600,h_620,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_e009196ae05a4c12b1239dfd1ecb8853~mv2.jpg'
  ),
  power: wix(
    '783deb_40c91d4709a34a4aa5b15b158fce9939~mv2.png',
    'v1/fill/w_1600,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_40c91d4709a34a4aa5b15b158fce9939~mv2.png'
  ),
  automation: wix(
    '783deb_15645dd697f6471394b91d118f24d1a0~mv2.jpg',
    'v1/fill/w_900,h_1200,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_15645dd697f6471394b91d118f24d1a0~mv2.jpg'
  ),
  modeling: wix(
    '783deb_575949546eb6454182d0d5b254f27957~mv2.jpg',
    'v1/fill/w_1600,h_900,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_575949546eb6454182d0d5b254f27957~mv2.jpg'
  ),
  asBuilt: wix(
    '783deb_2ad1542bfc5f4317a2db918030964a4e~mv2.jpg',
    'v1/fill/w_1600,h_760,al_c,q_88,enc_avif,quality_auto',
    '783deb_2ad1542bfc5f4317a2db918030964a4e~mv2.jpg'
  ),
  feed: wix(
    '783deb_d092eb6e70114de4973aa21a59eeb159~mv2.jpg',
    'v1/fill/w_1500,h_860,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_d092eb6e70114de4973aa21a59eeb159~mv2.jpg'
  ),
  feedGraphic: wix(
    '783deb_55877deeffe54d5dbca943af780ddcf3~mv2.png',
    'v1/fill/w_900,h_900,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    'feed%20ENG%20STUDY%20copy_edited.png'
  ),
  emissions: wix(
    '783deb_f0e25b734dab4adfa3a93df01a0d5cac~mv2.jpg',
    'v1/fill/w_1100,h_1100,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_f0e25b734dab4adfa3a93df01a0d5cac~mv2.jpg'
  ),
  projectManagement: wix(
    '783deb_1d79496659704ec191b55b413e58e224~mv2.jpeg',
    'v1/fill/w_1200,h_800,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_1d79496659704ec191b55b413e58e224~mv2.jpeg'
  ),
  qms: wix(
    '783deb_e3fc6397c3b145e0a7d3b11920cdcdea~mv2.jpeg',
    'v1/fill/w_1500,h_995,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_e3fc6397c3b145e0a7d3b11920cdcdea~mv2.jpeg'
  ),
  safety: wix(
    '783deb_6378a110d4a34d3bb5b96d9f992f019a~mv2.jpeg',
    'v1/fill/w_1500,h_668,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    '783deb_6378a110d4a34d3bb5b96d9f992f019a~mv2.jpeg'
  ),
  officeMidland: wix(
    '783deb_9684b1a8ba9f4cebba8663699fe015cd~mv2.jpg',
    'v1/fill/w_900,h_500,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    'minland%20office.jpg'
  ),
  officeHouston: wix(
    '783deb_0651dac9af9a4cc78bd2d10785062dcc~mv2.jpg',
    'v1/fill/w_900,h_500,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    'Houston%20Office.jpg'
  ),
  officeArlington: wix(
    '783deb_9c5c5fe7828542ccbbdd5f47fd7c178e~mv2.jpg',
    'v1/fill/w_900,h_500,al_c,q_88,usm_0.66_1.00_0.01,enc_avif,quality_auto',
    'Dallas%20Office.jpg'
  )
} as const;
