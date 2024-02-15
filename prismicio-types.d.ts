// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogpostDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for Blogpost documents
 */
interface BlogpostDocumentData {
  /**
   * Heading field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Created at field in *Blogpost*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.created_at
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  created_at: prismic.DateField;

  /**
   * Description field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Hero Image field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.hero_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Blogpost*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
   * Meta Title field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blogpost.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blogpost.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blogpost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostDocumentData>,
    "blogpost",
    Lang
  >;

/**
 * Item in *GrowthAreaPoints → Product and Engineering*
 */
export interface GrowthareapointsDocumentDataProductAndEngineeringItem {
  /**
   * Point field in *GrowthAreaPoints → Product and Engineering*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: growthareapoints.product_and_engineering[].point
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  point: prismic.KeyTextField;
}

/**
 * Item in *GrowthAreaPoints → Team and Talent*
 */
export interface GrowthareapointsDocumentDataTeamAndTalentItem {
  /**
   * Point field in *GrowthAreaPoints → Team and Talent*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: growthareapoints.team_and_talent[].point
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  point: prismic.KeyTextField;
}

/**
 * Content for GrowthAreaPoints documents
 */
interface GrowthareapointsDocumentData {
  /**
   * Product and Engineering field in *GrowthAreaPoints*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: growthareapoints.product_and_engineering[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product_and_engineering: prismic.GroupField<
    Simplify<GrowthareapointsDocumentDataProductAndEngineeringItem>
  >;

  /**
   * Team and Talent field in *GrowthAreaPoints*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: growthareapoints.team_and_talent[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  team_and_talent: prismic.GroupField<
    Simplify<GrowthareapointsDocumentDataTeamAndTalentItem>
  >;
}

/**
 * GrowthAreaPoints document from Prismic
 *
 * - **API ID**: `growthareapoints`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GrowthareapointsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GrowthareapointsDocumentData>,
    "growthareapoints",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = HeroSliceSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | FirmOverviewSlice
  | FavouriteIndeustrySlice
  | CapabilitiesSlice
  | FocusAreasSlice
  | BlogContentIndexSlice
  | LeftImageSliceSlice
  | GrowthInvestmentAreaSlice
  | HowWeOperateSlice
  | ImpactInitiativesSlice
  | ContactHeroSlice
  | ContactFormSectionSlice
  | TeamIndexSlice
  | HeroSliceSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | BlogpostDocument
  | GrowthareapointsDocument
  | HomepageDocument
  | PageDocument;

/**
 * Default variation for BlogContentIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogContentIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *BlogContentIndex*
 */
type BlogContentIndexSliceVariation = BlogContentIndexSliceDefault;

/**
 * BlogContentIndex Shared Slice
 *
 * - **API ID**: `blog_content_index`
 * - **Description**: BlogContentIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogContentIndexSlice = prismic.SharedSlice<
  "blog_content_index",
  BlogContentIndexSliceVariation
>;

/**
 * Default variation for Capabilities Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CapabilitiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Capabilities*
 */
type CapabilitiesSliceVariation = CapabilitiesSliceDefault;

/**
 * Capabilities Shared Slice
 *
 * - **API ID**: `capabilities`
 * - **Description**: Capabilities
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CapabilitiesSlice = prismic.SharedSlice<
  "capabilities",
  CapabilitiesSliceVariation
>;

/**
 * Primary content in *ContactFormSection → Primary*
 */
export interface ContactFormSectionSliceDefaultPrimary {
  /**
   * Heading field in *ContactFormSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *ContactFormSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Primary content in *ContactFormSection → Items*
 */
export interface ContactFormSectionSliceDefaultItem {
  /**
   * Contact Person Name field in *ContactFormSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.items[].contact_person_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_person_name: prismic.KeyTextField;

  /**
   * Contact Person Position field in *ContactFormSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.items[].contact_person_position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_person_position: prismic.KeyTextField;

  /**
   * Contact Person Email field in *ContactFormSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.items[].contact_person_email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_person_email: prismic.KeyTextField;
}

/**
 * Default variation for ContactFormSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSectionSliceDefaultPrimary>,
  Simplify<ContactFormSectionSliceDefaultItem>
>;

/**
 * Slice variation for *ContactFormSection*
 */
type ContactFormSectionSliceVariation = ContactFormSectionSliceDefault;

/**
 * ContactFormSection Shared Slice
 *
 * - **API ID**: `contact_form_section`
 * - **Description**: ContactFormSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSectionSlice = prismic.SharedSlice<
  "contact_form_section",
  ContactFormSectionSliceVariation
>;

/**
 * Primary content in *ContactHero → Primary*
 */
export interface ContactHeroSliceDefaultPrimary {
  /**
   * Heading field in *ContactHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *ContactHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_hero.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Background Image field in *ContactHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_hero.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContactHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactHero*
 */
type ContactHeroSliceVariation = ContactHeroSliceDefault;

/**
 * ContactHero Shared Slice
 *
 * - **API ID**: `contact_hero`
 * - **Description**: ContactHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactHeroSlice = prismic.SharedSlice<
  "contact_hero",
  ContactHeroSliceVariation
>;

/**
 * Default variation for FavouriteIndustry Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FavouriteIndeustrySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *FavouriteIndustry*
 */
type FavouriteIndeustrySliceVariation = FavouriteIndeustrySliceDefault;

/**
 * FavouriteIndustry Shared Slice
 *
 * - **API ID**: `favourite_indeustry`
 * - **Description**: FavouriteIndeustry
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FavouriteIndeustrySlice = prismic.SharedSlice<
  "favourite_indeustry",
  FavouriteIndeustrySliceVariation
>;

/**
 * Primary content in *FirmOverview → Primary*
 */
export interface FirmOverviewSliceDefaultPrimary {
  /**
   * Firm Overview Content field in *FirmOverview → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: firm_overview.primary.firm_overview_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  firm_overview_content: prismic.RichTextField;

  /**
   * Firm Strategy Content field in *FirmOverview → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: firm_overview.primary.firm_strategy_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  firm_strategy_content: prismic.RichTextField;
}

/**
 * Default variation for FirmOverview Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FirmOverviewSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FirmOverviewSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FirmOverview*
 */
type FirmOverviewSliceVariation = FirmOverviewSliceDefault;

/**
 * FirmOverview Shared Slice
 *
 * - **API ID**: `firm_overview`
 * - **Description**: FirmOverview
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FirmOverviewSlice = prismic.SharedSlice<
  "firm_overview",
  FirmOverviewSliceVariation
>;

/**
 * Default variation for FocusAreas Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FocusAreasSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *FocusAreas*
 */
type FocusAreasSliceVariation = FocusAreasSliceDefault;

/**
 * FocusAreas Shared Slice
 *
 * - **API ID**: `focus_areas`
 * - **Description**: FocusAreas
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FocusAreasSlice = prismic.SharedSlice<
  "focus_areas",
  FocusAreasSliceVariation
>;

/**
 * Default variation for GrowthInvestmentArea Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GrowthInvestmentAreaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *GrowthInvestmentArea*
 */
type GrowthInvestmentAreaSliceVariation = GrowthInvestmentAreaSliceDefault;

/**
 * GrowthInvestmentArea Shared Slice
 *
 * - **API ID**: `growth_investment_area`
 * - **Description**: GrowthInvestmentArea
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GrowthInvestmentAreaSlice = prismic.SharedSlice<
  "growth_investment_area",
  GrowthInvestmentAreaSliceVariation
>;

/**
 * Primary content in *HeroSlice → Primary*
 */
export interface HeroSliceSliceDefaultPrimary {
  /**
   * Heading field in *HeroSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *HeroSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Background Image field in *HeroSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSlice*
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;

/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: HeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlice = prismic.SharedSlice<
  "hero_slice",
  HeroSliceSliceVariation
>;

/**
 * Primary content in *HowWeOperate → Primary*
 */
export interface HowWeOperateSliceDefaultPrimary {
  /**
   * Heading field in *HowWeOperate → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_we_operate.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *HowWeOperate → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_we_operate.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Primary content in *HowWeOperate → Items*
 */
export interface HowWeOperateSliceDefaultItem {
  /**
   * Experience Point field in *HowWeOperate → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_we_operate.items[].experience_point
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  experience_point: prismic.KeyTextField;

  /**
   * Benefit Point field in *HowWeOperate → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_we_operate.items[].benefit_point
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  benefit_point: prismic.KeyTextField;
}

/**
 * Default variation for HowWeOperate Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowWeOperateSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HowWeOperateSliceDefaultPrimary>,
  Simplify<HowWeOperateSliceDefaultItem>
>;

/**
 * Slice variation for *HowWeOperate*
 */
type HowWeOperateSliceVariation = HowWeOperateSliceDefault;

/**
 * HowWeOperate Shared Slice
 *
 * - **API ID**: `how_we_operate`
 * - **Description**: HowWeOperate
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowWeOperateSlice = prismic.SharedSlice<
  "how_we_operate",
  HowWeOperateSliceVariation
>;

/**
 * Primary content in *ImpactInitiatives → Items*
 */
export interface ImpactInitiativesSliceDefaultItem {
  /**
   * Initiative Heading field in *ImpactInitiatives → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: impact_initiatives.items[].initiative_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  initiative_heading: prismic.KeyTextField;

  /**
   * Initiative Tagline field in *ImpactInitiatives → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: impact_initiatives.items[].initiative_tagline
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  initiative_tagline: prismic.LinkField;
}

/**
 * Default variation for ImpactInitiatives Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImpactInitiativesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ImpactInitiativesSliceDefaultItem>
>;

/**
 * Slice variation for *ImpactInitiatives*
 */
type ImpactInitiativesSliceVariation = ImpactInitiativesSliceDefault;

/**
 * ImpactInitiatives Shared Slice
 *
 * - **API ID**: `impact_initiatives`
 * - **Description**: ImpactInitiatives
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImpactInitiativesSlice = prismic.SharedSlice<
  "impact_initiatives",
  ImpactInitiativesSliceVariation
>;

/**
 * Primary content in *LeftImageSlice → Primary*
 */
export interface LeftImageSliceSliceDefaultPrimary {
  /**
   * LeftImage field in *LeftImageSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: left_image_slice.primary.leftimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  leftimage: prismic.ImageField<never>;

  /**
   * Description field in *LeftImageSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: left_image_slice.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image left? field in *LeftImageSlice → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: left_image_slice.primary.image_left
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  image_left: prismic.BooleanField;

  /**
   * Image Circle field in *LeftImageSlice → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: left_image_slice.primary.image_circle
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  image_circle: prismic.BooleanField;
}

/**
 * Default variation for LeftImageSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeftImageSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LeftImageSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LeftImageSlice*
 */
type LeftImageSliceSliceVariation = LeftImageSliceSliceDefault;

/**
 * LeftImageSlice Shared Slice
 *
 * - **API ID**: `left_image_slice`
 * - **Description**: LeftImageSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeftImageSliceSlice = prismic.SharedSlice<
  "left_image_slice",
  LeftImageSliceSliceVariation
>;

/**
 * Primary content in *TeamIndex → Items*
 */
export interface TeamIndexSliceDefaultItem {
  /**
   * Member Image field in *TeamIndex → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team_index.items[].member_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  member_image: prismic.ImageField<never>;

  /**
   * Member Name field in *TeamIndex → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_index.items[].member_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_name: prismic.KeyTextField;

  /**
   * Member Position field in *TeamIndex → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_index.items[].member_position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_position: prismic.KeyTextField;
}

/**
 * Default variation for TeamIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TeamIndexSliceDefaultItem>
>;

/**
 * Slice variation for *TeamIndex*
 */
type TeamIndexSliceVariation = TeamIndexSliceDefault;

/**
 * TeamIndex Shared Slice
 *
 * - **API ID**: `team_index`
 * - **Description**: TeamIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamIndexSlice = prismic.SharedSlice<
  "team_index",
  TeamIndexSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Main Content field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.main_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  main_content: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogpostDocument,
      BlogpostDocumentData,
      BlogpostDocumentDataSlicesSlice,
      GrowthareapointsDocument,
      GrowthareapointsDocumentData,
      GrowthareapointsDocumentDataProductAndEngineeringItem,
      GrowthareapointsDocumentDataTeamAndTalentItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogContentIndexSlice,
      BlogContentIndexSliceVariation,
      BlogContentIndexSliceDefault,
      CapabilitiesSlice,
      CapabilitiesSliceVariation,
      CapabilitiesSliceDefault,
      ContactFormSectionSlice,
      ContactFormSectionSliceDefaultPrimary,
      ContactFormSectionSliceDefaultItem,
      ContactFormSectionSliceVariation,
      ContactFormSectionSliceDefault,
      ContactHeroSlice,
      ContactHeroSliceDefaultPrimary,
      ContactHeroSliceVariation,
      ContactHeroSliceDefault,
      FavouriteIndeustrySlice,
      FavouriteIndeustrySliceVariation,
      FavouriteIndeustrySliceDefault,
      FirmOverviewSlice,
      FirmOverviewSliceDefaultPrimary,
      FirmOverviewSliceVariation,
      FirmOverviewSliceDefault,
      FocusAreasSlice,
      FocusAreasSliceVariation,
      FocusAreasSliceDefault,
      GrowthInvestmentAreaSlice,
      GrowthInvestmentAreaSliceVariation,
      GrowthInvestmentAreaSliceDefault,
      HeroSliceSlice,
      HeroSliceSliceDefaultPrimary,
      HeroSliceSliceVariation,
      HeroSliceSliceDefault,
      HowWeOperateSlice,
      HowWeOperateSliceDefaultPrimary,
      HowWeOperateSliceDefaultItem,
      HowWeOperateSliceVariation,
      HowWeOperateSliceDefault,
      ImpactInitiativesSlice,
      ImpactInitiativesSliceDefaultItem,
      ImpactInitiativesSliceVariation,
      ImpactInitiativesSliceDefault,
      LeftImageSliceSlice,
      LeftImageSliceSliceDefaultPrimary,
      LeftImageSliceSliceVariation,
      LeftImageSliceSliceDefault,
      TeamIndexSlice,
      TeamIndexSliceDefaultItem,
      TeamIndexSliceVariation,
      TeamIndexSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
